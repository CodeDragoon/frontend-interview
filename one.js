window.log = console.log;
const throttle = (function () {
    var busy = false;
    return function (cb, offset) {
        if (busy) {
            return;
        } else {
            cb();
            setTimeout(() => {
                busy = false
            }, offset)
        }
    }
})();

console.log(typeof throttle)


const handleClick = throttle(() => {
    console.log('button clicked')
}, 2000)


document.getElementById('click-btn').addEventListener('click', () => {
    console.log('clciked')
    handleClick()
})