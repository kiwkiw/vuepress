# es6学习笔记

1、let 不会声明提前
```
    
    console.log('a1:', a)     //a 被声明提前
    var a = 9;    //  undefined
  
   console.log('a1:', a)     //a 不会被声明提前
    let a = 9;    // 报错  Uncaught SyntaxError: Identifier 'a' has already been declared

```

2 、 let 不可以重复声明
```
     var a = 11;
    console.log('a1:', a)  // 11
    var a = 12;   
    console.log('a2:', a)  // 12

     let a = 11;
    console.log('a1:', a)  
    let a = 12;    // 报错 SyntaxError: Identifier 'a' has already been declared
    console.log('a2:', a)  
```


3、let 创建局部变量（块级） 

```
  for (var i = 0; i < 5; i++) {
        console.log('i:', i)
    }
    console.log('i:', i)      // 5

  for (let j = 0; j < 5; j++) {
        console.log('j:', j)
    }
    console.log('j:', j)    // j is not defined

```
```
    function show(args) {
        { // 添加一对大括号  创建块级作用域 
            let args = '9999'      
            console.log('args:', args)
        }
    }
    show(8888)
```


4  includes & startWith & endWith
```
    let str = 'www.jianshu.com';
    let n1 = str.includes('yy');  // str 中是否包含 "yy"  直接返回 true/false  
    let n2 = str.startsWith('jianshu', 4)  //str 第四个位置开始  是否是以"jianshu"开头
    let n3 = str.startsWith('http')  // str  是否是以"http"开头
   let n4 = str.endsWith('jianshu', 11)   
    console.log('n1:', n1)   // false
    console.log('n2:', n2)  // true
    console.log('n3:', n3) // false
    console.log('n4:', n4) // true
```

5 模版字符串 变量和函数的使用
1⃣️变量和无参数函数的使用
```
 let userName = "xiaoming";
 let userAge = 12;
 function showUser() {
        return '1234'
   }
  let str = `userName=${userName},userAge=${userAge},user=${showUser()}`;
  console.log('str', str)
```

2⃣️ 有参数函数使用
函数里第一参数 a 代表${}外的字符
b代表第一个 ${}  以此类推
```
   function showUser(a, b, c, d) {
        return a[0] + b + a[1] + c + a[2] + d;
    }
    let userName = "xiaoming";
    let userAge = 12;
    let logo = '1.jpg';
    let str = showUser `name=${userName},age=${userAge},logo=${logo}`;
    console.log('str', str)
```
6 函数默认值 & 多参数
```
   function fun1(x, y = 2) {   //默认参数
        return x + y;
    }
    console.log('fun1:', fun1(1))
      
```

```
    function fun2(...n) { //多参数 
        console.log('n:', n);
        console.log('length:', n.length);
        for (var i = 0; i < n.length; i++) {
            console.log(`i${i}:`, n[i])
        }
    }
    fun2(1, 2, 3)
```

7箭头函数
```
    let fun1 = (x, y) => {
        return x + y;
    }
    let fun2 = x => { //单参数 可以省略小括号
        return x;
    }
    let fun3 = x => x; // 单参数 单行函数体   小括号&大括号&return 可省略
```

8 函数尾调用 （Tail Call）
函数尾调用就是指函数的最后一步是调用另一个函数
```
    let fun1 = (x, y) => x + y;
    let fun2 = () => { //属于尾调用
        return fun1(2, 3)
    }

    let fun3 = () => { // 不属于尾调用
        let n = fun1(2, 3);
        return n
    }

    let fun4 = () => { // 不属于尾调用
        return fun1(2, 3) + 1;
    }
```

```
  let factorial = (n) => {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1)  //不属于函数尾调用
        }
    }
    console.log('factorial:', factorial(4))

    let factorial2 = (n, p = 1) => {
        if (n <= 1) {
            return 1 * p;
        } else {
            let result = n * p
            return factorial2(n - 1, result) //属于函数尾调用  每次递归都不会增加调用栈的长度，只是更新当前的堆栈帧而已。也就避免了内存的浪费和爆栈的危险。
        }
    }
```

9 ... 扩展运算符 简化参数写法
```
  let add = (...n) => {
        let count = 0
        n.forEach((val, i) => {
            count += val
        })
        return count
    }
    let num = [1, 2, 3]
    console.log('total', add(...num))
```

10 filter
```
    let num = [1, 2, 3, 3];
    let num1 = num.filter((x) => {
        return x != 3
    })
    console.log('num1', num1)
```


11 set  （利用set不能重复的属性  实现 去重 & 交集 & 差集）
```
    let set2 = new Set([4, 6, 8, 2, 1]);
    let set3 = new Set([3, 6, 8, 7, 1]);
    set2.add(0);
    set2.delete(8);
    console.log('set2:', set2);
```

```
    let arr = [3, 5, 7, 5, 2, 1];
    let set1 = new Set(arr); //去重
    console.log('set1:', set1);
```

```
    let set2 = new Set([4, 6, 8, 2, 1]);
    let set3 = new Set([3, 6, 8, 7, 1]);
    let set4 = new Set([...set2, ...set3]); //合并两个set 去重 set不允许重复
    let set5 = new Set([...set2].filter((val) => {
        return set3.has(val)
    })); //交集 
    let set6 = new Set([...set2].filter((val) => {
        return !set3.has(val)
    })); //差集 
    console.log('set4:', set4);
    console.log('set5:', set5);
    console.log('set6:', set6);

```

12 map    map里面key除了string  还可以是其他类型的
```
    let num = 123;
    let arr = [1, 2, 3, 4];
    let fun = function() {};
    let obj = {};
    const map1 = new Map();
    map1.set(num, 'q1');
    map1.set(arr, 'q2');
    map1.set(fun, 'q3');
    map1.set(obj, 'q4');
    console.log('map:', map1)
    console.log('map:', map1.keys())
    for (const key of map1.keys()) {
        console.log('key', key);
    }
```

```
  const map2 = new Map([
        ['s1', 'as1'],
        ['s2', 'as2'],
        ['s3', 'as3'],
        ['s4', 'as4'],
    ])
    map2.set('s5', 'as5');
    map2.delete('s3');
    console.log(map2.has('s3'))
    console.log(map2)
    console.log(map2.values())
    console.log([...map2.values()])
    console.log(map2.keys())
    console.log([...map2.keys()])

    console.log(map2.entries())
    console.log([...map2.entries()])
```

13 export & import

```
//index.html
import js1 from './js/1.js'; console.log('username',js1.userName); js1.fun1(5),console.log('fun2',js1.fun2())

```

```
//1.js
let m = 2;
import js2 from './2.js'

function fun2() {
    return 666;
}
export default {
    userName: 'kiw',
    fun1: (x) => {
        console.log(`fun1= ${x}`);
    },
    fun2: () => {
        return js2.m
    }
}
```

```
// 2.js
let m = 100;
export default {
    'm': m,
}
```