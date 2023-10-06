# CSS——css外部样式文件的引入
将css外部样式文件引入html、引入另一个css文件的方法

## 1、引入html的方法

### 方法一：
```js
在<head>标签内部加入link标签 href地址根据你的文件位置写相对或绝对地址，一般写相对地址；

<link rel="stylesheet" href="../css/style.css">
```
### 方法二：
```js
一般在<head>标签中写style样式标签，然后再样式标签中加入如下代码：

    <style>

        @import url(../html/table.css);

    </style>
```
## 2、引入另一个css样式文件

### 方法一：
```js
再一个css样式文件中引入另一个css样式文件：只需要把下面的代码加入到要加入的css样式对应的位置即可；

@import url(../html/table.css);

记得要刷新网页哦！
```