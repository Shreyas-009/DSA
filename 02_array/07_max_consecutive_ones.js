// nums = [1, 1, 0, 1, 1, 1];
// Output: 3;

nums = [1, 0, 1, 1, 0, 1];
// Output: 2;

function findMaxConsecutiveOnes(nums) {
  let streak = 0;
  let MaxStreak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      streak++;
    } else {
      //  if previous max streake if less than current then only put max streak as current streak else we can reset streak;
      if (MaxStreak < streak) {
        MaxStreak = streak;
      }
      streak = 0;
    }
  }
  return streak > MaxStreak ? streak : MaxStreak;
}
console.log(findMaxConsecutiveOnes(nums));

//[solution 3 = pass ]{maintaining previous streak with checker if its longer than current } streak maintaining with previous streak is longer or not

// if maxStreak < streak
// maxstreak = streak

//[solution 2 = failed ]{cant remember previous streak was longer or not } streak maintaining with previous streak

// if we encounter max streak early
// [1, 1, 0, 1, 0, 1]
//  must check maxStreak < streak then only maxStreak = streak
// if not checkd miss match happens :

// s1 = 0;
// s2 = 0;
// [1, 1, 0, 1, 0, 1]
//  i
//  s1 = 1
//  s2 = 0;

// s1 = 1;
// s2 = 0;
// [1, 1, 0, 1, 0, 1]
//     i
//  s1 = 2;
//  s2 = 0;

// s1 = 2;
// s2 = 0;
// [1, 1, 0, 1, 0, 1]
//        i
//  s1 = 0;
//  s2 = 2;

// s1 = 0;
// s2 = 2;
// [1, 1, 0, 1, 0, 1]
//           i
//  s1 = 1;
//  s2 = 2;

// s1 = 1;
// s2 = 2;
// [1, 1, 0, 1, 0, 1]
//             i
//  s1 = 0;
//  s2 = 1;

// s1 = 0;
// s2 = 1;
// [1, 1, 0, 1, 0, 1]
//                 i
//  s1 = 1;
//  s2 = 1;

// ans s1 = 1 wrong

//[solution 2 = failed ]{cant remember previous streak was longer or not } streak maintaining with previous streak

// s1 = 0;
// s2 = 0;
// [1, 0, 1, 1, 0, 1];
//  i
//  s1 = 1
//  s2 = 0
// s1 = 0;

// s2 = 1;
// s2 = 0;
// [1, 0, 1, 1, 0, 1];
//     i
//  s1 = 0
//  s2 = 1

// s2 = 0;
// s2 = 1;
// [1, 0, 1, 1, 0, 1];
//        i
//  s1 = 1
//  s2 = 1

// s2 = 1;
// s2 = 1;
// [1, 0, 1, 1, 0, 1];
//           i
//  s1 = 2
//  s2 = 1

// s2 = 2;
// s2 = 1;
// [1, 0, 1, 1, 0, 1];
//              i
//  s1 = 0
//  s2 = 2

// s2 = 0;
// s2 = 2;
// [1, 0, 1, 1, 0, 1];
//                 i
//  s1 = 1
//  s2 = 2

// s1 > s2 ? s1 : s2 ;
// ans : s2 = 2

// [solution 1 = failed ]{cant remember previous streak} normal streak maintaining with single variable

// s = 0;
// [1, 1, 0, 1, 1, 1];
//  i
// s = 1;

// s = 1;
// [1, 1, 0, 1, 1, 1];
//     i
// s = 2;

// s = 2;
// [1, 1, 0, 1, 1, 1];
//        i
// s = 0;

// s = 0;
// [1, 1, 0, 1, 1, 1];
//           i
// s = 1;

// s = 1;
// [1, 1, 0, 1, 1, 1];
//              i
// s = 2;

// s = 2;
// [1, 1, 0, 1, 1, 1];
//                 i
// s = 3;

// s = 3;
