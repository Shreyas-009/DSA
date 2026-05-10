let arr = [-4, 0, 8, 9, 13, 19, 20, 90];

function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  let mid = right + left / 2;
  while (true) {
    mid = right + left / 2;
    if (arr[mid] == n) return mid;
    if (n > arr[mid]) left = mid + 1;
    else right = mid - 1;

    if(left > right ) return -1;
  }
}

console.log(binarySearch(arr, 9));
