---
title: 项目介绍
prev: '上一页'
next: 下一页
---

# {{ $frontmatter.title }}

![An image](../img/heng.gif) ![An image](../img/pao.gif)

## 这是项目介绍

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
