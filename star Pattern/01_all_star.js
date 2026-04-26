for(let i = 0; i < 4; i++){
    // console.log("*");
    let row = ""
    for(let j = 0; j < 4; j++){
        row += "*"    
    }
    console.log(row);
}

// ****
// ****
// ****
// ****


for(let i = 0; i < 4; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += "*"
    }
    console.log(row);
}

// 0  0

// 1  0
// 1  1

// 2  0
// 2  1
// 2  2

// *
// **
// ***
// ****

for(let i = 0; i < 4; i++){
    let row = "";

    for(let j = 3 ; j >= 0; j--){

        if(j <= i ){
            row += "*"
        }
        else{
            row += " "
        }
        
    }
    console.log(row);
}

// 0 = 3   " "  
// 0 = 2   " "  
// 0 = 1   " "  
// 0 = 0   " "  

//      *
//     **
//    ***
//   ****

