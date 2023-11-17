import { getCountries } from "./getCountries.js";

const spinner = document.querySelector("#spinner");
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const showExerciseBtn = document.querySelector("#exercise");
const main = document.querySelector("main");
const exerciseSection = document.querySelector(".exercise-section");
let infoEl = document.querySelector("#info");

let countries = [];
let currIndex = 0;

// 2 options to fetch data: fetch, axios

// CRUD: CREATE, READ, UPDATE, DELETE

// .then version
getCountries().then((data) => {
  countries = data;

  setTimeout(() => {
    spinner.style.display = "none";
    infoEl.style.display = "flex";
    displayCountryInfo(countries[currIndex]);
  }, 1000);
});

function displayCountryInfo(country) {
  const {
    capital,
    region,
    currencies,
    population,
    name: { common },
    flags: { png },
  } = country;

  const firstCurr = Object.keys(currencies)[0];

  infoEl.innerHTML = `
          <img src="${png}" alt="" />
          <p>Country: <strong>${common}</strong></p>
          <p>Population: <strong>${population.toLocaleString()}</strong></p>
          <p>Capital city: <strong>${capital[0]}</strong></p>
          <p>Region: <strong>${region}</strong></p>
          <p>Currency: <strong>1 USD = ? ${firstCurr}</strong></p>
        `;
}

// async/await
// async function fetchData() {
//   const data = await getCountries();

//   console.log(data);
// }

// fetchData();
