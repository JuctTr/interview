var sourceArr = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];

// 一、使用ES6的方法，参数为深度，默认为2，也就是默认对二维数组打平
console.log(sourceArr.flat(3));
console.log(sourceArr.flat(Infinity)); // 更简单的方法

// 二、使用 reduce方法
function flatten(arr) {
    return arr.reduce((prev, next) => {
        let result = [];
        // 如果是数组，递归处理
        if (Array.isArray(next)) {
            result = flatten(next);
        } else {
            result = next;
        }
        return prev.concat(result);
    }, []);
}

console.log(flatten(sourceArr));

// 三、for 循环方法，也是递归

function flatten1(arr) {
    var res = [];
    for (let i = 0, length = arr.length; i < length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i])); // concat 并不会改变原数组
            //res.push(...flatten(arr[i])); // 扩展运算符
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatten1(sourceArr));

// 四、while 循环方法，也是递归
function flatten2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
        //arr = Array.prototype.concat.apply([],arr);
    }
    return arr;
}
console.log(flatten2(sourceArr));

// 五、无限反嵌套多层嵌套数组
function flatten3(input) {
    const stack = [...input]; //保证不会破坏原数组
    const result = [];
    while (stack.length) {
        const first = stack.shift();
        if (Array.isArray(first)) {
            stack.unshift(...first);
        } else {
            result.push(first);
        }
    }
    return result;
}
console.log(flatten3(sourceArr));

// 六、数组的项全为数字，可以使用join()，toString()
function flatten4(input) {
    return input
        .toString()
        .split(',')
        .map(item => +item);
    // return input.join().split(',').map(item => +item);
    // return input.join(',').split(',').map(item => +item);
}
console.log(flatten4(sourceArr));

// 七、Generator 的实现

function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let ele of tree) {
            yield* iterTree(ele);
        }
    } else {
        yield tree;
    }
}
console.log([...iterTree(sourceArr)]);
