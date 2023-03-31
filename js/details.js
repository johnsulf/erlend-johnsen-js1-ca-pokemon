// query selectors
const detailsContainer = document.querySelector(".details");
const pokeballContainer = document.querySelector(".pokeball-container");
const header = document.querySelector("header");
const pageTitle = document.querySelector("title");

// querystring variables
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://pokeapi.co/api/v2/pokemon/" + id;

let html = "";

// the main function for fetching information about the Pokémon the user has tapped
async function fetchPokemon() {
  try {
    const res = await fetch(url);
    const details = await res.json();

    // the api returns height and weight in decimeters and hectograms
    const height = details.height * 10; // convert from decimeters to centimeters
    const weight = details.weight / 10; // cnovert from hectograms to kilograms

    // sets the colors of the page
    const type = details.types[0].type.name;
    const color = setColorFromType(type);

    // populates and sets background color of the header
    header.innerHTML += `<h1 class="text-black capitalize">${details.name}</h1>
                        <h2 class="text-black">#${details.id}</h2>`;

    header.style.backgroundColor = color;

    // the HTML is written using backticks. There are multible helperfunctions used here for less repeating of code and better readability
    html = `<div class="pokemon-card__img-container" style="background-color: ${color}">
              <img src="${details.sprites.other.dream_world.front_default}" alt="${imageAltText(type, details.name)}">
            </div>
            <table>
              <caption>
                <h3>Stats</h3>
              </caption>
              <tbody>
                ${tableRow("HP", details.stats[0].base_stat, color)}
                ${tableRow("Attack", details.stats[1].base_stat)}
                ${tableRow("Defense", details.stats[2].base_stat, color)}
                ${tableRow("Speed", details.stats[5].base_stat)}
              </tbody>
            </table>
            <table>
              <caption>
                <h3>Apparance</h3>
              </caption>
              <tbody>
                ${tableRow("Height", height + " cm", color)}
                ${tableRow("Weight", weight + " kg")}
              </tbody>
            </table>
            <h3>Top Moves</h3>
            <p>💥 ${capitalizeString(details.moves[0].move.name)} 💥</p>
            <p>🌪 ${capitalizeString(details.moves[1].move.name)}  🌪</p>
            <p>⚡️ ${capitalizeString(details.moves[2].move.name)} ⚡️</p>`;

    // puts the name of the pokemon in the pages title
    pageTitle.text += ` | ${details.name}`.toUpperCase();
  } catch (e) {
    // stanardized errortext in a red box
    html = errorHtml(e);
    header.innerHTML += `<h1>Oops...</h1>`;
  } finally {
    // the loader is hidden and html - either information about the Pokémon or the error text is displayed
    pokeballContainer.style.display = "none";
    detailsContainer.innerHTML += html;
  }
}

fetchPokemon();
