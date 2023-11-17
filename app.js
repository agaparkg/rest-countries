const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const spinner = document.querySelector("#spinner");
const showExerciseBtn = document.querySelector("#exercise");
const main = document.querySelector("main");
const exerciseSection = document.querySelector(".exercise-section");
let infoEl = document.querySelector("#info");

let countries = [];

async function fetchData1() {
  const url = "https://restcountries.com/v3.1/all";

  // async/await

  //   const resp = await fetch(url); // methods: GET, DELETE, PATCH, POST,...
  const resp = await axios.get(url); // methods: GET, DELETE, PATCH, POST,...
  const data = await resp.json();

  console.log(data);
}

// CRUD: CREATE, READ, UPDATE, DELETE

const fetchData2 = async () => {
  const url = "https://restcountries.com/v3.1/all";

  // async/await
  const resp = await fetch(url); // methods: GET, DELETE, PATCH, POST,...
  const data = await resp.json();

  console.log(data);
};

fetchData1();
fetchData2();
