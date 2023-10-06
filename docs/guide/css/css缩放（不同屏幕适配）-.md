# css缩放（不同屏幕适配） transform属性的scale（）方法

在CSS3中，我们可以使用transform属性的scale()方法来实现元素的缩放效果。缩放，指的是“缩小”和“放大”的意思。

**语法：**

transform： scaleX（x）； / 沿x轴方向缩放/
transform: scaleY(y); / 沿y轴方向缩放/
transform： scale（）； / 同时沿x轴和y轴缩放/


**说明：**

跟translate()方法类似，缩放也有3种情况：scaleX()、scaleY()、scale()。参数x表示元素在x轴方向的缩放倍数，参数y表示元素在y轴方向的缩放倍数。

当x或y取值为0~1之间时，元素进行缩小；当x或y取值大于1时，元素进行放大。大家思考一下“倍数”的概念，很快就懂了。

## scaleX(x)

```js
 
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        /*设置原始元素样式*/
        #origin
        {
            width:200px;
            height:100px;
            border:1px dashed gray;
        }
        /*设置当前元素样式*/
        #current
        {
            width:200px;
            height:100px;
            color:white;
            background-color: rgb(30, 170, 250);
            opacity: 0.6;
            transform:scaleX(1.5);
        }
    </style>
</head>
<body>
    <div id="origin">
        <div id="current"></div>
    </div>
</body>
</html>
```

## scaleY(y)
```js
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        /*设置原始元素样式*/
        #origin
        {
            width:200px;
            height:100px;
            border:1px dashed gray;
        }
        /*设置当前元素样式*/
        #current
        {
            width:200px;
            height:100px;
            color:white;
            background-color: rgb(30, 170, 250);
            opacity: 0.6;
            transform:scale(1.2, 1.5);
        }
    </style>
</head>
<body>
    <div id="origin">
        <div id="current"></div>
    </div>
</body>
</html>
```

## scale(x, y)
```js
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        /*设置原始元素样式*/
        #origin
        {
            width:200px;
            height:100px;
            border:1px dashed gray;
        }
        /*设置当前元素样式*/
        #current
        {
            width:200px;
            height:100px;
            color:white;
            background-color: rgb(30, 170, 250);
            opacity: 0.6;
            transform:scale(1.2, 1.5);
        }
    </style>
</head>
<body>
    <div id="origin">
        <div id="current"></div>
    </div>
</body>
</html>
```