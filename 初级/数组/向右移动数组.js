var rotate = function (nums, k) {
    let times=k%nums.length;
    let right = nums.splice(-times, times);
    for (let i=right.length-1;i>=0;i--){
        nums.unshift(right[i]);
    }
    return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
