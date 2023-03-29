
// query selectors
const contactForm = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const nameInputError = document.querySelector("#nameError");

const subjectInput = document.querySelector("#subject");
const subjectInputError = document.querySelector("#subjectError");

const addressInput = document.querySelector("#address");
const addressInputError = document.querySelector("#addressError");

const emailInput = document.querySelector("#email");
const emailInputError = document.querySelector("#emailError");

const successMessage = document.querySelector(".success");

// variable that keeps track of it is the first attempt to submit the form
let submitButtonPressed = false;


function validateForm(event) {
    // preventDefault() to not submit the form initially
    event.preventDefault();

    // this says that there has been an attmept on submitting the form
    submitButtonPressed = true;

    // helper functions that validates each input field. each one returns true if the check is passed
    const nameValid = validateInput(nameInputError, nameInput, 0);
    const subjectValid = validateInput(subjectInputError, subjectInput, 9);
    const addressValid = validateInput(addressInputError, addressInput, 24);
    const emailValid = validateEmail(emailInputError, emailInput);

    // final validation that shows success message and clears the input fields
    if (nameValid && subjectValid && addressValid && emailValid) {
        successMessage.style.display = "block";
        nameInput.value = "";
        subjectInput.value = "";
        emailInput.value = "";
        addressInput.value = "";
    }

    // helper functions that remove the error text and red border as the user types if the input passes validation
    if (submitButtonPressed) {
        updateErrorOnInput(nameInput, nameInputError, 0);
        updateErrorOnInput(subjectInput, subjectInputError, 9);
        updateErrorOnInput(addressInput, addressInputError, 24);
        updateEmailErrorOnInput(emailInputError, emailInput);
    }
}

// submitting the form fires the validateForm function
contactForm.addEventListener("submit", validateForm);


