const detailsContainer = document.querySelector(".details");
const loaderContainer = document.querySelector(".loader-container");
const pageTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://pokeapi.co/api/v2/pokemon/" + id;

let html;

async function fetchPokemon() {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const details = responseJson;

    console.log(details);

    loaderContainer.style.display = "none";

    const height = details.height * 10;
    const weight = details.weight / 10;
    const type = details.types[0].type.name;
    const color = setColorFromType(type);

    html = `<h2 class="name" style="color: ${color}">${details.name}</h2>
            <img src="${details.sprites.front_shiny}">
            <img src="${details.sprites.back_shiny}">
            <p>${height} cm</p>
            <p>${weight} kg</p>`;

    detailsContainer.innerHTML += html;
    pageTitle.text += ` | ${details.name}`.toUpperCase();
  } catch (e) {
    console.log(e);
  }
}

fetchPokemon();
