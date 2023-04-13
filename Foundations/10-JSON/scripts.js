// Object as JSON
// const text = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(text);
// console.log(obj);

// Array as JSON
// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const obj = JSON.parse(text);
// console.log(obj);

// Parsing Dates
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth)

// or use a reviver parameter to check values
const obj = JSON.parse(text, (key, value) => {
    if (key === "birth") {
        return new Date()
    } else {
        return value;
    }
})
console.log(obj)

// Parsing function
const text1 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj1.age = eval("(" + obj1.age + ")") // parentheses is required to create an  expression that can be evaluated as a function
console.log(obj1.age())

// Stringify javascript object
const obj2 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj2)
console.log(myJSON)

// Strinngify javascript array
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON1 = JSON.stringify(arr)
console.log(myJSON1)

// Storing data
const myJSON2 = JSON.stringify(obj2);
localStorage.setItem("testJSON", myJSON2);
// retrieving
let text2 = localStorage.getItem("testJSON")
let obj3 = JSON.parse(text2);
document.getElementById("demo").innerHTML = obj3.name;


// Stringify dates
const obj4 = {name: "John", today: new Date(), city : "New York"};
const myJSON3 = JSON.stringify(obj4);
document.getElementById("demo1").innerHTML = myJSON3;

// Stringify function
const obj5 = {name: "John", age: function () {return 30;}, city: "New York"};
obj5.age = obj5.age.toString();
const myJSON4 = JSON.stringify(obj5)
document.getElementById("demo1").innerHTML = myJSON4;