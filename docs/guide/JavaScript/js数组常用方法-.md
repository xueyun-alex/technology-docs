# js数组常用方法

## 1.join() （数组转字符串）
数组转字符串，方法只接收一个参数：即默认为逗号分隔符（）。
```js
<script>
	var arr=[1,2,3,4];
	console.log(arr.join()); //1,2,3,4
	console.log(arr.join(":")); //1:2:3:4
	console.log(arr); //[1,2,3,4],原数组不变
</script>
```
## 2.push()和pop()（数组尾操作）
push()：方法可向数组的末尾添加一个或多个元素，并返回新的长度。

pop()：方法用于删除并返回数组的最后一个元素。
```js
<script>
	var arr=[1,2,3,4];
	//push
	var push_arr=arr.push("Tom","Sun");
	console.log(arr); //[1,2,3,4,"Tom","Sun"];
	console.log(push_arr); // 6
	//pop
	var pop_arr=arr.pop();
	console.log(arr); //[1,2,3,4,"Tom"];
	console.log(pop_arr); // Sun	
</script>
```
## 3.shift() 和 unshift()（数组首操作）
shift()：方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

unshift()：方法可向数组的开头添加一个或更多元素，并返回新的长度。
```js
<script>
	var arr=[1,2,3,4];
	//shift
	var shift_arr=arr.shift();
	console.log(arr); // [2, 3, 4]
	console.log(shift_arr); // 1
	//unshift
	var unshift_arr=arr.unshift("Tom");
	console.log(arr); // ["Tom", 2, 3, 4]
	console.log(unshift_arr); // 4
</script>
```
## 4.sort()（排序）
```js
<script>
	var arr=[1,100,5,20];
	console.log(arr.sort()); // [1, 100, 20, 5]
	console.log(arr); // [1, 100, 20, 5] (原数组改变)	
</script>
```
请注意，上面的代码没有按照数值的大小对数字进行排序，是按照字符编码的顺序进行排序，要实现这一点，就必须使用一个排序函数：        
**升序：**
```js
<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return a - b};
	console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]
	console.log(arr); //[1, 5, 20, 100] (原数组改变)
</script>
```
**降序：**
```js
<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return b - a};
	console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]
	console.log(arr); // [100, 20, 5, 1] (原数组改变)
</script>
```
## 5.reverse() （反转数组）
方法用于颠倒数组中元素的顺序。
```js
<script>
	var arr=[12,25,5,20];
	console.log(arr.reverse()); // [20, 5, 25, 12]
	console.log(arr); // [20, 5, 25, 12] (原数组改变)
</script>
```
## 6.concat() （连接两个或多个数组）
concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
```js
<script>
	var arr=[1,2,3,4];
	var arr2=[11,12,13] 
	var arrCopy = arr.concat(arr2);
	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)
	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>
```
如果传入的参数是一个二维数组呢？

```js
<script>
	var arr=[1,2,3,4];
	var arr2=[11,[12,13]] 
	var arrCopy = arr.concat(arr2);	
	console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>
```
从上面代码中可以看出concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy中。

## 7.slice()（数组截取）   
**arr.slice(start , end);**     

**start:**
可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。       

**end:**
可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。      

**返回值:**
返回一个新的数组，包含从 start 到 end （不包括该元素）的 arr 中的元素。

## 8.splice() （数组更新）
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。（该方法会改变原始数组）

arr.splice(index , howmany , item1,.....,itemX)

index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。

howmany：必需。要删除的项目数量。如果设置为 0，则不会删除项目。

item1, ..., itemX：可选。向数组添加的新项目。

返回值：含有被删除的元素的数组，若没有删除元素则返回一个空数组。

```js
<script>
	var arr = ["张三","李四","王五","小明","小红"];
	/**************删除"王五"****************/
	var arrReplace1 = arr.splice(2,1);	
	console.log(arrReplace1);  // ["王五"] 
	console.log(arr);  // ["张三", "李四", "小明", "小红"] (原数组改变)
	//删除多个
	var arrReplace2 = arr.splice(1,2);	
	console.log(arrReplace2);  //  ["李四", "小明"] 
	console.log(arr);  // ["张三", "小红"]
	/**************添加"小刚"****************/
	var arrReplace3 = arr.splice(1,0,"小刚");
	console.log(arrReplace3);  // [] (没有删除元素，所以返回的是空数组)
	console.log(arr);  // ["张三", "小刚", "小红"]
	//添加多个
	var arrReplace4 = arr.splice(3,0,"刘一","陈二","赵六");
	console.log(arrReplace4);  // []
	console.log(arr);  // ["张三", "小刚", "小红", "刘一", "陈二", "赵六"]
	/**************"王五"替换"小刚"****************/
	var arrReplace5 = arr.splice(1,1,"王五");
	console.log(arrReplace5);  // ["小刚"]
	console.log(arr);  // ["张三", "王五", "小红", "刘一", "陈二", "赵六"]
	//替换多个
	var arrReplace6 = arr.splice(1,4,"李四");
	console.log(arrReplace6);  // ["王五", "小红", "刘一", "陈二"]
	console.log(arr);  // ["张三", "李四", "赵六"]
</script>
```



## 2个索引方法(ES5)

**indexOf()和 lastIndexOf()**

两个方法都返回要查找的项在数组中首次出现的位置，在没找到的情况下返回-1

indexOf()--------array.indexOf(item,start) （从数组的开头（位置 0）开始向后查找）

item： 必须。查找的元素。

start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从array[0]开始检索。

lastIndexOf()--------array.lastIndexOf(item,start) （从数组的末尾开始向前查找）

item： 必须。查找的元素。

start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从 array[array.length-1]开始检索。

```js
<script>
	var arr = [1,4,7,10,7,18,7,26];
	console.log(arr.indexOf(7));        // 2
	console.log(arr.lastIndexOf(7));    // 6
	console.log(arr.indexOf(7,4));      // 4
	console.log(arr.lastIndexOf(7,2));  // 2
	console.log(arr.indexOf(5));        // -1		
</script>
```
## 5个迭代方法(ES5)
**forEach()、map()、filter()、some()、every()**

这几个方法语法都一样，都不会改变原数组。

**forEach()：**
对数组进行遍历循环，这个方法没有返回值。jquery()也提供了相应的方法each()方法。

语法：array.forEach(function(currentValue , index , arr){//do something}, thisValue)

currentValue : 必需。当前元素

index： 可选。当前元素的索引值。

arr :  可选。当前元素所属的数组对象。

thisValue： 可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值

```js
<script>
	var Arr = [1,4,7,10];
	Arr.forEach(function(currentValue, index, arr){
		console.log(index+"--"+currentValue+"--"+(arr === Arr));		
	})
	// 输出：
	// 0--1--true
	// 1--4--true
	// 2--7--true
	// 3--10--true	
</script>
```
**map()：**
指“映射”，方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

语法：array.map(function(currentValue , index , arr){//do something}, thisValue)  

map方法实现数组中每个数求平方：
```js
<script>
    var arr = [1,4,8,10];
    var arr2 = arr.map(function(currentValue){
        return currentValue*currentValue;
    });
    console.log(arr2);  // [1, 16, 64, 100]
</script>
```
**filter()：**
 “过滤”功能，方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。和filter() 方法类似，jquery中有个 grep()方法也用于数组元素过滤筛选。

语法： array.filter(function(currentValue , index , arr){//do something}, thisValue) 

filter方法实现筛选排除掉所有小于5的元素：
```js
<script>
    var arr = [1,4,6,8,10];
    var result1 = arr.filter(function(currentValue){
        return currentValue>5;
    });
    console.log(result1);  // [6, 8, 10]
    var result2 = arr.filter(function(currentValue){
        return currentValue>"5";
    });
    console.log(result2);  // [6, 8, 10]
</script>
```
当我们分别设置item > 5和item > "5"时, 返回的结果是一样的，由此我们可以看出函数支持弱等于（==），不是必须全（===）。

**every()：**
判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。

语法： array.every(function(currentValue , index , arr){//do something}, thisValue) 
```js
<script>
	var arr = [1,4,6,8,10];
	var result1 = arr.every(function(currentValue){
	    return currentValue< 12;
	});
	console.log(result1);  // true
	var result2 = arr.every(function(currentValue){
	    return currentValue> 1;
	});
	console.log(result2);  // false
</script>
```
**some()：**
判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。

语法： array.some(function(currentValue , index , arr){//do something}, thisValue)
```js
<script>
	var arr = [1,4,6,8,10];
	var result1 = arr.some(function(currentValue){
	    return currentValue> 10;
	});
	console.log(result1);  // false
	var result2 = arr.some(function(currentValue){
	    return currentValue> 5;
	});
	console.log(result2);  // true
</script>
```
## 2个归并方法(ES5)
**reduce()、reduceRight()**     
这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。他们都接收两个参数，第一个参数是每一项调用的函数，函数接受四个参数分别是初始值，当前值，索引值，和当前数组，函数需要返回一个值，这个值会在下一次迭代中作为初始值。第二个参数是迭代初始值，参数可选，如果缺省，初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算。

reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。

reduce()语法：arr.reduce(function(total , cur , index , arr){//do something}, initialValue)

reduceRight()语法：arr.reduceRight(function(total , cur , index , arr){//do something}, initialValue)

total ：必需。初始值, 或者计算结束后的返回值。

cur ：必需。当前元素。

index ：可选。当前元素的索引。

arr：可选。当前元素所属的数组对象。

initialValue：可选。传递给函数的初始值。

下面代码实现数组求和：
```js
<script>
	var arr = [1,2,3,4,5];
	var result1 = arr.reduce(function(total,cur,index,arr){	
		console.log("total:"+total+",cur:"+cur+",index:"+index);
	    return total+cur;
	});
	console.log("结果："+result1);
	// 输出
	// total:1,cur:2,index:1
	// total:3,cur:3,index:2
	// total:6,cur:4,index:3
	// total:10,cur:5,index:4
	// 结果：15
	var result2 = arr.reduce(function(total,cur,index,arr){	
		console.log("total:"+total+",cur:"+cur+",index:"+index);
	    return total+cur;
	},10);
	console.log("结果："+result2);
	// 输出
	// total:10,cur:1,index:0
	// total:11,cur:2,index:1
	// total:13,cur:3,index:2
	// total:16,cur:4,index:3
	// total:20,cur:5,index:4
	// 结果：25
</script>
```
从上面代码我们可以看出，当我们不给函数传递迭代初始值时初始值 total 为数组第一项，函数从数组第二项开始迭代；若我们给函数传递迭代初始值，则函数从数组第一项开始迭代。
