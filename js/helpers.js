// returns the color of the pokemon type. opacity is added to all colors for better contrast on black text color
// i've found the colors here: https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
function setColorFromType(type) {
  const typeColors = {
    grass: "#7AC74C90",
    water: "#6390F090",
    fire: "#EE813090",
    bug: "#A6B91A90",
    normal: "#A8A77A90",
    poison: "#A33EA190",
    electric: "#F7D02C90",
    ground: "#F7D02C90",
    fairy: "#E2BF6590",
    fighting: "#C22E2890",
    psychic: "#F9558790",
    rock: "#B6A13690",
    ghost: "#73579790",
    ice: "#96D9D690",
    dragon: "#6F35FC90"
  };

  return typeColors[type];
}

// capitalizes the first letter of a string. Helpful when f.ex. a name comes in the end of a sentence.
function capitalizeString(string) {
  return `${(string).charAt(0).toUpperCase() + (string).slice(1)}`
}

// displayes a standardized alt text to the images, with the type and the name of the Pokémon being dynamic
function imageAltText(type, name) {
  return `Colorful, classic drawing of the ${type}-pokémon ${capitalizeString(name)}`
}

// creates a table row with pokemon details
function tableRow(name, value, bgColor) {
  return `<tr style="background-color: ${bgColor}">
            <td>${name}</td>
            <td>${value}</td>
          </tr>`;
}

// error message. Can also display additional information about the error if needed
function errorHtml(errorDetails = "") {
  return `<div class="error"; style="display: block">
            <p>An error has occured</p>
            <p>Error: ${errorDetails}</p>
          </div>`;
}

// validates the input based on length. Adds a red border and a red error text if the test fails. returns true or false
function validateInput(errorId, inputId, len) {
  const isValid = inputId.value.trim().length > len;
  errorId.style.display = isValid ? "none" : "block";
  inputId.style.border = isValid ? "1px solid black" : "2px solid red";
  return isValid;
}

// same as validateInput, but checks if the input has an email pattern
function validateEmail(errorId, email) {
  const regEx = /\S+@\S+\.\S+/;
  const hasEmailPattern = regEx.test(email.value);
  errorId.style.display = hasEmailPattern ? "none" : "block";
  email.style.border = hasEmailPattern ? "1px solid black" : "2px solid red";
  return hasEmailPattern;
}

// listens for input and checks if the validation rules are met on every input. If validation passes, the red border and text get removed
function updateErrorOnInput(inputId, errorId, minLength) {
  inputId.addEventListener('input', () => {
    const isValid = inputId.value.trim().length > minLength;
    errorId.style.display = isValid ? 'none' : 'block';
    inputId.style.border = isValid ? '1px solid black' : '2px solid red';
  });
}

// same as updateErrorOnInput, but checking if the input has an email pattern
function updateEmailErrorOnInput(errorId, email) {
  const regEx = /\S+@\S+\.\S+/;
  email.addEventListener('input', () => {
    const hasEmailPattern = regEx.test(email.value);
    errorId.style.display = hasEmailPattern ? 'none' : 'block';
    email.style.border = hasEmailPattern ? '1px solid black' : '2px solid red';
  });
}
