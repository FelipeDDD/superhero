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

const getNewHero = document.getElementById("newHeroButton");
const savedHero = document.getElementById("imgHero");

// getNewHero.onclick = () => {getSuperHero(randomNumber(1,733));}

const BASE_URL = `https://superheroapi.com/api.php/8349c73eccc2c3fc6b1dc8a40ee79359/`;

const getSuperHero = (id) => {
    savedHero.style.display= "block";
    savedHero.style.width = "400px";
    savedHero.style.height = "400px";
    
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
    //    document.querySelector("body").innerHTML += `<img src="${json.image.url}" height=400 width=400/>`;
      savedHero.src = json.image.url;
    });
};
// console.log(getSuperHero(randomNumber(1,733)));

function randomNumber(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  const roundedNumber = Math.floor(randomNumber);
  return roundedNumber;
}

function functionSeparada() {
  savedHero.style.display = "block";
  getSuperHero(randomNumber(1, 733));
}

getNewHero.addEventListener("click", functionSeparada);
