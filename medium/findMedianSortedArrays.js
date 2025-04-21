/** https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let firstIndex = 0;
  let secondIndex = 0;
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  const maxIndex = Math.floor(totalLength / 2);
  let previousNumber = null;
  let currentNumber = null;
  while (firstIndex + secondIndex <= maxIndex) {
    previousNumber = currentNumber;
    if(firstIndex < nums1.length) {
      if(secondIndex < nums2.length) {
        if(nums1[firstIndex] < nums2[secondIndex]) {
          currentNumber = nums1[firstIndex++];
        } else {
          currentNumber = nums2[secondIndex++]
        }
      } else {
        currentNumber = nums1[firstIndex++];
      }
    } else {
      if(secondIndex < nums2.length) {
        currentNumber = nums2[secondIndex++];
      } 
    }
  }
  if (isEven) {
    return (previousNumber + currentNumber) / 2;
  } else {
    return currentNumber;
  }
};

