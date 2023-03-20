const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemonCardsContainer = document.querySelector(".pokemon-cards");
const pokeballContainer = document.querySelector(".pokeball-container");

pokemonCardsContainer.style.display = "none";
let html = "";

async function fetchPokemon() {
  setTimeout(() => {
    pokeballContainer.innerHTML += `<p>This might take a while...</p>`;
  }, 2000);
  try {
    for (let i = 0; i < 151; i++) {
      const pokemonResponse = await fetch(url + `${i + 1}`);
      const pokemonDetails = await pokemonResponse.json();

      const type = pokemonDetails.types[0].type.name;
      const color = setColorFromType(type);

      html += `<div class="pokemon-card" style="background-color: ${color}${"90"};">
                <div>
                  <div class="top-row">
                    <h3 class="name">${pokemonDetails.name}</h3>
                    <p class="type">${type}</p>
                  </div>
                  <div class="img-container">
                    <img src="${pokemonDetails.sprites.front_default}">
                  </div>
                </div>
                <p>#${i + 1}</p>
                <a class="more-link" href="details.html?id=${
                  pokemonDetails.id
                }">More</a>
                <p></p>
              </div>`;
    }
  } catch (e) {
    html = `<div class="error">
              <p>An error has occured</p>
              <p>Error: ${e}</p>
            </div>`;
  } finally {
    pokeballContainer.style.display = "none";
    pokemonCardsContainer.style.display = "flex";
    pokemonCardsContainer.innerHTML = html;
  }
}

fetchPokemon();
