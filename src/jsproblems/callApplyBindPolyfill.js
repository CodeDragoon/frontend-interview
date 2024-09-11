
Function.prototype.myCall = function (scope, ...args) {
    const _this = this;
    scope.temp = _this;
    if (typeof scope.temp === 'function') {
        const result = scope.temp(...args);
        delete scope.temp;
        return result
    }
    delete scope.temp;
}

Function.prototype.myApply = function (scope, args = []) {
    const _this = this;
    scope.temp = _this;
    if (scope.temp === 'function') {
        const results = scope.temp(...args);
        delete scope.temp;
        return results
    }
    delete scope.temp;
}

Function.prototype.myBind = function (scope, ...args) {
    const _this = this;
    const x = { ...scope }
    x.temp = _this;
    return function () {
        return x.temp(...args)
    }

}

Function.prototype.myBind2 = function (scope, ...args) {
    const _this = this;
    return function () {
        return _this.apply(scope, ...args)
    }
}


// function borrowing-> call appy bind