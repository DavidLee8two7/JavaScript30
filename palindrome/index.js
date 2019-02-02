// function palindrome(str) {
//   const reverse = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === reverse;
// }

// this is not efficient
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
