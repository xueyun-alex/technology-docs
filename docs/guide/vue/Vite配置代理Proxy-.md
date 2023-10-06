# Vite 配置代理 Proxy，解决跨域

我们在编写前端项目的时候，经常会遇到跨域的问题，当我们访问后端 API 的 URL 路径时，只要域名、端口或访问协议（如 HTTP 和 HTTPS）有一项不同，就会被浏览器认定为跨域。

不管是 Vite 还是 Webpack，这些打包工具都支持设置前端代理，它们能够把对某一段 URL 的访问直接转换成另一个真实的后端 API 地址，这样前后端就视为使用了相同的域名、协议和端口，就避免了跨域的问题，还能避免繁琐的反复编写域名。

我们这里以 Vite 的配置为例，来看一下如何给 API 请求设置代理。在 Vite 编写的项目里边，有一个 vite.config.js配置文件，里边是关于 Vite 的配置项，可以在里边配置代理。假如我们前端项目路径为 需要代理所有以 /api 开头的 API 请求，把它转发到 ，并且后端的 API 路径中不带 /api前缀，需要自动去掉 /api前缀

```js
// vite.config.js
 
import { defineConfig } from "vite";
 
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```