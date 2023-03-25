"use strict";
// Create a javascript object

// using object literal: define and create an object in one statement
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// new keyword
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

const x = person2; // x and person now references the same object
console.log(x.firstName);

// accessing JS properties
console.log(person2.lastName);
console.log(person2["age"]);

// Nested object
const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  };
// access nested object
console.log(myObj.cars.car1);
console.log(myObj["cars"]["car3"]);

for (let i in person2){
    console.log(person2[i]); // returns the keys
}

// convert JS object values to array
const my_array = Object.values(myObj);
console.log(my_array);

const person3 = {
    name: "John",
    age: function () {return 30;}
  };

// functions cannot be stringified
// convert to string first before using stringify
person3.age = person3.age.toString();
let myStr = JSON.stringify(person3);
console.log(myStr);

// stringify arrays
const arr = ["John", "Peter", "Sally", "Jane"];


// JS getters and setters
// makes object methods to be accessed using objectName.property
// and no longer objectName.property()

// setter
const person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(value) {
        this.language = value;
    }
};
person4.lang = "en";
console.log(person4.language);


// getter can be used instead of function
const person5 = {
    firstName: "David",
    lastName: "Egwuatu",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person5.fullName);

// Object.defineProperty()

// define object
const obj = {counter: 0};

// define setters and getters
Object.defineProperty(obj, "reset", {
    get : function(){this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function(){this.counter++;}
});
Object.defineProperty(obj, "add", {
    set : function(value){this.counter += value;}
});
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.add = 5;
console.log(obj.counter);