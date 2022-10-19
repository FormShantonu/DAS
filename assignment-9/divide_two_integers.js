/** Divide two integers without using multiplication, 
 * division and mod operator
*/ 

/** Time complexity : O(a/b) 
 *  Space complexity : O(1) 
 */

// Function to divide a by b and
// return floor value it
function divide(dividend, divisor) {

// Calculate sign of divisor i.e.,
// sign will be negative only if
// either one of them is negative
// otherwise it will be positive
let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

// Update both divisor and
// dividend positive
dividend = Math.abs(dividend);
divisor = Math.abs(divisor);

// Initialize the quotient
let quotient = 0;
while (dividend >= divisor) {
	dividend -= divisor;
	++quotient;
}
//if the sign value computed earlier is -1 then negate the value of quotient
if(sign==-1) quotient=-quotient;
return quotient;
}

// Driver code
let a = 10, b = 3;
console.log(divide(a, b));

a = 43, b = -8;
console.log(divide(a, b));

