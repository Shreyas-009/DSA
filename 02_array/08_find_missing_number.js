let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function missingNumber(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let n = nums.length;
  let Expectedtotal = (n * (n + 1)) / 2;
  
  return Expectedtotal - total;
}

console.log(missingNumber(nums));
