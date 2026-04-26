for(let i = 0; i < 3; i++){
    for(let j = 0; j < i; j++){
        console.log("i = " , i ," j = ",j);
    }
} 
// i =  1  j =  0
// i =  2  j =  0
// i =  2  j =  1

for(let i = 0; i < 5; i++){
    for(let j = 0; j <= i; j++){
        console.log("i = " , i ," j = ",j);
    }
} 


// i =  0  j =  1 time
// i =  1  j =  2 time
// i =  2  j =  3 time
// i =  3  j =  4 time
// i =  4  j =  5 time

// i =  0  j =  0
// i =  1  j =  0
// i =  1  j =  1
// i =  2  j =  0
// i =  2  j =  1
// i =  2  j =  2
// i =  3  j =  0
// i =  3  j =  1
// i =  3  j =  2
// i =  3  j =  3
// i =  4  j =  0
// i =  4  j =  1
// i =  4  j =  2
// i =  4  j =  3
// i =  4  j =  4



for(let i = 0; i < 3; i++){
    for(let j = i; j > 0; j--){
        console.log("i = " , i ," j = ",j);
    }
} 

// i=1 j=1
// i=2 j=2 
// i=2 j=1 

console.log("i =0  to j >=0");



for(let i = 0; i < 3; i++){
    for(let j = i; j >= 0; j--){
        console.log("i = " , i ," j = ",j);
    }
} 

// i=0 j=0
// i=1 j=1
// i=1 j=0
// i=2 j=2 
// i=2 j=1 
// i=2 j=0 


console.log("i reverse , j straight");



for(i = 5; i > 0; i-- ){
    for(j = 0; j < i; j++){
        console.log("i = " , i ," j = ",j);
    }
}

// i=5 j=0 
// i=5 j=1 
// i=5 j=2 
// i=5 j=3 
// i=5 j=4    5

// i=4 j=0 
// i=4 j=1 
// i=4 j=2 
// i=4 j=3    4

// i=3 j=0 
// i=3 j=1 
// i=3 j=2    3

// i=2 j=0 
// i=2 j=1    2 

// i=1 j=0    1