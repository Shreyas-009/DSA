let arr = [22, 43, 12, 3, 23, 1, 23, 99, 1];

function selectionSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(selectionSort(arr));
