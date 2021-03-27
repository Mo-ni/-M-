var firstUniqChar = function (s) {
    //使用js内置api
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }
    return -1;
};
var firstUniqChar2 = function (s) {

}
console.log("result", firstUniqChar2("leet"))
