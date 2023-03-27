const contactForm = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const nameInputError = document.querySelector("#nameError");

const subjectInput = document.querySelector("#subject");
const subjectInputError = document.querySelector("#subjectError");

const addressInput = document.querySelector("#address");
const addressInputError = document.querySelector("#addressError");

const successMessage = document.querySelector(".success");

function validateForm(event) {
    event.preventDefault();

    successMessage.style.display = "none";

    validateInput(nameInputError, nameInput, 0);
    validateInput(subjectInputError, subjectInput, 9);
    validateInput(addressInputError, addressInput, 24);

    if (validateInput(nameInputError, nameInput, 0) === true && validateInput(subjectInputError, subjectInput, 9) === true && validateInput(addressInputError, addressInput, 24) === true) {
        successMessage.style.display = "block";
        nameInput.value = "";
        subjectInput.value = "";
        addressInput.value = "";
    }


}

contactForm.addEventListener("submit", validateForm);

