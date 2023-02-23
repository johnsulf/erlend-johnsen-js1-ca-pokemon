const detailsContainer = document.querySelector(".details");
const discName = document.querySelector("h2");
const loaderContainer = document.querySelector(".loader-container");
const pageTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://disc-golf-discs.p.rapidapi.com/discs/" + id;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "58a5580a0emsh26e700c04ff0302p1fb426jsn0906db9307f1",
    "X-RapidAPI-Host": "disc-golf-discs.p.rapidapi.com",
  },
};

let html;

async function fetchDisc() {
  try {
    const response = await fetch(url, options);
    const responseJson = await response.json();
    const details = responseJson.disc;

    console.log(details);
    console.log(pageTitle.text);

    loaderContainer.style.display = "none";

    discName.innerHTML = details.name;
    pageTitle.text += ` | ${details.name}`;
  } catch (e) {}
}

fetchDisc();
