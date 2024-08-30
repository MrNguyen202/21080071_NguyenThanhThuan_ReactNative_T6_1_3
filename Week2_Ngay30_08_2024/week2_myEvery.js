var arr = [1, 2, 3, 4, 5];

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

// ham kiem tra so lon hon 6
var fn1 = function (item) {
    return item > 6;
}

var fn2 = function (item) {
    return item > 0;
}

var kq1 = arr.myEvery(fn1); // false
console.log("Ket qua 1: " + kq1);

var kq2 = arr.myEvery(fn2); // true
console.log("Ket qua 2: " + kq2);