// serial promise resolver

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first promise')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second promise')
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('third promise')
    }, 1000)
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fourth promise')
    }, 1000)
})


function serialPromiseResolver<T>(promises: Promise<T>[]) {
    let executedPromisesIndex = 0;
    const totalPromises = promises.length;
    const results: T[] = [];

    return new Promise((resolve, reject) => {
        function runner() {
            if (executedPromisesIndex < totalPromises) {
                promises[executedPromisesIndex].then((res) => {
                    console.log({ executedPromisesIndex })
                    results[executedPromisesIndex] = res;
                    executedPromisesIndex++;
                    runner()
                }).catch((err) => {
                    reject(err)
                })
            } else {
                resolve(results)
            }
        }
        runner()
    })
}

serialPromiseResolver([p1, p3, p4, p2]).then((res) => {
    console.log('final results', res)
}).catch((err) => {
    console.log('Error', err)
})