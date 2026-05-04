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

function sum_of_n(n) {          // 5       ,4       ,3     ,2      , 1    , 0
  if (n == 0) return 0;

   return n + sum_of_n(n - 1);  // 5 + (4), 4 + (3) ,2 + (2),2 + (1), 1+(0),0
                                //15    9        5        3        1       0    
}

console.log(sum_of_n(5));
