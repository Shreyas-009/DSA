function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern1(5);
function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern2(5);

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern3(5);

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    for (let k = 0; k < i; k++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern4(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}
// pattern5(5);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += i + 1;
    }
    console.log(row);
  }
}
// pattern6(5);

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let t = 1;
    for (let j = 0; j <= i; j++) {
      row += t;
      t == 0 ? (t = 1) : (t = 0);
    }
    console.log(row);
  }
}
// pattern7(6);

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

function pattern8(n) {
  let t = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += t;
      t == 0 ? (t = 1) : (t = 0);
    }
    console.log(row);
  }
}
// pattern8(5);

function findNegativeNums() {
  let arr = [-1, 45, 65, -54, -23, 5, -43, 34, -54, 23, 0, -1];
  let negCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negCount++;
  }
  return negCount;
}
// console.log(findNegativeNums());

// find ;largest number in an array

function findLargestNumber() {
  let arr = [-23, -54, -657, -3, -54, -463, -12, -623, -32, -999];

  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

// console.log(findLargestNumber());

function findSecondLargest() {
  let arr = [-213, -34, -5, 9, 4, 0, 8, -65, -34, -5, -36, -4, -656, -4, -656];
  //   let arr = [-213, -213, -213];

  if (arr.length < 2) return "array must have more than 2 numbers";
  let largest = -Infinity;
  let s_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      s_largest = largest;
      largest = arr[i];
    } else if (arr[i] > s_largest && largest != arr[i]) {
      s_largest = arr[i];
    }
  }
  if (s_largest == -Infinity) return "All numbers in an array are same ";
  return s_largest;
}
// console.log(findSecondLargest());

function countStringNums() {
  //   let num = -1432;
  let num = 0;
  let nums = Math.abs(num);
  let count = 0;
  if (nums == 0) return 1;
  while (nums > 0) {
    nums = Math.floor(nums / 10);
    count++;
  }
  return count;
}
// console.log(countStringNums());

function palindromeChecker() {
  let nums = -1221;
  let org = nums;
  if (nums < 0) return false;
  let rev = 0;
  while (nums > 0) {
    let last = nums % 10;
    rev = rev * 10 + last;
    nums = Math.floor(nums / 10);
  }
  console.log(org, rev);
  return org == rev;
}
// console.log(palindromeChecker());

function reverseInteger() {
  let nums = -1234;

  let num = Math.abs(nums);
  let rev = 0;
  while (num > 0) {
    let last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  return nums < 0 ? -rev : rev;
}

// console.log(reverseInteger());

function removeDuplicate() {
  let arr = [0, 0, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8, 9, 9];
  let p = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[p]) {
      p++;
      arr[p] = arr[i];
    }
  }
  return p + 1, arr;
}

// console.log(removeDuplicate());
