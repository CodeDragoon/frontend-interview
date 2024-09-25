

const normalMemoize = (() => {
    const map = {};
    return (func, ...args) => {
        const key = JSON.stringify(args);
        if (!map[key]) {
            const result = func(...args);
            map[key] = result;
            console.log('---->not from key')
        } else {
            console.log('--->from key')
        }
        return map[key];
    }
})()

const add = (a, b) => { return a + b }


normalMemoize(add, 1, 2)
normalMemoize(add, 1, 2)
normalMemoize(add, 3,4)
normalMemoize(add, 3,4)
normalMemoize(add, 1, 2)
normalMemoize(add, 1, 2)
normalMemoize(add, 3,4)





