let stones = "aAAbbbb";
let jewels = "aA";

// Approach 1 : using inbuilt includes method
// Time Complexity : O(m*n);
function jewelCountInStones1(stones, jewels) {
  let jewelCount = 0;
  for (let stone = 0; stone < stones.length; stone++) {
    if (jewels.includes(stones[stone])) jewelCount++;
  }
  return jewelCount;
}

// Approach 2 : using nested loops for stone and jelels itration and comparison
// Time Complexity : O(m*n);
function jewelCountInStones2(stones, jewels) {
  let jewelCount = 0;
  for (let stone = 0; stone < stones.length; stone++) {
    for (let jewel = 0; jewel < jewels.length; jewel++) {
      if (stones[stone] == jewels[jewel]) {
        jewelCount++;
        break;
      }
    }
  }
  return jewelCount;
}

// Approach 3 : using set to find matching stone with jewels in set 
// Time Complexity : O(n);
function jewelCountInStones3(stones, jewels) {
  let jewelCount = 0;
  let jewelsSet = new Set(jewels);
  for (let stone = 0; stone < stones.length; stone++) {
    if (jewelsSet.has(stones[stone])) jewelCount++;
  }
  return jewelCount;
}


console.log(jewelCountInStones1(stones, jewels));
console.log(jewelCountInStones2(stones, jewels));
console.log(jewelCountInStones3(stones, jewels));
