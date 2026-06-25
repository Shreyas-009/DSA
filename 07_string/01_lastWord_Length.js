let str = "Hello   World   ";

function findLastWordLength(s) {
  let arr = s.split(" ");
  let fill = "";
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
        fill = arr[i];
        // console.log("i",arr[i]);
        // console.log("fill",arr[fill]);
    }
  }
//   console.log(fill);
  return fill.length;
}

console.log(findLastWordLength(str));
