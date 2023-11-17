import { getCountries } from "./getCountries.js";

const spinner = document.querySelector("#spinner");
const main = document.querySelector("main");
let infoEl = document.querySelector("#info");
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
// const showExerciseBtn = document.querySelector("#exercise");
// const exerciseSection = document.querySelector(".exercise-section");

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
    displayAllCountries(countries);
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

function displayAllCountries(countries) {
  main.innerHTML = "";

  for (let i = 0; i < countries.length; i++) {
    const {
      flags: { png: countryFlag },
      name: { common: countryName },
      ccn3: id,
    } = countries[i];

    let selectedClass = currIndex === i ? "selected" : "";

    const single = `<div class="${selectedClass}">
                        <p><strong>${countryName}</strong></p>
                        <img id="${id}" src="${countryFlag}" alt="country-${id}" />
                    </div>`;

    main.innerHTML += single;
  }

  for (let div of main.children) {
    div.children[1].addEventListener("click", singleCountryClick); // [p, img]
  }
}

function singleCountryClick(e) {
  const id = e.target.id;
  const index = countries.findIndex((country) => country.ccn3 === id);
  const parentDiv = e.target.parentElement;
  currIndex = index;

  const oldSelectedClassEl = document.querySelector(".selected");
  oldSelectedClassEl.classList.remove("selected");
  parentDiv.classList.add("selected");

  displayCountryInfo(countries[currIndex]);
}

prevBtn.addEventListener("click", (e) => {
  console.log(e.target.id);
});

nextBtn.addEventListener("click", (e) => {
  console.log(e.target.id);
});

// async/await
// async function fetchData() {
//   const data = await getCountries();

//   console.log(data);
// }

// fetchData();
