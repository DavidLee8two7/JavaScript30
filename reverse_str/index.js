// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//     debugger;
//   }
//   return reversed;
// }

function reverse(str) {
  return str.split("").reduce((a, b) => b + a, "");
}
reverse("abcd");

module.exports = reverse;
