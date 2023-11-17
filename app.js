import { getCountries } from "./getCountries.js";

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const spinner = document.querySelector("#spinner");
const showExerciseBtn = document.querySelector("#exercise");
const main = document.querySelector("main");
const exerciseSection = document.querySelector(".exercise-section");
let infoEl = document.querySelector("#info");

let countries = [];

// 2 options to fetch data: fetch, axios

// CRUD: CREATE, READ, UPDATE, DELETE

// .then version
getCountries().then((data) => {
  countries = data;

  setTimeout(() => {
    spinner.style.display = "none";
  }, 1000);
});

// async/await
// async function fetchData() {
//   const data = await getCountries();

//   console.log(data);
// }

// fetchData();
