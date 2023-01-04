/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sumCharCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sumCharCount[char] = sumCharCount[char] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!sumCharCount[char]) {
      return false;
    }
    sumCharCount[char]--;
  }

  return true;
};
