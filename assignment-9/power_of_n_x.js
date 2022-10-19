/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 */
/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 */

/**
 * 
 * @param {The number} x 
 * @param {how many time of number} n 
 * @returns 
 */
function power(x, n) {

    // If x^0 return 1
    if (n == 0)
        return 1;

    if (x == 0)
        return 0;

    // For all other cases
    return x * power(x, n - 1);
}

// Driver Code

var x = 2;
var n = 3;

console.log(power(x, n));

/**
 * Note: We can use Divide and Conqueror approach, the time complexity are same O(n) 
 * but space complexity O(n) 
 */


