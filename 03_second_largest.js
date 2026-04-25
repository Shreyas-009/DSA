// find second largest number in an array

// simple array
let arr = [ 9, 4, 0, 8];

// array with negative and positive elements 
// let arr = [-213, -34, -5, 9, 4, 0, 8, -65, -34, -5, -36, -4, -656, -4, -656];

// array with only negative elements
// let arr = [-213, -34, -5, -65, -34, -5, -36, -4, -656, -4, -656];

// array with same elements
// let arr = [3 , 3]

// less that 2 element no secont element
// let arr = [3]

// empty array
// let arr = []

function second_largest(arr) {
 let largest = -Infinity
 let s_largest = -Infinity

 if(arr.length < 2){
    return "array should have at least 2 elements"
 }

 for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        s_largest = largest;
        largest = arr[i]
    }
    else if(arr[i] > s_largest && arr[i] != largest){
        s_largest = arr[i]
    }
 }

 if(s_largest == -Infinity){
    return "all elements in array are same, no second largest"
 }

 return s_largest
}

console.log(second_largest(arr));
