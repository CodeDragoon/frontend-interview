// pf array.map

arr = [1, 2, 3].map((item) => {
    return 2 * item;
})


Array.prototype.map1 = function (cb) {
    const _this = this;
    const temp = [];

    for (var i = 0; i < _this.length; i++) {
        temp.push(cb(_this[i]));
    }
    return temp;
}


const x = [1, 2, 3].map1((item) => {
    return 2 * item;
})

console.log({ x });