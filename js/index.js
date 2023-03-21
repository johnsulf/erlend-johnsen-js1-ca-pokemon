const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemonCardsContainer = document.querySelector(".pokemon-cards");
const pokeballContainer = document.querySelector(".pokeball-container");

pokemonCardsContainer.style.display = "none";
let html = "";

async function fetchPokemon() {
  // sometimes the fetchiing takes several seconds - sometimes not. This shows a message to the user that it might take while
  setTimeout(() => { pokeballContainer.innerHTML += `<p>This might take a while...</p>`; }, 2000);

  try {
    for (let i = 0; i < 151; i++) {
      const pokemonResponse = await fetch(url + `${i + 1}`);
      const pokemonDetails = await pokemonResponse.json();

      const type = pokemonDetails.types[0].type.name;
      const color = setColorFromType(type);

      html += `<div class="pokemon-cards__pokemon-card" style="background-color: ${color}">
                  <div class="pokemon-card__top-row capitalize">
                    <h3>${pokemonDetails.name}</h3>
                    <p>${type}</p>
                  </div>
                  <div class="pokemon-card__img-container">
                    <img src="${pokemonDetails.sprites.other.dream_world.front_default}">
                  </div>
                <p>#${i + 1}</p>
                <a class="cta bg-white" href="details.html?id=${pokemonDetails.id}">More details</a>
              </div>`;
    }
  } catch (e) {
    html = `<div class="error">
              <p>An error has occured</p>
              <p>Error: ${e}</p>
            </div>`;
  } finally {
    pokeballContainer.style.display = "none";
    pokemonCardsContainer.innerHTML = html;
    pokemonCardsContainer.style.display = "flex";
  }
}

fetchPokemon();
