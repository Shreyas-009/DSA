// recursiove thing from backward and go deep till we know value and keep returning ther eproduct to next
function fibonacciNumber(n) {
  if (n <= 1) return n;
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(6));
//        0  , 1 , 2 , 3 , 4 , 5 , 6 , 7
// fib = [0 , 1 , 1 , 2 , 3 , 5 , 8 , 13];

// itrative approach wher we thing forward
// function fibonacciNumber(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return Number(fib[n]);
// }

// console.log(fibonacciNumber(7));
