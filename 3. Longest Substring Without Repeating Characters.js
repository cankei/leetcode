/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var length = s.length;
  var longestLength = 0;
  var i = 0, j = 0;
  var charSeen = {};
  while (i < length && j < length) {
    if (s[j] in charSeen) {
      delete charSeen[s[i]];
      i++;
    } else {
      charSeen[s[j]] = j;
      j++;
      longestLength = Math.max(longestLength, j - i);
    }
  }
  return longestLength;
};

