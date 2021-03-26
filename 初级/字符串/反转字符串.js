var reverseString = function (s) {
    return s.reverse();
};
var reverseString2 = function (s) {
    let i=0,j=s.length-1;
    for (;i<j;i++,j--){
        let temp=s[i];
        s[i]=s[j];
        s[j]=temp;
    }
    return s;
};
console.log(reverseString2([1, 3, 2]))
