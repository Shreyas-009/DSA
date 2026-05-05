
function is_power_of_2(n){
    if( n == 1 ) return true;
    if(n%2 !== 0 || n < 1) return false;

    return is_power_of_2(n/2)
}

console.log(is_power_of_2(4));
