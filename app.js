// Hardcoded array of joke objects
// Each joke object has a unique id

const url = "https://icanhazdadjoke.com"

async function fetchJoke() {

const response = await fetch(url, {
  headers: {
    Accept: "application/json", 
  },
});

if (!response.ok) {
   console.error(response.status);
   console.error(response.text());
   return;
}
const data = await response.json();

console.log(data.joke);
const jokeElement = document.getElementById("joke");
jokeElement.textContent = data.joke;
}


// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", fetchJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", fetchJoke);

// We have every joke used printed in console.log
// Get console.logged jokes and display them in a scrollable window called history
