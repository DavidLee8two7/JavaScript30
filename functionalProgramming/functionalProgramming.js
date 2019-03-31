/*
functions are 1st class
functions are values ( you can assing as varirable)
Higher-order functions
*/

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

// var totalAmount = orders.reduce((sum, order) => {
//   console.log("hello", sum, order);
//   return sum + order.amount;
// }, 0);

// var totalAmount = 0;
// for (var i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }
