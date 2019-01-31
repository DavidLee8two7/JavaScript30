//my solution
function palindrome(str) {
  const reverse = str
    .split("")
    .reverse()
    .join("");
  return str === reverse;
}

module.exports = palindrome;
