let sourceArr = [1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5];

function deleteRepeat(arr) {
    let newArr = arr;
    if (newArr.length === 1) {
        return newArr;
    }
    let temp = newArr[0];
    for (let i = 1; i < newArr.length;) {
        console.log(newArr.length)
        if (temp === newArr[i]) {
            newArr.splice(i, 1);
        } else {
            temp = newArr[i];
            i++
        }
    }
    return newArr
}

console.log(deleteRepeat(sourceArr));
