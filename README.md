# 需求

同时支持hook和自定义指令 去监听dom宽高的变化
`index.d.ts` 就是声明文件

# 安装

```cmd
npm i v-resize-hale
pnpm i v-resize-hale
```

# 使用

## Hook

```vue
<template>
    <div id="resize">
        我是testBox
    </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import useResize from "v-resize-hale";
onMounted(() => {
    vResizeRf(document.getElementById("resize") as HTMLElement, (e: any) => {
        console.log(e)
    })
})
</script>
<style lang="scss" scoped>
#resize {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    resize: both;
    overflow: hidden
}
</style>

```

## 指令

```ts
import useResize from "v-resize-hale";
const app = createApp(App);
app.use(useResize)
```
