const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// variables
const fName = document.getElementById('FirstName')
const lName = document.getElementById('LastName')
const email = document.getElementById('EmailAddress')
const password = document.getElementById('Password')

const fNameError = document.getElementById('ferrorMessage')
const lNameError = document.getElementById('lerrorMessage')
const emailError = document.getElementById('emailerrorMessage')
const passwordError = document.getElementById('passerrorMessage')

function fNameCheck() {

    if (fName.value === "") {
        fName.style.outline = '1px solid #FF7A7A'
        fName.style.backgroundImage = 'url(/Intro-component-with-sign-up-form/images/icon-error.svg)';
        fNameError.style.display = 'block'
    }
    else {
        fName.style.outline = ''
        fName.style.backgroundImage = '';
        fNameError.style.display = 'none'

    }

}
function lNameCheck() {
    if (lName.value === "") {
        lName.style.outline = '1px solid #FF7A7A'
        lName.style.backgroundImage = 'url(/Intro-component-with-sign-up-form/images/icon-error.svg)';
        lNameError.style.display = 'block'

    } else {
        lName.style.outline = ''
        lName.style.backgroundImage = '';
        lNameError.style.display = 'none'

    }
}
function emailCheck() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email.value);

    if (!isValidEmail || email.value === "") {
        email.style.outline = '1px solid #FF7A7A'
        email.style.backgroundImage = 'url(/Intro-component-with-sign-up-form/images/icon-error.svg)';
        emailError.style.display = 'block'

    } else {
        email.style.outline = ''
        email.style.backgroundImage = '';
        emailError.style.display = 'none'

    }
}
function passwordCheck() {
    if (password.value === "") {
        password.style.outline = '1px solid #FF7A7A'
        password.style.backgroundImage = 'url(/Intro-component-with-sign-up-form/images/icon-error.svg)';
        passwordError.style.display = 'block'
    } else {
        password.style.outline = ''
        password.style.backgroundImage = '';
        passwordError.style.display = 'none'
    }
}

