/*
* 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
* */


let sourceArr = [1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5];

function deleteDuplicates(newArr) {
    if (newArr.length === 1) {
        return newArr;
    }
    let temp = newArr[0];
    for (let i = 1; i < newArr.length;) {
        if (temp === newArr[i]) {
            newArr.splice(i, 1);
        } else {
            temp = newArr[i];
            i++
        }
    }
    return newArr.length
}

console.log(deleteDuplicates(sourceArr));
