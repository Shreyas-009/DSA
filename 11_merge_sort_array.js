nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
// function merge(nums1, m, nums2, n) {
//   let p = 0;
//   let q = 0;
//   let copuNum1 = nums1.slice(0, m);
//   for (let i = 0; i < m + n; i++) {
//     if (copuNum1[p] <= nums2[q]) {
//       nums1[i] = copuNum1[p];
//       p++;
//     } else {
//       nums1[i] = nums2[q];
//       q++;
//     }
//   }
//   return nums1;
// }
function merge(nums1, m, nums2, n) {
  let p = m - 1;
  let q = n - 1;


  for (let i = m + n - 1; i >= 0; i--) {

    if(q == -1) break; 
    if(p >= 0 && nums1[p] > nums2[q]){
        nums1[i] = nums1[p];
        p--;
    }
    else{
        nums1[i] = nums2[q];
        q--;
    }
  }
  return nums1;
}

console.log(merge(nums1, m, nums2, n));
