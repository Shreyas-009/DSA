let arr = [0,0,1,3,3,4,4,5,5,7,7,8,9,9];

function removeDuplicatEelements(arr){
    let p = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[p]){
            p++;
            arr[p] = arr[i];
        }
    }
    return p+1;
}

console.log(removeDuplicatEelements(arr));
console.log(arr);

