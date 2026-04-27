function palindrome_checker(org_num) {
  let n = org_num;
  let rev = 0;
//   if (n < 0) return "its not a palindrome";
  while (n > 0) {
    
    x = n%10;
    rev = (rev*10) + x
    n = Math.floor(n/10)
  }

  console.log(rev," = ", org_num);
  if (num == rev) {
    return "its an palindrome";
  } else {
    return "its not a palindrome";
  }
}

console.log(palindrome_checker(-1221));
