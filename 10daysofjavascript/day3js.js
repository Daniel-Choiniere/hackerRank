

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var largestNumber = [0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            largestNumber = nums[i]; 
        }
    } return largestNumber - 1;
}