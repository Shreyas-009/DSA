
let nums = [5, 2, 3, 1];
function mergeSort(nums) {
  function sort(arr1, arr2) {
    let sorted = [];
    let p = 0;
    let q = 0;
    while (p < arr1.length && q < arr2.length) {
      if (arr1[p] < arr2[q]) {
        sorted.push(arr1[p]);
        p++;
      } else {
        sorted.push(arr2[q]);
        q++;
      }
    }
    return [...sorted, ...arr1.slice(p) , ...arr2.slice(q)];
  }

  if (nums.length <= 1) return nums;
  let mid = nums.length / 2;
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));
  return sort(left, right);
}

console.log(mergeSort(nums));
