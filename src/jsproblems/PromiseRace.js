const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(' first promise')
    }, 100)
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second promise')
    }, 200)
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('third promise')
    }, 300)
})

function race(promises = []) {
    let flag = false;

    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((res) => {
                if (!flag) {
                    flag = true;
                    resolve(res)
                }
            }).catch((err) => {
                flag = err;
                reject(err)

            })
        })
    })
}

race([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log('error', err)
})
