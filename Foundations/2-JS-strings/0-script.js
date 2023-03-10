// JS String property
let text = "qwertyuiop";
let length = text.length;
console.log(`The length is ${length}`);

//JS as objects
let x = "John";
let y = new String("John"); // not recommended to create string object
console.log(typeof(x), typeof(y)); //string and object type is seen

// == and === operator
console.log(x == y);
console.log(x === y);
x = new String("John");
console.log(x === y);

// slice, substring and substr

// slice
let str = "qwertyuiop";
let newStr = str.slice(4, 7); // slice(start, end), end index is not included
// if the second parameter is omitted, it slice out the rest of the string
// if parameter is negative, it counts from the end of the string
console.log(newStr);

// substring
newStr = str.substring(-1, 3); // start and end values less than 0 are treated as zero
console.log(newStr);

// REPLACE
str = "My name is David David";
newStr = str.replace(/David/g, "Chris"); // replace(old, new), it replaces only first match
// use regex g to perform more function, e.g g replaces all matches of David
console.log(newStr);

// REPLACEALL
//newStr = replaceAll("David", "Chris");
console.log(newStr);

// UPPERCASE AND LOWERCASE
newStr = str.toLowerCase(); // to lowercase
console.log(newStr);
newStr = str.toUpperCase(); // to uppercase
console.log(newStr);

// CONCAT
let str1 = "Hi";
let str2 = "Dave";
newStr = str1.concat(" ", str2);// joins str1 and str2
console.log(newStr);

// TRIM
str1 = "  Hello     ";
newStr = str1.trim(); // removes whitespaces from both sides of a string
console.log(newStr);
// trimStart() and trimEnd() removes whitespaces from the start and the end respectively

// String Padding
str1 = 56;
str1 = str1.toString();
newStr = str1.padStart(4, "0"); // padStart(target_len, str)
console.log(newStr);
newStr = str1.padEnd(3, "0");
console.log(newStr);

// Extract String Characters
str = "I will be great";
let ch = str.charAt(7); // returns the character at index 7, it returns an empty string if no character is found
console.log(ch);
ch = str.charCodeAt(7); // returns the unicode of the character at index 7
console.log(ch);
ch = str[7]; // returns the character at index 7, it returns undefined if no character is found
console.log(ch);

// String split
let strArr = str.split(" "); // split(delimiter)
console.log(strArr);

// STRING SEARCH
// indexOf()
let idx = str.indexOf("e", 9); //indexOf(ch, pos_to_start_search), returns the index of first occurence of the character. it searches from beginning to end
console.log(idx);
idx = str.lastIndexOf("e", 10); // lastIndexOf(ch, pos_to_begin_search), returns the index of the last occurence of the character. It searches from end to beginning
console.log(idx);

// search()
idx = str.search("i"); // returns the position of the match, it can take regex
console.log(idx);
// match()
str = "The rain in SPAIN stays mainly in the plain";
strArr = str.match("ain"); // returns an array of result of match, returns null if thers's no match
console.log(strArr);
strArr = str.match(/ain/gi);
console.log(strArr)
strArr = str.matchAll(/ain/gi); // returns an iterator of all matches
console.log(Array.from(strArr));

// includes()
let res = str.includes("stays"); // includes(str_to_check, pos_to_start_search), returns true if it contains the str
console.log(res);

// startsWith()
res = str.startsWith("The"); // startsWith(str, pos_to_begin_search) returns true or false if a string starts with a specified value
console.log(res);

// endsWith()
res = str.endsWith("rain", 8); // endsWith(str, pos_to_begin_search) returns true or false if a string ends with a specified value
console.log(res);