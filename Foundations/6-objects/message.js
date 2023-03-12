"use strict";
// module
function message(){
    return "This message was imported."
}
const name = "David";
export const age = 33; // inline export can be done also

// named export are constructed using braces
export {name};
// default export are not
export default message;