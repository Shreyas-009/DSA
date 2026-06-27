let str = "successes";

function vovalsCountInString1(str) {
  let vovalsStore = {};
  let nonVovalsStore = {};
  let vovals = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < str.length; i++) {
    if (vovals.has(str[i])) {
      vovalsStore[str[i]]
        ? (vovalsStore[str[i]] = vovalsStore[str[i]] + 1)
        : (vovalsStore[str[i]] = 1);
    }else{
      nonVovalsStore[str[i]]
        ? (nonVovalsStore[str[i]] = nonVovalsStore[str[i]] + 1)
        : (nonVovalsStore[str[i]] = 1);
    }
    
  }

  let maxVovalCount = 0;
  for( let v in vovalsStore){
    if (vovalsStore[v] > maxVovalCount) {
      maxVovalCount = vovalsStore[v];
    }
  }

  let maxNonVovalCount = 0;
  for (let v in nonVovalsStore) {
    if (nonVovalsStore[v] > maxNonVovalCount) {
      maxNonVovalCount = nonVovalsStore[v];
    }
  }
  
  return maxVovalCount + maxNonVovalCount;
}

function vovalsCountInString2(str) {
  let store = {};
  let vovals = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < str.length; i++) {
    store[str[i]] =! store[str[i]] ?  1 : ++store[str[i]];
  }

  let maxVovalCount = 0;
  let maxNonVovalCount = 0;
  for( let v in store){
    if(vovals.has(v)){
      maxVovalCount = Math.max(maxVovalCount, store[v]);
    }else{
      maxNonVovalCount = Math.max(maxNonVovalCount, store[v]);
    }
  }
  
  return maxVovalCount + maxNonVovalCount;
}

console.log(vovalsCountInString1(str));
console.log(vovalsCountInString2(str));
