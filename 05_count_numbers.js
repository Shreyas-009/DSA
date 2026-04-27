// count number  in am string

// Math.floor() // ignore digit after decimal point
// Math.round() // do roundoff avrage 1.5 = 2 and 1.4 = 1
// Math.ceil() // do roundoff always increase 1.01 = 2 and 1.5 = 2
// Math.abs() // abs = absolute ; makes mumber from -ve to +ve

function count_digit_in_number() {
  let n = -567;
  let total_numbers = 0;

  // if 0 count its as also a digit
  if (n == 0) return 1;

  // makes numebr negative to positive
  n = Math.abs(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    total_numbers++;
  }
  return total_numbers;
}
console.log(count_digit_in_number());
