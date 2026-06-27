let words = ["moon", "sun", "earth", "mars"];
let char = "a";

// approach 1: using inbuild methodes of string
function wordContainingChar1(words, c) {
  let ans = [];
  words.forEach((word, index) => {
    if (word.includes(c)) ans.push(index);
  });
  return ans;
}

// approach 2 : using nested for loop
function wordContainingChar2(words, c) {
  let ans = [];
  for (let word = 0; word < words.length; word++) {
    for (let char = 0; char < words[word].length; char++) {
      if (words[word][char] == c) {
        ans.push(word);
        break;
      }
    }
  }
  return ans;
}

console.log(wordContainingChar1(words, char));
console.log(wordContainingChar2(words, char));
