// Template literals

let text = `Hi David`;

// Multiline strings
text = 
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

// Interpolation
let name = "David Egwuatu";
text = `Welcome ${name}!`
console.log(text);

// Expression substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// JS NUMBERS
let x = 999999999999999; // Integers without a period or exponent notation are accurate up to 15 digits
console.log(x);

// maximum number of decimals is 17

// Numeric string
let num1 = "100"
let num2 = "10"
console.log(num1/num2); // this will perform arithemethic operation
console.log(num1*num2); // this will perform arithemethic operation
console.log(num1-num2); // this will perform arithemethic operation
console.log(num1+num2); // this will not, but will concatenate the values

// NaN - not a number
// it comes up when you perform an arithemetic with a non-numeric string
x = 100 / "cat"; // if the string is numeric, the result will be a number or a concat it a '+' is used
// typeof(NaN) is a number

// Infinity or -Infinity - when you calculate a number outside the largest possible number
num1 = 2;
while (num1 != Infinity){
    num1 = num1 * num1;
}
console.log(num1);
// Division by zero also generates infinity
num1 = 5;
num1 = num1/0;
console.log(num1);
// typeof(Infinity) is a number


// Hexadecimal - a numeric constant preceded by 0x
x = 0xFF;

// to get number from base 2 to 36 using toString
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(10));
console.log(x.toString(12));
console.log(x.toString(16));
console.log(x.toString(32));


// JS as object
x = 123;
y = new Number(123);

// BigInt
x = 999999999999999;
y = 999999999999999n; // to create a BigInt append n to the end of the integer
num1 = 1234567890123456789012345n;
num2 = BigInt(1234567890123456789012345); // or call BigInt
console.log(num1);
console.log(num2);

// Maximum and minimum safe integers
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// check for integers
x = 4;
console.log(Number.isInteger(x)); // returns true is the arg is an integer otherwise false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // returns true if arg is a safe integer


// JS Number methods
x = 5490;
res = x.toString(); // returns a number as a string
console.log(res);
x = 478.080;
res = x.toExponential(5); // returns a string with the number rounded, the arg defines the number of character b4 the decimal point
console.log(res);
res = x.toFixed(2); // specifies number of decimal places
console.log(res);
res = x.toPrecision(4); // specifies number of digits
console.log(res);
x = 234;
res = x.valueOf(); // returns a number as a number
console.log(typeof(res));

// Converting variables to number
num = 98724;
console.log(Number(num)); // returns a number converted from its arg
console.log(parseFloat("1234.087")); // parses a string and returns a floating point number
console.log(parseInt("9024.09")); // parses a string and returns a whole number