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
  try {
    const res = await fetch(url);
    const details = await res.json();

    console.log(details);

    const height = details.height * 10; // convert from decimeters to centimeters
    const weight = details.weight / 10; // cnovert from hectograms to kilograms
    const type = details.types[0].type.name;
    const color = setColorFromType(type);

    header.innerHTML += `<h1 class="text-black capitalize">${details.name}</h1>
                        <h2 class="text-black">#${details.id}</h2>
                        `;
    header.style.backgroundColor = color;

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
            <p>⚡️ ${capitalizeString(details.moves[2].move.name)} ⚡️</p>
            `;
    pageTitle.text += ` | ${details.name}`.toUpperCase();
  } catch (e) {
    html = errorHtml(e);
  } finally {
    pokeballContainer.style.display = "none";
    detailsContainer.innerHTML += html;
  }
}

fetchPokemon();
