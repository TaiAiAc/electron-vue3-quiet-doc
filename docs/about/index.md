---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---


# 远程仓库
 
可以使用git remote查看当前的远程库。
git remote -v可以显示对应的克隆地址。（对于多个远程仓库很有用）

添加远程仓库
git remote add [short_name] [url]可以添加新的远程仓库。

从远程仓库抓取数据
git fetch [remote-name]可以从远程仓库抓取数据到本地。
也可以使用git pull

推送数据到远程仓库
git push [remote_name] [branch_name]
默认使用origin和master。

查看远程仓库信息
git remote show origin

远程仓库的删除和重命名
git remote rename [old_name] [new_name]
git remote rm [remote_name]