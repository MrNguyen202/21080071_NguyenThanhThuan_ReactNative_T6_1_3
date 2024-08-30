var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mo ta cho ham myFillter: Loc cac phan tu cua mang theo dieu kien cua callback va tra ve mang moi
Array.prototype.myFillter = function (callback) {
    let newarr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newarr.push(this[i]);
        }
    }
    return newarr;
}

//Ham tim so chan
var fn = function (item) {
    return item % 2 === 0;
}

var sochan = a.myFillter(fn);
console.log(sochan);