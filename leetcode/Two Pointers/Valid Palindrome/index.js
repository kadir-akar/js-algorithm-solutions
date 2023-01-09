var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = str.split("").reverse().join("");
  if (str == reversed) {
    return true;
  } else {
    return false;
  }
};
