// Array iteration

// forEach() method
const num = [23, 46, 123, 78, 2, 92];
num.forEach(double_func); // it uses a callback function to perform an action on array elements

function double_func(value, index, array){ 
    // the callback function can take up to (not necessarily) 3 args. But value arg is important
    // value, index, array
    value *= 2; // a return value is not needed
    console.log(`[${index}]: ${value}`);
}


// map() method
const num_arr = [23, 46, 123, 78, 2, 92];
let res = num_arr.map(add_two_func); // similar to forEach but it returns a new array
console.log(res);

function add_two_func(value, index, array){ 
    // the callback function can take up to (not necessarily) 3 args. But value arg is important
    // value, index, array. it returns a value
    value += 2;
    return value;
}


// filter() method
res = num_arr.filter(above_ten); // it returns a new array with element that passes a condition
console.log(res);

function above_ten(value, index, array){
    // the callback function can take up to (not necessarily) 3 args. But value arg is important
    // value, index, array
    return value > 10;
}

// reduce() method
const num_arr1 = [1000,23,15,4,97]
res = num_arr1.reduce(diff);

function diff(total, value, index, array){
    // the callback function can take up to (not necessarily) 4 args. But total and value arg is important
    // total (initial value / previously returned value), value, index, array
    console.log(total);
    return total - value;
}

// reduceRight(): works similar to reduce but it iterates from right to left


// indexOf(): returns the position of an element in an array
res = num_arr1.indexOf(4);
console.log(res);

// Array.from()
res = Array.from("ABCGAS") // returns an array object from any iterable object
console.log(res);

// Array.keys() // returns an array object with the keys of an array
res = num_arr1.keys();
console.log(...res);

const color = ["red"];
color[1] = "brown";
console.log(color);