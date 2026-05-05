function find_factorial(n){
    if(n == 1) return 1;
    return n * find_factorial(n-1);
}

console.log(find_factorial(5));

