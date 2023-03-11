// JS Sets
const letters = new Set(); // creates a new set
// add values
letters.add("a");
letters.add("b");
letters.add("c");

// list all element
letters.forEach(function(value) {
    console.log(value);
});
// or
// values(): returns an iterator with all values in a set
for (let x of letters.values()){
    console.log(x);
}


// JS Maps
const fruits = new Map(); // creates new map object
// set map values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// update existing map values
fruits.set("apples", 700);
// get the value of key in a map
console.log(fruits.get("bananas"));
// number of map elements
console.log(fruits.size);
// removes a map element
fruits.delete("bananas");
console.log(fruits)
// check if a key exist in map
console.log(fruits.has("bananas"))


// Primitive data value: has no additional properties or methods
// e.g string, number, boolean, undefined

// Complex data returns function or object
// constructor property returns the constructor function for all javascript variable
console.log("John".constructor);
console.log((3.14).constructor);
console.log(false.constructor);
console.log([1,2,3,4].constructor);
console.log({name:"John",age:34}.constructor);
console.log(new Date().constructor);
console.log(function(){}.constructor);


const my_arr = new Array();
function ifArray(arr){
    return arr.constructor === Array;
}
console.log(ifArray(my_arr));

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars instanceof(Array)); // returns true


// Type conversion


// string to number
res = Number("993");
console.log(typeof(res));
// unary + operator can convert a variable to number
y = "-5";
x = +y;
console.log(x);

// Number to string
res = String("as");
console.log(typeof(res));
// toString() can convert to string also
res = (23.98).toString();
console.log(typeof(res));

// Dates to numbers
d = new Date();
console.log(Number(d)); // getTime() does the same

// Dates to string
console.log(d.toString());

// Booleans to numbers
console.log(Number(false)); // returns 0
console.log(Number(true)); // returns 1

// Booleans to string
console.log(String(false)); // returns "false". NB: toString() does same
console.log(String(true)); // returns "true"
