var containsDuplicate = function (nums) {
    //此种方法仅限于短数组，长数组会受String长度的限制，并且查询速度变慢
    let str = "";
    let result = false;
    nums.forEach(item => {
        if (str.indexOf(item) === -1) {
            str += item;
            console.log(str)
        } else {
            result = true;
        }
    })
    return result;
};
var containsDuplicate2 = function (nums) {
    //笨方法，时间长，但内存消耗少
    let result = false;
    nums.forEach((item, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if (item === nums[i])
                result = true;
        }
    })
    return result;
}
var containsDuplicate3 = function (nums) {
    //执行快，但内存消耗较多
    let newSet = new Set(nums);
    return nums.length > newSet.size;
}

var containsDuplicate4 = function (nums) {
    //执行速度与空间俱佳
    let newArr = nums.sort(function (a, b) {
        return b - a;
    })
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i + 1]) {
            return true
        }
    }
    return false
}
console.log(containsDuplicate31([1, 2, 3, 1]))
