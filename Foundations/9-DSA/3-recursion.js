// RECURSION

// Prints an array
function printArr(arr) {
    if (arr.length) {
        console.log(arr.shift());
        printArr(arr);
        return;
    }
}
// const arr = ['one', 'two', 'three', 'four'];
// printArr(arr);

// Prints an array in reverse
let arrIdx = 0;
function printRev(arr) {
    if (arrIdx <= arr.length - 1) {
        arrIdx++;
        printRev(arr);
        console.log(arr[--arrIdx]);
        return;
    }
}
// printRev(arr);

// Returns the length of string
let l = 0;
function strlen(str) {
    if (str) {
        l = 1 + strlen(str.slice(1,));
        return l;
    } else {
        return 0;
    }
}

// let res = strlen('abcde');
// console.log(res);

// Returns the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    if (num < 0) {
        return -1;
    }
    return (num * factorial(num - 1));
}

// console.log(factorial(-1024));

// Returns the value of x^y
function pow(x, y) {
    if (y) {
        return (x * pow(x, y - 1))
    } else {
        return 1;
    }
}

// let res = pow(-5, 3);
// console.log(res);

// returns the natural square root of a number
function sqroot(num) {
    return checkNum(1, num);
}

function checkNum(x, num) {
    if (x * x === num) {
        return x;
    }
    if (x * x > num) {
        return -1;
    }
    return checkNum(x + 1, num);
}

console.log(sqroot(100));