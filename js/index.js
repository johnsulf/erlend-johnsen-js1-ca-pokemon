const url = "https://pokeapi.co/api/v2/pokemon/";

// query selectors
const pokemonCardsContainer = document.querySelector(".pokemon-cards");
const pokeballContainer = document.querySelector(".pokeball-container");

// pokemonCardsContainer.style.display = "none";
let html = "";

// the main function fetching all 151 Pokémon
async function fetchEmAll() {
  // sometimes the fetchiing takes several seconds - sometimes not. This shows a message to the user that it might take while
  setTimeout(() => { pokeballContainer.innerHTML += `<p>This might take a while...</p>`; }, 2000);

  try {
    // since the url only returns 2 properties per Pokémon, the fetching is done in a for loop where the i variable (+1) is added to the url.
    // this gives all the information I need
    for (let i = 0; i < 151; i++) {
      const res = await fetch(url + `${i + 1}`);
      const details = await res.json();

      const type = details.types[0].type.name;
      const color = setColorFromType(type);

      // populates the HTML with one Pokémon card per Pokémon
      html += `<div class="pokemon-cards__pokemon-card" style="background-color: ${color}">
                  <div class="pokemon-card__top-row capitalize">
                    <h3>${details.name}</h3>
                    <p>${type}</p>
                  </div>
                  <div class="pokemon-card__img-container bg-white">
                    <img src="${details.sprites.other.dream_world.front_default}"; alt="${imageAltText(type, details.name)}">
                  </div>
                <p>#${i + 1}</p>
                <a class="cta bg-white" href="details.html?id=${details.id}">More details</a>
              </div>`;
    }
  } catch (e) {
    html = errorHtml(e);
  } finally {
    pokeballContainer.style.display = "none";
    pokemonCardsContainer.innerHTML = html;
    // pokemonCardsContainer.style.display = "flex";
  }
}

fetchEmAll();
