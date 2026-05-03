
let arr = [2,4,5,5,6,7,5,8];
val = 5;

function removeDuplicates(arr,val){
    let k = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            arr[k] = arr[i];
            k++;
        }
    }
    console.log(arr);
    return k+1;
}

console.log(removeDuplicates(arr,val));
