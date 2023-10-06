# 迭代器与生成器

了解可迭代对象和迭代器，已有的可迭代对象有Array,Set,Map,Typed Array。

### 特征
- 可以使用`for/of`来进行循环迭代
- 可以使用`...`操作符展开或者‘扩展’
- 可以使用解构赋值
- 迭代Map时，返回的是`[key,value]`,`keys()`获取所有key，`values()`获取所有value
- 有些接受Array对象的内置函数或者构造函数可以接受可迭代对象
    ```
    new Set('abc')
    // ===
    new Set(['a','b','c'])
    ```
