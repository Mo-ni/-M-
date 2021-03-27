const MAX = Math.pow(2, 31) - 1;
const MIN = -Math.pow(2, 31)
var reverse = function (x) {
    /*时间和空间都特别差
    * 空间复杂度为O(n);
    * */
    let arr = Array.from(x + "");
    let signal = false;//负数标志
    console.log(arr);
    if (arr[0] === "-") {
        arr.shift();
        signal = true;
    }
    arr.reverse();
    if (signal) {
        arr.unshift("-")
    }
    let result = arr.join("") - 0;
    console.log(Math.pow(2, 31))
    console.log(-Math.pow(2, 31))

    console.log(result)
    if (result >= MAX || result < MIN) {
        return 0;
    } else {
        return result;
    }
};

var reverse2 = function (x) {
    let result = 0;
    let signal = false;
    if (x < 0) {
        signal = true;
        x = -x;
    }
    while (x>9) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
        console.log(result)
    }
    result = result * 10 + x;
    if (signal && (-result) < MIN) {
        return 0;
    } else if (result > MAX) {
        return 0
    }
    return result;
}
console.log("return:", reverse2(-90100));
// console.log(Math.floor(123/10))
