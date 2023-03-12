"use strict";
// this keyword
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
};

const person2 = {
    firstName: "David",
    lastName: "Egwuatu"
}

//let res = person1.fullName.call(person2); // it calls person1 object method and passes person2 object parameter
console.log(res); // it returns the fullname
let res = person1.fullName.bind(person2);
console.log(res()); // it returns the method


// Arrow function: allows us write shorter function syntax
// if it has one statement it's ok to remove the brackets and return keyword
let func_name = (arg) => code;
