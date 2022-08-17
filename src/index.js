let TITLECOUNT = 0;
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// var a = 0,
//     b = 0;

// function A(a) {
//     A = function (b) {
//         alert(a + b++);
//     };
//     alert(a++);
// }

// A(1);
// A(2);

console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// function a() {
//     this.b = 3;
// }
// const c = new a();
// a();
// a.prototype.b = 5;
// console.log(c.b);
// console.log(a.b);
// console.log(window.b);

console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 去除字符串当中的字母？
// “a12f3ba456h345d”
// const str = 'a12f3ba456h345d';
// const s = str.replace(/[a-zA-Z]/g, '');
// console.log(s);
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 以下代码得到什么？阐述原因？
// console.log([1, 2, 3].map(parseInt));
// 首先了解map的执行机制，map执行的参数是一个函数即[1,2,3].map(function(ele,index)(1).parselnt(函数功能，将数字变成整数，同时也可以传入参数parselnt(1,2),第一个参数代表需要
//     转换的数字，第二个参数代表基底，即按照几进制进行转换。那么回到这个问
//     题，相当于parselnt为
//     map函数的参数，ele,index为parselnt的参数决定最终的输出值。此表达式按照
//     顺序将转换成
//     [1,2,3].map(parselnt(1,0))[1,2,3].map(parselnt(2,1)),[1,2,3].map(parselnt
//     (3,2)),
//     数值的值不能大于基底的转换值。所以输出[1, NaN, NaN];
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// function a() {
//     y = function () {
//         X = 2;
//     };
//     return function () {
//         var x = 3;
//         y();
//         console.log(this.x);
//     }.apply(this, arguments);
// }
// a();
// 在函数a中return一个函数并且改变this指向，指向window,因为函
// 数a在window中执行；
// 同时将函数y和大X赋值，但是并末声明,当函数y执行时变成全局属性
// 我们在return中的声明变量小x,同时执行函数y，
// 我们最终打印结果为在window中找小x，但是window中没有x,所以返回undefined
// 如果我们打印大X将会返回2
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 涉及知识点
/*
	变量提升、函数提升
	this指向
	运算符优先级
	对象属性等
*/
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
// 函数表达式
var getName = function () {
    console.log(4);
};
// 函数声明
function getName() {
    console.log(5);
}

Foo.getName(); // 访问函数上的静态属性
getName(); /**
                变量提升：
                在ES5非严格模式下实际上是这么执行的
                var getName;
                function getName() {}
                getName = function () {
                    console.log(4)
                }
             */
Foo().getName(); /**
                Foo()函数的执行，会把在当前的Foo函数作用域找getName变量，
                如果没有就会往外层找，这个时候找到的是window.getName
                然后Foo函数的执行，return的是this(也就是window)，所以
                最终实际执行的是 window.getName()
*/
getName(); // 上面的例子自然推出这个的输出结果
new Foo.getName(); // 点（.）的优先级高于new操作，所以为 new (Foo.getName)();
new Foo().getName(); // 相当于( new Foo() ).getName(); 调用了Foo.prototype上的getName
new new Foo().getName(); // new ( ( new Foo() ) . getName ) ();

console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// console.log(i);
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);

// function fun(n, o) {
//     console.log(o);
//     return {
//         fun: function (m) {
//             return fun(m, n);
//         },
//     };
// }
// var a = fun(0);
// a.fun(1);
// a.fun(2);
// a.fun(3);
// console.log('========');
// var b = fun(0).fun(1).fun(2).fun(3);
// console.log('========');
// var c = fun(0).fun(1);
// c.fun(2);
// c.fun(3);
// 对于这道题来说，涉及到的知识点主要是闭包，以及链式调用
// 对于闭包，我们走一下流程，把函数执行一下。
// 对于第一次传 0
// n = 0 o = undefined
// console.log(o) // undefined
// 结果返回一个{fun: function (m){
// return fun(m, n)
// }}在这里也就是a
// 第二步 a.fun(1)
// 相当于fun(1, 0)
// n = 10  o = 0
// console.log(0) //0
// 后面以此类推
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
console.log('第八道');

// 6.查看如下 JavaScript 代码：
// var a = '10';
// var b = 10;
// if (a == b) alert('equal');
// if ((a = b)) alert('same');
// 此代码运行后，效果为（）。
// A.只弹出"equal"
// B.只弹出"same™
// C.先弹出"equal'，再弹出'same"
// D.没有弹出显示
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
console.log('第九道');
// var dad = {
//     type: 'big',
// };
// var son = {
//     type: 'small',
// };
// function show() {
//     return this;
// }
// var newShow = show.bind(dad);
// var newShow1 = newShow.bind(son);

// console.log(newShow() == dad);
// console.log(newShow1() == son);
// console.log('========');
// console.log(newShow());
// console.log(newShow1());
// console.log(newShow);
// console.log(newShow1);
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
console.log('第十道');
// (function (x) {
//     return (function (y) {
//         console.log(x);
//     })(2);
// })(1);
// 输出将为1，即使x的值从未在内部函数中设置。
// 【原因如下】：
// 闭包是一个函数，以及创建闭包时在范围内的所有变量或函数。在JavaScript中，闭包被实现为“内部函数〞;即在另一功能的主体内定义的功能。
// 闭包的一个重要特征是内部函数仍然可以访问外部函数的变量。
// 因此，在这个例子中，因为x没有在内部函数中定义，所以在外部函数的作用域中搜索一个定义的变量x，该变量的值为1。
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 在运行时候出现什么问题？为什么？
// let a = a;
// Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//     this.moveTo = function (x, y) {
//         this.x = x;
//         this.y = y;
//         console.log(this.x + ',' + this.y);
//     };
// }
// var p1 = new Point(0, 0);
// var p2 = { x: 0, y: 0 };
// p1.moveTo(1, 1);
// console.log(p1);
// p1.moveTo.apply(p2, [10, 10]);
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 下南的代码中 foo函数 被调用了多少次？
// function foo(num) {
//     console.log('foo：' + num);
//     data.count++;
// }
// var data = {
//     count: 0,
// };

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }
// console.log(data);
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// function makeNoSense(x) {
//     this.x = x;
// }
// makeNoSense(5);
// console.log(x);
// function test() {
//     this.x = 1;
// }
// alert(this.x);
// test();
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// function AClass() {
//     this.Property = 1;
//     this.Method = function () {
//         alert(1);
//     };
// }
// function AClass2() {
//     this.Property2 = 2;
//     this.Method2 = function () {
//         alert(2);
//     };
// }
// AClass2.prototype = new AClass();
// AClass2.prototype.Property = 3;
// AClass2.prototype.Method = function () {
//     alert(4);
// };
// var obj = new AClass2();
// console.log(obj.Property);
// obj.Method();
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// (function () {
//     try {
//         throw new Error();
//     } catch (error) {
//         var x = 1,
//             y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 下面的代码将输出到控制台的是什么，为什么？
// (function () {
//     var a = (b = 3);
// })();
// console.log('a defined ? ' + (typeof a !== 'undefined'));
// console.log('b defined ? ' + (typeof b !== 'undefined'));
/**
 * 由于a和b都在函数的封闭范围内定义，并旦由于它们所在的行以var关键字开头，
 * 因此大多数JavaScript开发人员会希望typeof a和typeof b在上面的示例中都是未定义。
 * 但是，情况并非如此。这里的问题是大多数开发人员错误地理解语句 var a = b = 3; 以下简写为：
 * var b = 3;
 * var a = b;
 * 但实际上，var a = b = 3; 其实是速记：
 * b = 3;
 * var a = b;
 * 因此（如果您不使用严格模式），代码片段的输出将为：
 * a defined? false
 * b defined? true
 * 但是如何在封闭函数的范围之外定义b？
 * 那么，因为声明var a = b = 3; 是语句 b = 3 的简写; 并且var a = b;
 * b最终成为一个全局变量（因为它不在var关键字后面），因此它仍然在作用域内，即使在封闭函数之外
 * 注意，在严格模式下（即，使用strict），语句var a = b = 3；会产生一个ReferenceError的运行时错误：
 * b 没有定义，从而避免了可能导致的任何头head-fakes/bugs。（这就是为什么你应该在你的代码中使用strict,一个重要的例子）
 *
 */

console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 下面的代码将输出到控制台的是什么？，为什么？
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

// 在外部函数中，this和self都引用myObiect， 因此都可以正确地引用和访问foo。
// 但在内部函数中，这不再指向myObject。因此，this.foo在内部函数
// 中是末定义的，而对局部变量self的引用仍然在范围内并且可以在那里访问。
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// (function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//     }, 1000);
//     setTimeout(function () {
//         console.log(3);
//     }, 0);
//     console.log(4);
// })();
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 编写一个简单的函数（少于160个字符），返回一个布尔值，指示字符串是否palindrome（回文）
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
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 写一个sum方法，当使用下面的语法调用时它将正常工作。
// function sum(x) {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function (y) {
//             return x + y;
//         };
//     }
// }
// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 上一道题的变种，实现sum(2,3,4...)多个值相加，还有sum(2)(3)(4)...等多个数值分别相加的值相等

// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2));
//             };
//         }
//     };
// }
// function sum(a, b, c) {
//     return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
// console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
// console.log(curriedSum(1, 2)(3)); //
// console.log(curriedSum(1)(2)(3)); // 6，全柯里化
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button' + i));
    btn.addEventListener('click', function () {
        console.log(i);
    });
    document.body.appendChild(btn);
}
// (a)当用户点击 “按钮4” 时，什么被记录到控制台？ 为什么？
// (b))提供一个或多个可按预期工作的替代实现。
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);

console.log(1 + '2' + '2'); // 122
console.log(1 + +'2' + '2'); // 32
console.log(1 + -'1' + '2'); // 02
console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + '2'); // NaN2
console.log('A' - 'B' + 2); // NaN
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
// 假设 d 是范围内的“空”对象：
var d = {};
// 使用下面的代码完成了什么？
['zebra', 'horse'].forEach(function (k) {
    d[k] = undefined;
});
console.log(d);
// 上面显示的代码片段在对象d上设置了两个属性。理想情况下，对具有未设置键的JavaScript对象执行的查找评估为末定义。
// 但是运行这段代码会将这些属性标记为对象的 “自己的属性”
// 这是确保对象具有一组给定属性的有用策略。
// 将该对象传递给Object.keys将返回一个包含这些设置键的数组（即使它们的值未定义)。
console.log(`<!-------------------------------- 第${++TITLECOUNT}道题 -------------------------------->`);
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
