let arr = [-1, 45, 65, -54, -23, 5, -43, 34, -54, 23, 0, -1];

function find_negatives(arr) {
  let negatives = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
        negatives ++
    }
  }
  return negatives
}

console.log(find_negatives(arr));



