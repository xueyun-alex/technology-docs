# 那些年vue踩过的那些坑

## 第一坑
关于vue3无法解析router-view Failed to resolve component: router-view

```js
const app = createApp(App);
app.use(router);
//app.use(router)这个必须在mount('#app')前面，不然会导致可能无法渲染
app.mount('#app');
```