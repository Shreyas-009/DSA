let str = "RLRRLLRLRL";

function splitString1(str) {
  let r = 0;
  let l = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      r++;
    } else {
      l++;
    }
    if (r == l) {
      count++;
      r = 0;
      l = 0;
    }
  }

  return count;
}

console.log(splitString1(str));
