"use strict"

// iterables
function myNumbers() {
    let n = 0;
    let done = false
    return {
      next: function() {
        n += 10;
        if (n == 50) {done = true}
        return {value:n, done:done};
      }
    };
  }
  

while(true){
    const x = myNumbers.next();
    if (x.done) {
        break;
    };
    console.log(x.next())
}
