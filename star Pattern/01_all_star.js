// ****
// ****
// ****
// ****
function pattern1() {
  console.log("Square");

  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern1();

// *
// **
// ***
// ****
function pattern2() {
  console.log("triandle top-left to botttom-right");

  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern2();

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function pattern3() {
  console.log("number triangle");

  let n = 5;
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}
// pattern3();

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function pattern4() {
  console.log("same number in a row triangle");
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += i + 1;
    }
    console.log(row);
  }
}
// pattern4();

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern5() {
  console.log("inverted number triangle");

  n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}
// pattern5();

// *****
// ****
// ***
// **
// *
function pattern6() {
  console.log("inverted star triangle");
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern6();

//     *
//    **
//   ***
//  ****
// *****
function pattern7() {
  console.log("right shifted star triangle");
  n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    for (let k = 0; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern7();

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0
function pattern8() {
  console.log("1-0 ulternate left side triangle");
  let n = 6;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j % 2 == 0 ? "1" : "0";
    }
    console.log(row);
  }
}
// pattern8();

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
function pattern9() {
  console.log("0-1 toggle left side triangle");
  let n = 5;
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += toggle;
      toggle == 0 ? (toggle = 1) : (toggle = 0);
    }
    console.log(row);
  }
}
// pattern9();
