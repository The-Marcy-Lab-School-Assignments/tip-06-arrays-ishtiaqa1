//write your code here

const findMax = (nums) => {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 5]));
console.log(findMax([-1, -5, -3]));