let arr = [5, 6, 7, 8, 3, 4, 9, 4];
function linerSearch(arr , n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return i;
  }
  return -1;
}
console.log(linerSearch(arr , 9));
