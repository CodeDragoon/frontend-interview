Array.prototype.mySort = function <T>(compareFn) {
    const arr = this;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (compareFn(arr[i], arr[j])) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

