

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

    // Solution to SECOND algorithim of day 3

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        if (typeof s !== 'string') throw console.log(s.split("").reverse().join(""));
    }
    catch (error) {
        console.log(error.message);
        console.log(s);
    }
    finally {
        console.log(s.split("").reverse().join(""));
    }
} 

    // Solution to THIRD algorithim of day 3

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
       return "Zero Error"
    } else {
        return "Negative Error"
    }
}