var twoSum = function(nums, target) {
    let result=[];
    nums.forEach((item,index)=>{
        let target2=target-item;
        for(let i=index+1;i<nums.length;i++){
            if(nums[i]===target2){
                result.push(index);
                result.push(i);
            }
        }
    })
    return result;
};
var twoSum = function(nums, target) {
}
console.log(twoSum([3,2,4],6))
