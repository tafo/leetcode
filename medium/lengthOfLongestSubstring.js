/** https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  const window = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const charIndex = window.indexOf(s[i]);
    if (charIndex !== -1) {
      result = Math.max(result, window.length);
      let shiftIndex = 0;
      do {
        window.shift();
        shiftIndex++;
      } while (shiftIndex <= charIndex);
    }
    window.push(s[i]);
  }
  return Math.max(result, window.length);
};
