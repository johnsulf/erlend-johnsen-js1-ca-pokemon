// opacity is added to all colors for better contrast on black text color

function setColorFromType(type) {
  switch (type) {
    case "grass":
      return "#7AC74C90";
    case "water":
      return "#6390F090";
    case "fire":
      return "#EE813090";
    case "bug":
      return "#A6B91A90";
    case "normal":
      return "#A8A77A90";
    case "poison":
      return "#A33EA190";
    case "electric":
      return "#F7D02C90";
    case "ground":
      return "#F7D02C90";
    case "fairy":
      return "#E2BF6590";
    case "fighting":
      return "#C22E2890";
    case "psychic":
      return "#F9558790";
    case "rock":
      return "#B6A13690";
    case "ghost":
      return "#73579790";
    case "ice":
      return "#96D9D690";
    case "dragon":
      return "#6F35FC90";
    default:
      return "#A8A77A90";
  }
}

function tableRow(name, value, bgColor) {
  return `<tr style="background-color: ${bgColor}">
            <td>${name}</td>
            <td>${value}</td>
          </tr>`;
}

function errorHtml(errorDetails) {
  return `<div class="error">
            <p>An error has occured</p>
            <p>Error: ${errorDetails}</p>
          </div>`;
}
