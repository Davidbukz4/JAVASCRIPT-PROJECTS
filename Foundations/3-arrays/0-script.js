// Creating an array
const cars = ["Saab", "Volvo", "BMW"];
// const cars = new Array("Saab", "Volvo", "BMW");
// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
// the full array can be accessed by referring to the array name
// document.getElementById("demo").innerHTML = cars;

// Looping through array element using for loop
/*let text = "<ul>";
  for (let i = 0; i < cars.length; i++) {
    text += "<li>" + cars[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("demo").innerHTML = text; */

// Looping through array element using forEach
let text = "<ul>";
cars.forEach(func); // array.forEach(function), each value of the array is passed to the function
text += "</ul>";
function func(value) {
  text += "<li>" + value + "</li>";
}
//document.getElementById("demo").innerHTML = text;

// Adding a new array element
cars.push("Benz"); // it can be done using the push method or
cars[cars.length] = "Prado";

// Create a new empty array
const new_array1 = new Array();
// OR
const new_array2 = [];


// JS array uses numbered index, if named index is used JS redefines the array to an object
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length) // would give 0
console.log(person[0]) // would give undefined

// Check if an object is an array
let res = Array.isArray(new_array1); // returns true if parameter is an array
console.log(res);
res = new_array2 instanceof(Array); // returns true if arg is an instance of array object
console.log(res);

// Converting array to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
res = fruits.toString(); // returns a string of comma separated array value
console.log(res);
res = fruits.join(" - "); // joins all array elements with specified delimiter
console.log(res);


// pop and push
fruits.pop(); // removes the last element
console.log(fruits);
fruits.push("Guava"); // adds element to the end of an array
console.log(fruits);


// SHift
fruits.shift(); // removes the first element and shift all other to the left
console.log(fruits)
fruits.unshift("Melon"); // add a new element to the array and right shift all other element
console.log(fruits);

// changing element
fruits[0] = "kiwi";
console.log(fruits);

// delete array element
delete fruits[0]; // it leaves undefined hole in array, use pop, shift or splice instead
console.log(fruits);

// concatenating 2 arrays
const color = ["red","green","blue"];
const directions = ["left", "right", "up", "down"];
res = color.concat(fruits, directions); // concats array args to color array, it can also take string arg
console.log(res);


// Array splice and slice
fruits.splice(0, 1, "lemon", "mango"); // the first parameter specifies index to add element, 
// second parameter specifies how many element to remove, the rest parameter specifies the new elements to be added
console.log(fruits);
// fruits.splice(0, 1); this deletes 1 element from index 0
res = fruits.slice(1, 3); // slice(start_idx, end_idx) 
console.log(res);

// Array sort
fruits.sort(); // rearranges the array in ascending order of alphabets
console.log(fruits);
fruits.reverse(); // rearranges the array in descending order of alphabets
console.log(fruits);

// Numeric sort - since sort() sorts values as strings using their unicode values
const num_arr = [74, 18, 10, 5, 84, 24, 105];
// Ascending order
num_arr.sort(sort_asc); // sort uses a callback function and pass two values to compare
console.log(num_arr);
// Descending order
num_arr.sort(sort_desc);
console.log(num_arr)


function sort_asc(a, b){
    return a - b;
    // rules
    // < 0 ... a comes first
    // = 0 ... no changes
    // > 0 ... b comes first
}

function sort_desc(a, b){
    return b - a;
}