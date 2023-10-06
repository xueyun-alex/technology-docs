# css的一些代码收集

## CSS中文字太多自动显示省略号

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>省略号</title>
    <style>
        .box1{
            height: 40px;
            width: 100px;
            background-color:aqua;
            /* 第一步：规定只能在一行显示 */
            white-space: nowrap;
            /* 第二部：多出的部分隐藏 */
            overflow: hidden;
            /* 第三步：加上省略号 */
            text-overflow: ellipsis;
        }
        .box2{
            height: 40px;
            width: 100px;
            background-color:rgb(92, 138, 138);
            /* 第一步：弹性伸缩盒子模型展示 */
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            -webkit-line-clamp: 2;
            /* 设置或检索伸缩盒子对象的子元素的排列方式 */
            -webkit-box-orient: vertical;
            /* 第二部：多出的部分隐藏 */
            overflow: hidden;
            /* 第三步：加上省略号 */
            text-overflow: ellipsis;
        }


    </style>
</head>
<body>
    单行省略号
    <div class="box1">
        我啥也不想说，此处省略一万字
    </div>
    <br/>
    <hr>
    <br/>
    多行省略号(具体行数自定义)
    <div class="box2">
        我啥也不想说，此处省略一万字
    </div>
    
</body>
</html>
```