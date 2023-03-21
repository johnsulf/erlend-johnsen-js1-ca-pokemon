const detailsContainer = document.querySelector(".details");
const pokeballContainer = document.querySelector(".pokeball-container");
const header = document.querySelector("header");
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

    header.innerHTML += `<h1 class="text-black capitalize">${details.name}</h1>`;
    header.style.backgroundColor = color;

    html = `<img src="${details.sprites.other.dream_world.front_default}">
            <h3>Stats</h3>
            <p style="color: red;">${details.stats[0].base_stat} HP</p>
            <p>Attack: ${details.stats[1].base_stat}</p>
            <p>Defense: ${details.stats[2].base_stat}</p>
            <p>Speed: ${details.stats[5].base_stat}</p>
            <h3>Top Moves</h3>
            <p class="capitalize">${details.moves[0].move.name}</p>
            <p class="capitalize">${details.moves[1].move.name}</p>
            <p class="capitalize">${details.moves[2].move.name}</p>
            <h3>Apparance</h3>
            <p>${height} cm</p>
            <p>${weight} kg</p>`;

    detailsContainer.innerHTML += html;
    pageTitle.text += ` | ${details.name}`.toUpperCase();
  } catch (e) {
    console.log(e);
  }
}

fetchPokemon();
