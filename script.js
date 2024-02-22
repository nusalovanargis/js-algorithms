/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 
 * BRUTE FORCE SOLUTION 
 * This algorithm can take a LONG time, Big O notation, O(n)
 * 
 */
function twoSumBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSumBrute([2, 7, 11, 15], 18));


/**
 * 
 * It requires more memory 
 * It’s a bit harder to conceptualize
 * Extra caching and a little logic
 * 
 */
const twoSum = function (nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]

        if (obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else {
            obj[n] = i;
        }
    }
}

console.log(twoSum([1,2,3,4], 7));