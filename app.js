console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0){
        console.log("FIZZ");
    }
    else if(i % 5 == 0){
        console.log("BUZZ")
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let x = 0;

while(x <= 100){
    if(x % 2 == 1){
        console.log(x);
    }
    x++;
}

let y = 0;

while(y <= 100){
    if(y % 3 == 0 && y % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(y % 3 == 0){
        console.log("FIZZ");
    }
    else if(y % 5 == 0){
        console.log("BUZZ")
    }
    y++;
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let z = 0; z < n; z++){
    if(z == value){
        console.log("Found value!")
        break;
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(let i = start; i < end; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if(i % buzzDivisor == 0){
        console.log("BUZZ")
    }
}