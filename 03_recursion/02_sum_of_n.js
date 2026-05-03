// print sum of n numbers

// let n = 5;
// let sum = 0;
// function sum_of_n(x) {
//   if (x > n) return;
//   sum += x;
//   sum_of_n(++x);
// }

// sum_of_n(0);
// console.log(sum);

let n = 5;
let sum = 0;
function sum_of_n(x) {
  if (x > n) return;
//   sum += x;
console.log(x);

  sum_of_n(1 + sum_of_n(x+1));
}

// 0
// 1 + (0)

// 1
// 1 + (1)


sum_of_n(0);
console.log(sum);
