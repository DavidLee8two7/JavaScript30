// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

/*
split make string into array and join puts it back to str
*/

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

/*
for (of) is better than reg. for loop syntax makes it less mistake
*/

function reverse(str) {
  return str.split("").reduce((a, b) => {
    return b + a;
  });
}

module.exports = reverse;
