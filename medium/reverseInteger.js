/** https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if(x < 10 && x > -10) return x;
  let divisor = 1;
  let digits = [];
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }
  const number = Math.abs(x);
  let r = 0;
  let subtract = r;
  while (number >= divisor) {
    r = ((number % (divisor * 10)) - subtract) / divisor;
    digits.push(r);
    subtract += r * divisor;
    divisor *= 10;
  }
  let result = BigInt(digits.join(""));
  result = result > 2 ** 31 - 1 ? 0 : parseInt(result);
  return isNegative ? result * -1 : result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(8));
console.log(reverse(-7));
console.log(reverse(10));