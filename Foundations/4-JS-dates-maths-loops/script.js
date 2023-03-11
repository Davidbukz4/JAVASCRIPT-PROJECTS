// random() generates random number from 0 - 0.9
let num = Math.floor(Math.random() * 10) + 1
console.log(num);

// Random Function
function getRandNum(min, max){
    // generates random number between min (included) and max (excluded) 
    let num = Math.floor(Math.random() * (max - min)) + min; 
    // generates random number between min and max (included) 
    let num1 = Math.floor(Math.random() * (max - min + 1)) + min; 
}


// Boolean function
let res = Boolean(10 > 7);
console.log(res);

// boolean object
let x = false;
let y = new Boolean(false);
console.log(x === y);

// comparison operators
// ==   equal to
// ===  equal value and equal type
// !=   not equal to
// !==  not equal value or equal type
// >    greater than
// <    less than
// >=   greater than or equal to
// <=   less than or equal to


// Logical operators
// &&   and operator
// ||   or operator
// !    not operator


// Tenary operator
// variableName = (condition) ? value1 : value2;
let age = 19;
let voteable = (age > 18) ? "Yes" : "No";
console.log(voteable);


// ?? Nullish coalescing operator: returns the first arg if it is not null otherwise returns the second arg
let name = null;
let text = "missing";
res = null ?? text;
console.log(res);

// ?. optional chaining operator: returns undefined or null instead of throwing an error
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);


// Conditional statement
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }


// JS Loops
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// For in loop
// it iterates over the properties(keys) of an object
const person = {fname:"John", lname:"Doe", age:25};

console.log("\nFor in loop (objects):")
for (let x in person) {
    console.log(x);
}

// it also loop over the element index of an array
const numbers = [1,4,7,23,87,11]

console.log("\nFor in loop (array):") // array value may not be accessed according to index for arrays
for (let y in numbers) {
    console.log(numbers[y]);
}


// For of loop
// it loops over the value of an array
const cars = ["BMW", "Volvo", "Mini"];

console.log("\nFor of loop (array):")

for (let i of cars) {
    console.log(i);
}

// looping over a string
console.log("\nFor of loop (string):")
for (let j of "david") {
    console.log(j);
}


// JS Labels
const num_arr = [34,67,23,2,65,7];
let k = 0
outerloop: for (let val of num_arr) {
    innerloop: while (k < 4) {
        console.log(val);
        break outerloop; // with labels we can directly break the outerloop
        k++;
    }
}