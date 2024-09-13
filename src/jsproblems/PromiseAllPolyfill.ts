const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log(1);
        resolve(1);
    }, 100)
});
const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log(2);
        resolve(2)
    }, 150)
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(3);
        resolve(3)
    }, 200)
});



const myAll = function (args: Promise<unknown>[]): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const res: unknown[] = [];

        args.forEach(element => {
            element.then((r) => {
                res.push(r)
                if (res.length === args.length) {
                    resolve(res)
                }

            }).catch((err) => {
                reject(err)
            })
        });
    })
}

myAll([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})