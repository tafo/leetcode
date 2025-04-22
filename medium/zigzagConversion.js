/** https://leetcode.com/problems/zigzag-conversion/description/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows === 1) return s;
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let currentIndex = i;
    let zig = true;
    while (currentIndex < s.length) {
      result.push(s[currentIndex]);
      if (i === 0 || i === numRows - 1) {
        currentIndex = currentIndex + 2 * (numRows - 1);
      } else {
        if (zig) {
          currentIndex = currentIndex + 2 * (numRows - i - 1);
        } else {
          currentIndex = currentIndex + 2 * i;
        }
        zig = !zig;
      }
    }
  }
  return result.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
