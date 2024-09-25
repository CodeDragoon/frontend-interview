const asyncMemoize = function (func) {

    const memo: Record<string, any> = {};
    const goingSet: Record<string, { success: (result?: any) => void, failure: (err?: any) => void }[]> = {};


    return (...args) => {
        const key = JSON.stringify(args);
        return new Promise((resolve, reject) => {
            if (memo[key]) {
                resolve(memo[key]);

            } else {
                if (goingSet[key]) {
                    // key exists
                    goingSet[key].push({
                        success: (result) => {
                            resolve(result);
                        },
                        failure: (err) => {
                            reject(err)
                        }
                    });
                } else {
                    goingSet[key] = [{
                        success: (result) => {
                            resolve(result);
                        },
                        failure: (err) => {
                            reject(err)
                        }
                    }]
                    func(...args).then((result) => {
                        // iterate queue
                        const waitingCallbacks = goingSet[key]
                        waitingCallbacks.forEach((waitingCb) => {
                            waitingCb.success(result);
                            console.log('from cache')
                        })
                        delete goingSet[key];
                    }).catch((err) => {
                        const waitingCallbacks = goingSet[key];
                        waitingCallbacks.forEach((waitingCb) => {
                            waitingCb.failure(err);
                        })
                        delete goingSet[key]
                    })
                }
            }

        })
    }
}


const getData = (...args) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = args.reduce((a, c) => (a + c), 0)
            resolve(sum)
        }, 1000);

    })
}

const memoizedGetData = asyncMemoize(getData)

memoizedGetData(1, 2).then(console.log)
memoizedGetData(1, 2).then(console.log)
memoizedGetData(1, 2).then(console.log)
memoizedGetData(1, 2).then(console.log)
memoizedGetData(1, 2, 3).then(console.log)
memoizedGetData(1, 2, 3).then(console.log)
memoizedGetData(1, 2, 3).then(console.log)
memoizedGetData(1, 2, 3).then(console.log)
memoizedGetData(1, 2, 3, 4).then(console.log)
memoizedGetData(1, 2, 3, 4).then(console.log)
memoizedGetData(1, 2, 3, 4).then(console.log)
memoizedGetData(1, 2, 3, 4).then(console.log)


