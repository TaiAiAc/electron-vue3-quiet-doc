---
title: typeorm
---

# {{ $frontmatter.title }}

## 简介

> TypeORM 是一种[ORM](https://en.wikipedia.org/wiki/Object-relational_mapping)，可以在 NodeJS，Browser，Cordova，PhoneGap，Ionic，React Native，NativeScript，Expo 和 Electron 平台中运行，并且可以与 TypeScript 和 JavaScript（ES5，ES6，ES7，ES8）一起使用。它的目标是始终支持最新的 JavaScript 功能，并提供其他功能，帮助您开发使用数据库的任何类型的应用程序 - 从具有几个表的小型应用程序到具有多个数据库的大型企业应用程序。

TypeORM 支持[Active Record](https://github.com/typeorm/typeorm/blob/master/docs/active-record-data-mapper.md#what-is-the-active-record-pattern)和[Data Mapper](https://github.com/typeorm/typeorm/blob/master/docs/active-record-data-mapper.md#what-is-the-data-mapper-pattern)模式，这与目前存在的所有其他 JavaScript ORM 不同，这意味着您可以以最有效的方式编写高质量，松散耦合，可扩展，可维护的应用程序。

TypeORM 受到其他 ORM 的高度影响，例如[Hibernate](http://hibernate.org/orm/)，[Doctrine](http://www.doctrine-project.org/)和[Entity Framework](https://www.asp.net/entity-framework)。

— [typeorm 文档](https://github.com/typeorm/typeorm)

## 起步

### 脚手架安装

```sh
npx typeorm init --name MyProject --database sqlite
```

```sh
cd MyProject
npm install
```

根据脚手架自动生成的代码添加后续代码

或自行安装

```sh
ni typeorm reflect-metadata sqlite3 -S
```

#### TypeScript configuration

此外，请确保您使用的是 TypeScript 版本 **4.5** 或更高版本，并且您已在 中启用了以下设置：`tsconfig.json`

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

您可能还需要在编译器选项部分中启用，或从 中安装。` es6``lib``es6-shim``@types `

```js
src
├── entity            // 表实例
│   └── User.ts       // 实例模型
├── migration         // 数据库迁移目录
├── data-source.ts    // 数据源和所有连接配置
└── index.ts          // 应用程序的起点

```

使用数据库从创建表开始。如何告诉 TypeORM 创建数据库表？答案是 - 通过模型。应用中的模型是数据库表。

### 创建表

`entity/Photo.ts`

```js
export class Photo {
  id: number
  name: string
  description: string
  filename: string
  views: number
  isPublished: boolean
}
```

### 创建实例

`entity/Photo.ts`

```js
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

//  实例化
@Entity()
export class Photo {
  //  主建装饰器
  // @PrimaryColumn()
  // 自增的主建
  @PrimaryGeneratedColumn()
  id: number

  // 列装饰器
  // 限制内容
  @Column({ length: 100 })
  name: string

  // 数据类型
  @Column('text')
  description: string

  @Column()
  filename: string

  @Column('double')
  views: number

  @Column()
  isPublished: boolean
}
```

### 初始化连接

`data-source.ts`

```js
import 'reflect-metadata'
import { DataSource } from 'typeorm'
// 所有创建的表需引入挂载
import { User } from './entity/User'

// 初始化
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/database.sqlite',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
})

//注册所有实体来初始化与数据库的连接
//和“同步”数据库模式，调用新创建的数据库的“initialize()”方法
//在你的应用程序引导程序
export const init = callback => {
  AppDataSource.initialize()
    .then(async () => {
      // 在这里您可以开始使用数据库
      const user = new User()
      user.firstName = 'Timber'
      user.lastName = 'Saw'
      user.age = 25
      await AppDataSource.manager.save(user)
      console.log('保存一个新用户的id: ' + user.id)
      const users = await AppDataSource.manager.find(User)
      console.log('加载用户: ', users)
      console.log('在这里你可以设置和运行express / fastify /任何其他框架.')

      callback()
    })
    .catch(error => console.log(error))
}
```

### 将表插入到数据库

> 插入前要注意数据库先运行,否则会报错

```js
const photo = new Photo()
photo.name = 'Me and Bears'
photo.description = 'I am near polar bears'
photo.filename = 'photo-with-bears.jpg'
photo.views = 1
photo.isPublished = true

await AppDataSource.manager.save(photo)
console.log('Photo has been saved. Photo id is', photo.id)
```

### 实例管理器

```js
const savedPhotos = await AppDataSource.manager.find(Photo)
console.log('All photos from the db: ', savedPhotos)
```

### 使用实例内置方法

```js
const photo = new Photo()
photo.name = 'Me and Bears'
photo.description = 'I am near polar bears'
photo.filename = 'photo-with-bears.jpg'
photo.views = 1
photo.isPublished = true

// 获取实例
const photoRepository = AppDataSource.getRepository(Photo)

// 使用内置方法
await photoRepository.save(photo)
console.log('Photo has been saved')

// 查询
const savedPhotos = await photoRepository.find()
console.log('All photos from the db: ', savedPhotos)
```

### 更多实例方法

```js
const photoRepository = AppDataSource.getRepository(Photo)
// 查询表
const allPhotos = await photoRepository.find()
console.log('All photos from the db: ', allPhotos)

// 查询一条id=1的数据
const firstPhoto = await photoRepository.findOneBy({
  id: 1
})
console.log('First photo from the db: ', firstPhoto)

// 条件查询,一条
const meAndBearsPhoto = await photoRepository.findOneBy({
  name: 'Me and Bears'
})
console.log('Me and Bears photo from the db: ', meAndBearsPhoto)

// 条件查询,多条
const allViewedPhotos = await photoRepository.findBy({ views: 1 })
console.log('All viewed photos: ', allViewedPhotos)

// 条件查询,多条
const allPublishedPhotos = await photoRepository.findBy({ isPublished: true })
console.log('All published photos: ', allPublishedPhotos)

// 混合查询,条目,数据
const [photos, photosCount] = await photoRepository.findAndCount()
console.log('All photos: ', photos)
console.log('Photos count: ', photosCount)
```

### 更新数据

```js
import { Photo } from './entity/Photo'
import { AppDataSource } from './index'

// 获取控制器
const photoRepository = AppDataSource.getRepository(Photo)

// 读取id为1的一条数据
const photoToUpdate = await photoRepository.findOneBy({
  id: 1
})

// 更新内容
photoToUpdate.name = 'Me, my friends and polar bears'
// 保存更新
await photoRepository.save(photoToUpdate)
```

### 删除数据

```js
import { Photo } from './entity/Photo'
import { AppDataSource } from './index'

const photoRepository = AppDataSource.getRepository(Photo)
const photoToRemove = await photoRepository.findOneBy({
  id: 1
})

// 删除操作
await photoRepository.remove(photoToRemove)
```

### 创建关联表

> 两张表应同时创建,添加数据时也应保持其关联性
> 在 sqlite 中 PhotoMetadata 对 Photo 的引用为主建 id

```js
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int')
  height: number

  @Column('int')
  width: number

  @Column()
  orientation: string

  @Column()
  compressed: boolean

  @Column()
  comment: string

  // 关联函数
  @OneToOne(() => Photo)
  @JoinColumn()
  photo: Photo
}
```

### 反向,双向关联

> 关联可以反向,也可以双向.目前，PhotoMetadata 和 Photo 之间的关系是单向的。这种关系的所有者是 PhotoMetadata，而 Photo 对 PhotoMetadata 一无所知。这使得从照片端访问 PhotoMetadata 变得复杂。要解决此问题，我们应该添加一个反关系，并使 PhotoMetadata 和 Photo 之间的关系双向。

相互引用,声明

```js
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class PhotoMetadata {
  /* ... other columns */

  @OneToOne(() => Photo, photo => photo.metadata)
  @JoinColumn()
  photo: Photo
}
```

```js
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { PhotoMetadata } from './PhotoMetadata'

@Entity()
export class Photo {
  /* ... other columns */

  @OneToOne(() => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata: PhotoMetadata
}
```

### 循环引用的问题

> 如果在 TypeScript 项目中使用 ESM，则应在关系属性中使用包装器类型，以避免循环依赖项问题。让我们修改我们的实体：`Relation`

```js
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Relation
} from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class PhotoMetadata {
  /* ... other columns */

  @OneToOne(() => Photo, photo => photo.metadata)
  @JoinColumn()
  photo: Relation<Photo>
}
```

```js
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Relation
} from 'typeorm'
import { PhotoMetadata } from './PhotoMetadata'

@Entity()
export class Photo {
  /* ... other columns */

  @OneToOne(() => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata: Relation<PhotoMetadata>
}
```

### 加载表及关联表

#### 使用控制器

```js
import { Photo } from './entity/Photo'
import { PhotoMetadata } from './entity/PhotoMetadata'
import { AppDataSource } from './index'

// 获取控制器
const photoRepository = AppDataSource.getRepository(Photo)
// 加载关联表
const photos = await photoRepository.find({
  relations: {
    metadata: true
  }
})
```

查询结果:

```js
photos:  [
  Photo {
    id: 1,
    name: 'Me and Bears',
    description: 'I am near polar bears',
    filename: 'photo-with-bears.jpg',
    views: 1,
    isPublished: true,
    metadata: PhotoMetadata {
      id: 1,
      height: 640,
      width: 480,
      orientation: 'portrait',
      compressed: true,
      comment: 'cybershoot'
    }
  }
]
```

#### 复杂查询

```js
import { Photo } from './entity/Photo'
import { PhotoMetadata } from './entity/PhotoMetadata'
import { AppDataSource } from './index'

const photos = await AppDataSource.getRepository(Photo)
  .createQueryBuilder('photo')
  .innerJoinAndSelect('photo.metadata', 'metadata')
  .getMany()
```

> `QueryBuilder`允许创建和执行几乎任何复杂性的 SQL 查询。使用 时，可以像创建 SQL 查询一样思考。在此示例中，“照片”和“元数据”是应用于所选照片的别名。您可以使用别名来访问所选数据的列和属性。`QueryBuilder`

查询结果:

```js
photos:  [
  Photo {
    id: 1,
    name: 'Me and Bears',
    description: 'I am near polar bears',
    filename: 'photo-with-bears.jpg',
    views: 1,
    isPublished: true,
    metadata: PhotoMetadata {
      id: 1,
      height: 640,
      width: 480,
      orientation: 'portrait',
      compressed: true,
      comment: 'cybershoot'
    }
  }
]
```

### 使用级联自动保存关联表

> 设置级联选项,保存数据时关联另外的数据

#### 修改装饰器 `@OnetoOne`

```js
export class Photo {
  /// ... other columns

  // 自动保存级联的表
  @OneToOne(() => PhotoMetadata, metadata => metadata.photo, {
    cascade: true
  })
  metadata: PhotoMetadata
}
```

现在保存`Photo`表不需要单独保存关联表数据,关联表的数据将自动保存。`cascade`

```js
// 创建主表
const photo = new Photo()
photo.name = '测试1'
photo.description = '我是描述'
photo.filename = 'photo-with-bears.jpg'
photo.isPublished = true

// 创建元数据
const metadata = new PhotoMetadata()
metadata.height = 640
metadata.width = 480
metadata.compressed = true
metadata.comment = '这是附表'
metadata.orientation = '测试分类'

photo.metadata = metadata // 建立级联关系

// 获取控制器
const photoRepository = AppDataSource.getRepository(Photo)

// 保存主表同时保存附表
await photoRepository.save(photo)

console.log('保存主表同时保存附表')
```

双向建立级联关系后,不需要单独保存附表,
但是必须使用`@OneToOne`双向建立关系,否则不会自动保存

### 创建一对一,一对多的级联关系

#### 创建新的附表

```js
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Photo, photo => photo.author) // note: we will create author property in the Photo class below
  photos: Photo[]
}
```

创建的附表始终有主表存在,如果主表不存在,级联关系无效.

#### 添加附表到主表中

```js
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { PhotoMetadata } from './PhotoMetadata'
import { Author } from './Author'

@Entity()
export class Photo {
  /* ... other columns */

  @ManyToOne(() => Author, author => author.photos)
  author: Author
}
```

在一对多关系中,主表始终是多对一的,这意味着使用的类将存储相同的主表主键

`@ManyToOne`运行应用程序后，ORM 将创建表 `author`

```js
+-------------+--------------+----------------------------+
|                          author                         |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
+-------------+--------------+----------------------------+
```

它还将修改表，添加一个新列并为其创建一个外键：`photo` `author`

```js
+-------------+--------------+----------------------------+
|                         photo                           |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| description | varchar(255) |                            |
| filename    | varchar(255) |                            |
| isPublished | boolean      |                            |
| authorId    | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+
```

### 创建多对多关系表

#### 创建新表 `Album`

```js
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Photo, photo => photo.albums)
  @JoinTable()
  photos: Photo[]
}
```

`@JoinTable`需要指定这是关系的所有者端。

#### 添加映射表

`entity/Photo.ts`

```js
export class Photo {
  /// ... other columns

  @ManyToMany(() => Album, album => album.photos)
  albums: Album[]
}
```

运行应用程序后，ORM 将创建一个**album_photos_photo_albums**\*联结表\*：

```js
+-------------+--------------+----------------------------+
|                album_photos_photo_albums                |
+-------------+--------------+----------------------------+
| album_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
| photo_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
+-------------+--------------+----------------------------+
```

不要忘记在 ORM 中通过您的连接注册该类：`Album`

```js
const options: DataSourceOptions = {
  // ... other options
  entities: [Photo, PhotoMetadata, Author, Album]
}
```

将新表插入到数据库中:

```js
import { AppDataSource } from './index'

// create a few albums
const album1 = new Album()
album1.name = 'Bears'
await AppDataSource.manager.save(album1)

const album2 = new Album()
album2.name = 'Me'
await AppDataSource.manager.save(album2)

// create a few photos
const photo = new Photo()
photo.name = 'Me and Bears'
photo.description = 'I am near polar bears'
photo.filename = 'photo-with-bears.jpg'
photo.views = 1
photo.isPublished = true
photo.albums = [album1, album2]
await AppDataSource.manager.save(photo)

// now our photo is saved and albums are attached to it
// now lets load them:
const loadedPhoto = await AppDataSource.getRepository(Photo).findOne({
  where: {
    id: 1
  },
  relations: {
    albums: true
  }
})
```

`loadedPhoto`输出：

```js
{
    id: 1,
    name: "Me and Bears",
    description: "I am near polar bears",
    filename: "photo-with-bears.jpg",
    albums: [{
        id: 1,
        name: "Bears"
    }, {
        id: 2,
        name: "Me"
    }]
}
```

### 使用 QueryBuilder

> `QueryBuilder`构建几乎任何复杂性的 SQL 查询。

```js
const photos = await AppDataSource.getRepository(Photo)
  .createQueryBuilder('photo') // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
  .innerJoinAndSelect('photo.metadata', 'metadata')
  .leftJoinAndSelect('photo.albums', 'album')
  .where('photo.isPublished = true')
  .andWhere('(photo.name = :photoName OR photo.name = :bearName)')
  .orderBy('photo.id', 'DESC')
  .skip(5)
  .take(10)
  .setParameters({ photoName: 'My', bearName: 'Mishka' })
  .getMany()
```

> 此查询选择名称为“My”或“Mishka”的所有已发布照片。它将从位置 5（分页偏移）中选择结果，并且仅选择 10 个结果（分页限制）。选择结果将按 id 降序排序。照片的相册将保持联接状态，其元数据将在内部联接

---

## 使用查询方法

> `QueryBuilder`是 TypeORM 最强大的功能之一 - 它允许您使用优雅方便的语法构建 SQL 查询，执行它们并获得自动转换的实体。

简单示例：`QueryBuilder`

```js
const firstUser = await dataSource
  .getRepository(User)
  .createQueryBuilder('user')
  .where('user.id = :id', { id: 1 })
  .getOne()
```

SQL 查询:

```js
SELECT
    user.id as userId,
    user.firstName as userFirstName,
    user.lastName as userLastName
FROM users user
WHERE user.id = 1
```

并返回以下实例：`User`

```js
User {
    id: 1,
    firstName: "Timber",
    lastName: "Saw"
}
```
