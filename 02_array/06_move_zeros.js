let nums = [0, 1, 0, 3, 12];
// let nums = [0];
// [1, 3, 12, 0, 0];

function moveZeroes(nums) {
  let p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[p1];
      nums[p1] = nums[i];
      nums[i] = temp;
      p1++;
    }
  }
  return nums
}

// function moveZeroes(nums) {
//   let p1 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       nums[p1] = nums[i];
//       p1++;
//     }
//   }
//   for(let x = p1; x < nums.length; x++){
//     nums[x] = 0;
//   }
//   return nums;
// }

console.log(moveZeroes(nums));

// [0, 1, 0, 3, 12]
//  p1
//  i

// [0, 1, 0, 3, 12]
//  p1
//    i
// [1, 0, 0, 3, 12]
//     p1

// [1, 0, 0, 3, 12]
//     p1
//       i
// [1, 0, 0, 3, 12]
//    p1

// [1, 0, 0, 3, 12]
//     p1
//          i
// [1, 3, 0, 0, 12]
//        p1

// [1, 3, 0, 0, 12]
//        p1
//              i
// [1, 3, 12, 0, 0]
//           p1
