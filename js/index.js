const url = "https://pokeapi.co/api/v2/pokemon/"; // main URL
const offsetAndLimit = "?offset=0&limit=150"; // setting to only fetch the original 150 Pokémon

const discContainer = document.querySelector(".discs");
const loaderContainer = document.querySelector(".loader-container");

let html;

async function fetchPokemon() {
  const response = await fetch(url + offsetAndLimit);
  const results = await response.json();
  const pokemon = results.results;

  for (let i = 0; i < pokemon.length; i++) {
    const pokemonResponse = await fetch(url + `${i + 1}`);
    const pokemonDetails = await pokemonResponse.json();

    html = `<a class="disc" href="details.html?id=${pokemonDetails.id}">
                <h3 class="name">${pokemonDetails.name}</h3>
                <p class="manufacturer">${pokemonDetails.id}</p>
                <p class="max-weight">${pokemonDetails.weight}</p>
                <img src="${pokemonDetails.sprites.front_default}"
              </a>`;

    discContainer.innerHTML += html;
  }
}

fetchPokemon();
