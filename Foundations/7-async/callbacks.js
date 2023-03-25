// using callbacks in JS
function myDisplayer(...text) {
    document.getElementById('demo-1').innerHTML = text[0];
}

function myCalculator (num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer)

// another instance
// create an array
const myNumbers = [3, 1, -6, -9, 34, 21, -3];

// remove neg numbers and pass the array of positive numbers to posNumbers
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// display result
document.getElementById('demo-2').innerHTML = posNumbers;

// keep only positive numbers
function removeNeg(numbers, callback) {
    const newArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            newArray.push(x);
        }
    }
    return newArray;
}