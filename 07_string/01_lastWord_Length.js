let str = "   fly me   to   the moon  ";


// approach 1: using inbuild methodes of string
function findLastWordLength1(s) {
  let arr = s.split(" ");
  let fill = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      fill = arr[i];
      // console.log("i",arr[i]);
      // console.log("fill",arr[fill]);
    }
  }
  //   console.log(fill);
  return fill.length;
}


// approach 2 : using loop and cound from last by ignoring white spaces
function findLastWordLength2(s) {
  let finalString = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      finalString++;
    } else {
      if (finalString && s[i] == " ") {
        break;
      } else {
        finalString = 0;
      }
    }
  }

  return finalString;
}

// approach 3 : removing extra white spaces manuall trimming then finding last word and return its length
function findLastWordLength3(s) {
  let finalString = "";
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      finalString += s[i];
      word = s[i];
    } else {
      if (s[i] != word) {
        finalString += s[i];
      }
      word = s[i];
    }
  }

//   console.log(finalString);

  let lastWord = "";
  for (let i = 0; i < finalString.length - 1; i++) {
    if (finalString[i] != " ") {
      lastWord += finalString[i];
    } else {
        if (finalString[i+1] != " ") lastWord = "";
    }
  }

  return lastWord.length;
}




console.log(findLastWordLength3(str));
console.log(findLastWordLength2(str));
console.log(findLastWordLength1(str));

