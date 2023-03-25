function myFunction (a, b) {
    return a * b;
  }

let text = myFunction.toString();
console.log(text)

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  
  // This will return [object Object] (the owner object)
  console.log(myObject.fullName())



// call method
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1, "Oslo", "Norway"))