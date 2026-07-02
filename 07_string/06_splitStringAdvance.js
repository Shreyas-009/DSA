let str = "abcdefg";
let k = 2

function splitStringAdvanced(s,k) {
  newStr = "";
  function reverseString(str) {
    let arr = str.split("");
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
      [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
    }
    return arr.join("");
  }

  for (let i = 0; i < s.length; i += 2 * k) {
    newStr +=
      reverseString(s.substring(i, i + k)) + s.substring(i + k, i + 2 * k);
  }

  return newStr;
}

console.log(splitStringAdvanced(str,k));