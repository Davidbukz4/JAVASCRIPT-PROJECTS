// get the input fields
const fnameField = document.getElementById('first-name');
const lnameField = document.getElementById('last-name');
const countryField = document.getElementById('country');
const commentField = document.getElementById('text-box');

document.getElementsByClassName('reg-form').addEventListener('submit', e => {
    e.preventDefault();
    
    validateFORM()
})


function validateFORM() {  
    const fName = fnameField.value.trim()
    const lName = lnameField.value.trim()
    const country = countryField.value.trim()
    const comment = commentField.value.trim()

    if (fName == '') {
        // show error
        // add error class
        throwError(fName, 'Input first name')
    } else {
        // add success class
        success(fName)
    }

    function throwError(input, message) {
        
    }


    
    



    // add event listeners
    function validateFNAME() {
        if (fnameField.value == "") {
            fnameField.setCustomValidity('Please input first name');
        } else {
            fnameField.setCustomValidity('');
        }
    }
    
    function validateLNAME() {
        if (lnameField.validity.valueMissing) {
            lnameField.setCustomValidity('Please input first name');
        } else {
            lnameField.setCustomValidity('');
        }
    }
    
    function validateCOUNTRY() {
        if (countryField.validity.valueMissing) {
            countryField.setCustomValidity('Please select a country')
        } else {
            countryField.setCustomValidity('')
        }
    }
    
    function validateCOMMENT(){
        if (commentField.validity.valueMissing) {
            commentField.setCustomValidity('Please input profile summary')
        }
    }
}