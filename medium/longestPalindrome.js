/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let left = 0;
  let right = 0;
  for (let currentLeft = 0; currentLeft < s.length; currentLeft++) {
    if(right - left > s.length - currentLeft) break;
    var character = s[currentLeft];
    let currentRight = s.indexOf(character, currentLeft + 1);
    while (currentRight >= 0) {
      if (checkPolindrome(s, currentLeft, currentRight)) {
        if(currentRight - currentLeft > right - left) {
          left = currentLeft;
          right = currentRight;
        }
      }
      currentRight = s.indexOf(character, currentRight + 1);
    }
  }
  return s.substring(left, right + 1);
};

const checkPolindrome = (text, left, right) => {
  while (text[left] === text[right]) {
    if (left >= right) {
      return true;
    }
    left++;
    right--;
  }
  return false;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("aaaa"));
console.log(longestPalindrome("aacabdkacaa"));
console.log(
  longestPalindrome(
    "xaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"
  )
);
