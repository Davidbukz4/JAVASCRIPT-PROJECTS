"use strict";
// Classes

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2014);
console.log(myCar.age());

// JSON
let text = {
    employees: [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Anna', lastName: 'Smith' },
      { firstName: 'Peter', lastName: 'Jones' }
    ]
}
// Convert JS object to JSON string to send to web server
const str = JSON.stringify(text);
console.log(str);

// convert the JSON string to javascript object to display in webpage
const obj = JSON.parse(str);
console.log(obj);