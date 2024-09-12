// output questions

const arr = [0, 1, 2, 3, "0", undefined, !!!!!!"false", {}];

const res = arr.filter(Boolean)

console.log(res)


// ------

Promise.resolve().then(() => console.log(1));

setTimeout(() => { queueMicrotask(() => console.log(2)) }, 0)

queueMicrotask(() => console.log(3))

setTimeout(() => { console.log(4) }, 0);

(async () => console.log(5))();

queueMicrotask(() => console.log(6))

console.log(7);

new Promise(() => console.log(8))