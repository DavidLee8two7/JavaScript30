const test1 = [2, 1, 3, 5, 3, 2];
const test2 = [2, 4, 3, 5, 1];

function firstDuplicate(a) {
  const checkDup = {};
  for (let x of a) {
    if (checkDup[x]) return x;
    checkDup[x] = x;
  }
  return -1;
}

firstDuplicate(test1); // finds the first duplicate
firstDuplicate(test2); // returns -1
