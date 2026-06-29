let str = "RLRRLLRLRL";

function splitString1(str) {
  let ch = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      ch++;
    } else {
      ch--;
    }
    if (!ch) {
      count++;
    }
  }

  return count;
}

console.log(splitString1(str));
