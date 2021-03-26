var intersect = function (nums1, nums2) {
    //时间，空间均不优
    nums1.sort(function (a, b) {
        return a - b;
    })
    nums2.sort(function (a, b) {
        return a - b;
    })
    let i = 0, j = 0;
    let result = [];
    while (i < nums1.length && j < nums2.length) {
        // console.log(nums1[i]+':'+nums2[j])
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

var intersect2 = function (nums1, nums2) {
    //时间空间俱佳，优先选择方法
    let map1 = new Map();
    let result = [];
    nums1.forEach(item => {
        if (map1.has(item)) {
            let i = map1.get(item)
            map1.set(item, ++i);
        } else {
            map1.set(item, 1)
        }
    })
    nums2.forEach(item => {
        if (map1.has(item)) {
            let i = map1.get(item);
            if (i > 0) {
                result.push(item);
            }
            map1.set(item, --i)
        }
    })
    return result;
}
console.log(intersect2([4, 9, 5], [9, 4, 9, 8, 4]))
