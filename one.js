// console.log

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log('registration was success', registration);
    }).catch((err) => {
        console.log('registreation was a failure')
    })
}

console.log(' one script was executed')