# 前端WebSocket详解

## WebSocket简介

websocket是H5才开始提供的一种在单个TCP连接上进行全双工通讯的协议。主要作用就是建立服务器和客户端的长连接能更好的节省服务器资源和带宽，服务器向浏览器推流实现实时通信。

和http一样，WebSocket也是应用层协议。浏览器和服务器只要完成一次握手的动作，然后浏览器和服务器之间就会脱离http协议，而是用WebSocket自己的ws协议。客户端和服务器端就可以通过tcp连接直接交换数据。

## 创建一个WebSocket对象

```js
var Socket = new WebSocket(url,[protocol])
```
以上代码中的第一个参数 url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议.

## WebSocket都有哪些属性

Socket.readyState：这是个只读属性，y用来表示连接状态

0：未连接 1：连接已建立 2.连接z正在关闭 3.连接已关闭或打不开连接

Socket.bufferedAmount：z也是只读属性。主要是计算还没有被send()发出的UTF-8文本字节数。

## WebSocket方法

Socket.send()：向服务器发送数据

Socket.close()：关闭连接

## WebSocket事件

Socket.onopen:连接建立时触发

Socke.onmessage：客户端接受服务端数据时触发

Socket.onerror:通信错误时触发

Socket.onclose：连接关闭时触发

## WebSocket实例

WebSocket 协议本质上是一个基于 TCP 的协议。 为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket。连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。
