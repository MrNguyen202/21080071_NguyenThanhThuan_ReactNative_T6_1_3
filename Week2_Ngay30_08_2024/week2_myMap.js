var arr = [1, 2, 3, 4, 5];

// Mo ta cho ham myMap: Tao ra mang moi tu mang cu theo dieu kien cua callback
Array.prototype.myMap = function (callback) {
    let newarr = [];
    for (let i = 0; i < this.length; i++) {
        newarr.push(callback(this[i]));
    }
    return newarr;
}

//Ham tinh binh phuong
var fn = function (item) {
    return item * item;
}

var binhphuong = arr.myMap(fn); // [1, 4, 9, 16, 25]
console.log(binhphuong);