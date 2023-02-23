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

      const html = `<a class="pokemon-card" style="background-color: ${color};" href="details.html?id=${
        pokemonDetails.id
      }">
                <h3 class="name">#${i + 1}: ${pokemonDetails.name}</h3>
                <img class="image" style="background-color: ${color}" src="${
        pokemonDetails.sprites.front_default
      }">
                <p class="type">${type}</p>
              </a>`;

      pokemonCardsContainer.innerHTML += html;
    }
  } catch (e) {
    console.log(e);
  }
}

fetchPokemon();
