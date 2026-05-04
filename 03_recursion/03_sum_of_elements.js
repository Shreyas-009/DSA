// let arr = [2, 3, 6];
// let count = 0;
// function sum_of_array(sum) {
//   if (count > arr.length - 1) {
//     console.log(sum);
//     return;
//   }
//   sum_of_array(sum + arr[count++]);
// }
// sum_of_array(0);

let arr = [2, 3, 6];

function sum_of_array(n) {
  if (n == 0 ) return arr[n];
  return arr[n] + sum_of_array(n - 1);
}
console.log(sum_of_array(arr.length - 1));
