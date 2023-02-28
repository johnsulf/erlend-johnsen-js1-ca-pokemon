const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemonCardsContainer = document.querySelector(".pokemon-cards");
const loaderContainer = document.querySelector(".loader-container");

async function fetchPokemon() {
  try {
    for (let i = 0; i < 151; i++) {
      const pokemonResponse = await fetch(url + `${i + 1}`);
      const pokemonDetails = await pokemonResponse.json();

      loaderContainer.style.display = "none";

      const type = pokemonDetails.types[0].type.name;
      const color = setColorFromType(type);

      const html = ` <div class="pokemon-card" style="background-color: ${color}${"90"};">
          <div>
            <div class="top-row">
              <h3 class="name">${pokemonDetails.name}</h3>
              <p class="type">${type}</p>
            </div>
            <div class="img-container">
              <img src="${pokemonDetails.sprites.front_default}">
            </div>
          </div>
          <a class="more-link" href="details.html?id=${
            pokemonDetails.id
          }">More...</a>
          <p></p>
        </div>`;

      pokemonCardsContainer.innerHTML += html;
    }
  } catch (e) {
    console.log(e);
  }
}

fetchPokemon();
