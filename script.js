let btn = document.getElementById("btn");
let jokeText = document.getElementById("joke");
let name = document.getElementById("name");
var fNameText = document.getElementById("fName");
var lNameText = document.getElementById("lName");


btn.addEventListener("click", function () {
  fetchJoke();
});

async function fetchJoke() {
  const response = await fetch(
    `https://api.icndb.com/jokes/random?firstName=${fNameText.value}&lastName=${lNameText.value}`
  );
  const movies = await response.json();
  jokeText.innerText = movies.value.joke;
  //   console.log(this.name);
}