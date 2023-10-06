# js的一些算法搜集

## 一、合并对象数组 
把拥有相同id的对象合并，剩余的参数值组成一个数组

```js
const data = [
  { id: 1, name: 'John' },
  { id: 1, name: 'Amy' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Adam' },
  { id: 3, name: 'Sam' }
];

const result = [];

data.forEach((item) => {
  // 查找结果数组中是否已经存在该 id 的对象
  const index = result.findIndex((r) => r.id === item.id);
  // 如果不存在，则添加该 id 对应的新对象
  if (index === -1) {
    result.push({ id: item.id, names: [item.name] });
  } 
  // 如果已经存在，则将该对象的 name 添加到 names 数组中
  else {
    result[index].names.push(item.name);
  }
});
console.log(result);

//输出结果
// [
//   { id: 1, names: [ 'John', 'Amy' ] },
//   { id: 2, names: [ 'Bob' ] },
//   { id: 3, names: [ 'Adam', 'Sam' ] }
// ]
```