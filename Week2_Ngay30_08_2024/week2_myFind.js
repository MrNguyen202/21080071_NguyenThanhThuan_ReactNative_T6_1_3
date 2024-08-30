var arr = [2001, 2002, 2003, 2004, 2005, 2006, 2007];


// Mo ta cho ham myFind: Trả về phần tử đầu tiên thỏa điều kiện của callback, 
// nếu không có phần tử nào thỏa thì trả về undefined
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}


//Ham tìm năm nhuận
var fn = function (item) {
    return (item % 4 === 0 && item % 100 !== 0) || item % 400 === 0;
}

var namnhuan = arr.myFind(fn); // 2004
console.log(namnhuan);

