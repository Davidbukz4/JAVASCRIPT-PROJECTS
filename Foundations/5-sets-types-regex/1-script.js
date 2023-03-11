// JS Regex: mostly used with search() and replace()

// search()
// Syntax - /pattern/modifiers
let text = "visIt My Portfolio!";
let res = text.search("visit");
console.log(res);
// with regex
console.log(text.search(/my/i)); // i flag does a case insensitive search


// replace()
res = text.replace("My", "MY");
console.log(res);
// with regex
console.log(text.replace(/visit/i, "check out"));


// using test(): it searches a string for a pattern
const pattern = /are/;
console.log(pattern.test("So you are looking for a backend dev?")); // it returns true


// using exec(): it searches a string for a pattern but returns the found text as an object
const pattern1 = /e/g;
console.log(pattern.exec("So you are looking for a backend dev?"));
