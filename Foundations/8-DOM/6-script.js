function validateForm() {
    let firstName = document.forms['reg-form']['first-name'].value;
    let lastName = document.forms['reg-form']['last-name'].value;
    let country = document.getElementById('country').value;
    let summary = document.forms['reg-form']['text-box'].value;

    if (firstName == "") {
        alert('First Name must be filled out');
        return false;
    }
    if (lastName == "") {
        alert('Last Name must be filled out');
        return false;
    }
    if (country == "") {
        alert('Please select a country');
        return false;
    } else { console.log(country)}
    if (summary == "") {
        alert('Please input your profile summary');
        return false;
    }
}