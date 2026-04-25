// find ;largest number in an array
// smallest number is -Infinity


// array with positve and negative both numbers
let arr = [-23, -54, -657, -3, -54, -463, -12, -623, -32, -999];

function largest_num(arr){
    let largest = -Infinity;
    //          OR
    // let largest = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(largest_num(arr));
