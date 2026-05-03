let nums = [4, 1, 2, 1, 2];

function singleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] ? (hash[nums[i]] += 1) : (hash[nums[i]] = 1);
  }

  for (let item in hash) {
    if (hash[item] !== 2) {
      //   item alwas return key pair as a string and we need as number;
      return Number(item);
    }
  }
}

// [solution 2] we use bitwise oprator xor symbol for xor = "^"
// xor will return zero it both oprants are same
// example  1 0 1
//     xor 1 0 1
//       = 0 0 0;

// example  1 0 1
//      xor 0 0 1
//        = 1 0 0;

// function singleNumber(nums) {
//   let xor = 0;
//   for(let i = 0; i < nums.length; i++){
//     xor = xor ^ nums[i];
//   }
//   return xor
// }

console.log(singleNumber(nums));
