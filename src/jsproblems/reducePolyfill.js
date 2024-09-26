// reduce polyfill


Array.prototype.myReduce = function (calc, initial) {
    let res = initial;
    const arr = this;

    arr.forEach((item) => {
        res = res + calc(res, item);
    })
    return res;

}

const x = [1, 2, 3, 4,5].reduce((a, b) => a + b, 0)

console.log(x)