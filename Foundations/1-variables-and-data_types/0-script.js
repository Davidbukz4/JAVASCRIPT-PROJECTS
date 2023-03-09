// JS Objects & Function
document.addEventListener("DOMContentLoaded", function() {
    const person = {
        firstName:"John", 
        lastName:"Doe", 
        id:31,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    
    document.getElementById("demo").innerHTML = person.fullName();
});
