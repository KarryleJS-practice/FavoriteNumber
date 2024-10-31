let theFavNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let guess;
let correct = false;

while (!correct) {
  guess = parseInt(prompt("Guess my favorite number (between 1 and 100):"));

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
  } else if (guess < 20) {
    console.log("Too low!");
  } else if (guess > 20) {
    console.log("Too high!");
  } else {
    console.log("Correct! My favorite number is " + 20);
    correct = true;
  }
}
