// -321 = -123
// // 321 = 123

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 
function reverse_integer(num) {
  let org = num
  num = Math.abs(num);
  let reverse = 0;
  while (num > 0) {
    let reminder = num % 10;
    reverse = 10 * reverse + reminder;
    num = Math.floor(num / 10);
  }
  let limit = 2**31
  if(reverse > limit || reverse < -limit) return 0
  return org < 0 ? -reverse : reverse ;
}

console.log(reverse_integer(-567));
