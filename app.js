// Hardcoded array of joke objects
// Each joke object has a unique id
const jokes = [
  {
    id: "R7UfaahVfFd",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  },
  {
    id: "x2plLdX",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: "a7Ub0avj0Ba",
    joke: "Why don't skeletons fight each other? They don't have the guts.",
  },
];

// Main function to retrieve and display a new joke
function getAndDisplayNewJoke() {
  const joke = retrieveJoke();
  displayJoke(joke);
}

// Function to retrieve a random joke
function retrieveJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke.joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);
