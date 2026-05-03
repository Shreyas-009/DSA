// print n to 1

function print_n_to_1(n) {
  if (n < 1) return;
  console.log(n);
  print_n_to_1(--n);
}
// print_n_to_1(5);


// print 1 to n

let stop = 20;
function print_1_to_n(n){
    if(n > stop) return;
    console.log(n);
    n += 1;
    print_1_to_n(n);
}
print_1_to_n(1);