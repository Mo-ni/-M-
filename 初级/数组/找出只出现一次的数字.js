var singleNumber = function (nums) {
    //空间时间都不佳
    nums.sort(function (a, b) {
        return a - b;
    })
    console.log(nums)
    if (nums.length === 1) {
        return nums[0]
    }
    for (let i = 0, j = 1; j < nums.length; i++, j++) {
        if (nums[i] !== nums[j]) {
            if (i === 0) {
                return nums[0];
            }
            if (j === nums.length - 1) {
                return nums[j];
            }
            if (nums[j] !== nums[j + 1]) {
                return nums[j];
            }
        }
    }
};
var singleNumber2 = function (nums) {
    //最佳答案：达到"时间线性，不使用额外空间"的要求
    //相当于数组中所有元素拉通进行异或运算，成对的被相互抵消,剩下的时落单的
    //时间空间俱佳
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(result + ":" + nums[i])
        result ^= nums[i];
        console.log("after:" + result)
    }
    return result
}

var singleNumber3 = function (nums) {
    //对JS而言，时间空间均不佳，但不失为一种新思路
    let mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i];
        if (mySet.has(temp)) {
            mySet.delete(temp)
        } else {
            mySet.add(temp)
        }
    }
    for (let str of mySet){
        return str
    }
}
console.log(singleNumber3([4, 1, 2, 1, 4]))
