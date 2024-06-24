// const catImg = document.getElementById("gato")
// const btn = document.getElementById("catButton")

// function vaiGato() {
//     fetch("https://dog.ceo/api/breeds/image/random")

//     .then(response => response.json())
//     .then(json => { console.log(json.message)
//     catImg.innerHTML = `<img src= "${json.message}" height=600px width=600/>`
// })
// }
// btn.onclick = () => vaiGato()

// https://superheroapi.com/api/8349c73eccc2c3fc6b1dc8a40ee79359
// randomHero.onclick = () => {getSuperHero(randomNumber(1,733));}

const randomHero = document.getElementById("newHeroButton");
const imgHero = document.getElementById("imgHero");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const heroName = document.getElementById("heroName");
// const str = document.getElementById("strenghtDiv");
// const speed = document.getElementById("speedDiv");

const BASE_URL = `https://superheroapi.com/api.php/8349c73eccc2c3fc6b1dc8a40ee79359/`;

const randomSuperHero = (id) => {
  // savedHero.style.display= "block";
  // savedHero.style.width = "500px";
  // savedHero.style.height = "500px";
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      // savedHero.src = json.image.url;
      // heroName.textContent = json.name;
      // str.textContent = "Strength:" + "  " + json.powerstats.strength;
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" height=500 width=500/>`;
  const pau = `<p>🍆 BELUGA: ${Math.floor(Math.random() * 20 + 1)}CM</p>`;

  const stats = Object.keys(character.powerstats).map((stat) => {

      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join("");
  imgHero.innerHTML = `${name}${img}<h3>${stats}${pau}</h3>`;
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "🏃",
  durability: "🔋",
  power: "🏋️",
  combat: "⚔️",
};
const searchSuperHero = (name) => {
  // imgHero.style.display= "block";
  // imgHero.style.width = "500px";
  // imgHero.style.height = "500px";
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      // imgHero.src = json.results[0].image.url;
      // heroName.textContent = json.results[0].name;
      const superHero = json.results[0];
      //imgHero.style.display = "block";
      showHeroInfo(superHero);

      // str.textContent = "Strength:" + "  " + json.results[0].powerstats.strength;
      // speed.textContent = "Speed:" + "  " + json.results[0].powerstats.speed;
      // piroca.textContent = "Tamanho do pau:" + " " + Math.floor(Math.random() * 20)
    });
};
function randomNumber(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  const roundedNumber = Math.floor(randomNumber);
  return roundedNumber;
}
function functionSeparada() {
  randomSuperHero(randomNumber(1, 733));
  imgHero.style.display = "block";
}
function searchHero() {
  const inputValue = searchInput.value;
  searchSuperHero(inputValue);
}

randomHero.addEventListener("click", functionSeparada);
searchButton.addEventListener("click", searchHero);
