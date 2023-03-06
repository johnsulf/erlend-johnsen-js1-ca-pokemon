const detailsContainer = document.querySelector(".details");
const pokeballContainer = document.querySelector(".pokeball-container");
const pageTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://pokeapi.co/api/v2/pokemon/" + id;

let html;

async function fetchPokemon() {
  pokeballContainer.style.display = "block";
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const details = responseJson;

    console.log(details);

    pokeballContainer.style.display = "none";

    const height = details.height * 10; // convert from decimeters to centimeters
    const weight = details.weight / 10; // cnovert from hectograms to kilograms
    const type = details.types[0].type.name;
    const color = setColorFromType(type);

    html = `<h2 class="name" style="color: ${color}">${details.name}</h2>
            <img src="${details.sprites.front_shiny}">
            <img src="${details.sprites.back_shiny}">
            <p style="color: red;">${details.stats[0].base_stat} HP</p>
            <p>Attack: ${details.stats[1].base_stat}</p>
            <p>Defense: ${details.stats[2].base_stat}</p>
            <p>Speed: ${details.stats[5].base_stat}</p>
            <p>${height} cm</p>
            <p>${weight} kg</p>`;

    detailsContainer.innerHTML += html;
    pageTitle.text += ` | ${details.name}`.toUpperCase();
  } catch (e) {
    console.log(e);
  }
}

fetchPokemon();
