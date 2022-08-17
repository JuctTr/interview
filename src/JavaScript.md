# 2020年校招时收集的题目

> ⚠️ 虽然都是校招题目，但还是有些自己做错了，温习一下

### 1、下面代码运行结构是什么，为什么？

```javascript
var a = 0,
    b = 0;

function A(a) {
    A = function (b) {
        alert(a + b++);
    };
    alert(a++);
}

A(1);
A(2);
```

```javascript
function a() {
    this.b = 3;
}
const c = new a();
a();
a.prototype.b = 5;
console.log(c.b);
console.log(a.b);
console.log(window.b);
```

### 2、去除字符串当中的字母？“a12f3ba456h345d”

```javascript
const str = 'a12f3ba456h345d';
const s = str.replace(/[a-zA-Z]/g, '');
console.log(s);
```

### 3、以下代码得到什么？阐述原因？

```javascript
[1, 2, 3].map(parseInt);
```

#### 答案：

首先了解 map 的执行机制，map 执行的参数是一个函数即`[1,2,3].map(function(element,index){});`

`parselnt()` 函数功能，将数字变成整数，同时也可以传入参数 parselnt(1,2)，第一个参数代表需要转换的数字，第二个参数代表基底，即按照几进制进行转换。那么回到这个问题，相当于 parselnt 为 map 函数的参数，element 和 index 为 parselnt 的参数决定最终的输出值。此表达式按照 顺序将转换成

`[1,2,3].map(parselnt(1,0))`

`[1,2,3].map(parselnt(2,1))`

`[1,2,3].map(parselnt(3,2))`

数值的大小不能大于基底的转换值。所以输出[1, NaN, NaN];

### 4、简单描述一下 渐进增强 和 优雅降级？

【渐进增强】：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好
的体验。

【优雅降级】：一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。渐进增强相当于向上兼容，优雅降级相当于向下兼容。

### 5、以下代码输出什么？

```javascript
function a() {
    y = function () {
        X = 2;
    };
    return function () {
        var x = 3;
        y();
        console.log(this.x);
    }.apply(this, arguments);
}
a();
// 答案见index.js
```

### 6、以下代码输出什么？

```javascript
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
// 答案见index.js
```

### 7、控制台输出什么？

再问：如果我们约定，用箭头表示其前后的两次输出之间有1秒的时间间隔，
而逗号表示其前后的两次输出之间的时间间隔可以忽略，代码实际运行的
结果该如何描述？

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
console.log(i);
```

### 8、请描述一下 cookies session Storage和localstorage区别？

相同点：都存储在客户端

不同点：

1.存储大小

- cookie数据大小不能超过4k。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

2.有效时间

localStorage

存储持久数据，浏览器关闭后数据不丟失除非主动删除数据

sessionStorage

数据在当前浏览器窗口关闭后自动删除。

cookie

设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

3. 数据与服务器之间的交互方式
cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

### 9、html5 第一行为什么只需要写<IDOCTYPE html>（大小写不敏感）？

- DTD ( Document Type Definition文档类型定义）
规定了标记语言的规则，这样浏览器才能正确地呈现内容。

- SGML
是一种很强大但很复杂的标记语言，HTML、XML就是从中衍生出来的。

- html
4.01 中的 DOCTYPE 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。而html5不基于SGML，因此不需要对 DTD 进行引用，但是需要DOCTYPE 来规范浏览器的行为。

### 10、iframe有那些缺点？

- irame会阻塞主页面的Onload事件；

- 搜索引擎的检索程序无法解读这种页面，不利于SEO；

- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

- 使用irame之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。

### 11、分别输出的是什么？

```javascript
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        },
    };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);
```

### 12、代码运行后，str2内容为？

```javascript
var str1 = "abc123def456"
var str2 = str1.replace(/\d+/g, "*")

A.abc***def
B.abc***def***
C.abc*def
D.abc*def*

```

### 13、此代码运行后，效果为?

```javascript
// 6.查看如下 JavaScript 代码：
var a = "10";
var b = 10;
if (a == b)
alert("equal");
if (a = b)
alert("same");
// 此代码运行后，效果为（）。
A.只弹出"equal"
B.只弹出"same™
C.先弹出"equal'，再弹出'same"
D.没有弹出显示
```

### 14、输出的是什么？

```javascript
var dad = {
    type: 'big',
};
var son = {
    type: 'small',
};
function show() {
    return this;
}
var newShow = show.bind(dad);
var newShow1 = newShow.bind(son);

console.log(newShow() == dad);
console.log(newShow1() == son);
```

### 15、以下输出什么？

```javascript
(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);
```

输出将为1，即使x的值从末在内部西数中设置。
原因如下：
闭包是一个函数，以及创建闭包时在范围内的所有变量或函数。在JavaScript中，闭包被实现为“内部函数〞;即在另一功能的主体内定义的功能。闭包的一个重要特征是内部函数仍然可以访问外部函数
的变量。因此，在这个例子中，因为x没有在内部函数中定义，所以在外部函数的作用域中搜索一个定义的变量x，该变量的值为1。

### 16、null和undefined的区别？

null是一个表示”无”的对象，转为数值时为0；undefined是一个表示” 无”的原始值，转为数值时为NaN。
当声明的变量还未被初始化时，变量的默认值为undefined。
nul用来表示尚末存在的对象，常用来表示函数企图返回一个不存在的对象。
undefined表示”缺少值”，就是此处应该有一个值，但是还没有定义。
典型用法是：
（1）变量被声明了，但没有赋值时，就等于undefined。
（2）调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。
null表示” 没有对象〞，即该处不应该有值。典型用法是：
（1）作为函数的参数，表示该函数的参数不是对象。
（2）作为对象原型链的终点。

### 17、let a = a; 在运行时候出现什么问题？为什么？

### 18、下面代码输出什么内容？

```javascript
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        console.log(this.x + ',' + this.y);
    };
}
var p1 = new Point(0, 0);
var p2 = { x: 0, y: 0 };
p1.moveTo(1, 1);
console.log(p1);
p1.moveTo.apply(p2, [10, 10]);
```

### 19、下南的代码中 foo函数 被调用了多少次？

```javascript
function foo(num) {
    console.log('foo：' + num);
    data.count++;
}
var data = {
    count: 0,
};

var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
```

### 20、下面代码输出什么内容？

```javascript
function makeNoSense(x) {
    this.x = x;
}
makeNoSense(5);
console.log(x);
function test() {
    this.x = 1;
}
alert(this.x);
test();
```

### 21、下面代码输出什么内容？

```javascript
function AClass() {
    this.Property = 1;
    this.Method = function () {
        alert(1);
    };
}
function AClass2() {
    this.Property2 = 2;
    this.Method2 = function () {
        alert(2);
    };
}
AClass2.prototype = new AClass();
AClass2.prototype.Property = 3;
AClass2.prototype.Method = function () {
    alert(4);
};
var obj = new AClass2();
console.log(obj.Property);
obj.Method();
```

### 22、考虑下面的代码，输出时什么，为什么？

```javascript
(function () {
    try {
        throw new Error();
    } catch (error) {
        var x = 1,
            y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```

### 23、下面的代码将输出到控制台的是什么，为什么？

```javascript
(function () {
    var a = b = 3;
})();
console.log('a defined ? ' + (typeof a !== 'undefined'));
console.log('b defined ? ' + (typeof b !== 'undefined'));
```

### 24、下面的代码将输出到控制台的是什么？，为什么？

```javascript
var myObject = {
    foo: 'bar',
    func: function () {
        var self = this;
        console.log('outer func: this.foo = ' + this.foo);
        console.log('outer func: self.foo = ' + self.foo);
        (function () {
            console.log('inner func: this.foo = ' + this.foo);
            console.log('inner func: self.foo = ' + self.foo);
        })();
    },
};
myObject.func();
```

### 25、下面的代码将输出到控制台的是什么？，为什么？

```javascript
(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000);
    setTimeout(function () {
        console.log(3);
    }, 0);
    console.log(4);
})();
```

### 26、编写一个简单的函数（少于160个字符），返回一个布尔值，指示字符串是否palindrome（回文）

```javascript
const isPalindrome = function (x) {
    const s = x.toString();
    let len = s.length;
    let i = 0;
    while (i < len / 2) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
        ++i;
    }
    return true;
};
console.log(isPalindrome('xxxaxxx'));
```

### 27、写一个sum方法，当使用下面的语法调用时它将正常工作。

```javascript
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

### 28、当用户点击 “按钮4” 时，什么被记录到控制台？ 为什么？提供一个或多个可按预期工作的替代实现。

```javascript
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button' + i));
    btn.addEventListener('click', function () {
        console.log(i);
    });
    document.body.appendChild(btn);
}
```

### 29、以下控制台输出什么？

```javascript
console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log(1 + -'1' + '2');
console.log(+'1' + '1' + '2');
console.log('A' - 'B' + '2');
console.log('A' - 'B' + 2);
```

### 30、以下控制台输出的顺序是什么？

```javascript
console.log('script start ');
setTimeout(() => {
    console.log('setTimeout 1');
});

new Promise(resolve => {
    console.log('Promise 1');
    setTimeout(() => {
        resolve();
    });
})
    .then(() => {
        console.log('Promise then 1');
    })
    .then(() => {
        console.log('Promise then 2');
    });
console.log('script end');
```

