// Define the correct number to be guessed 
let correctNumber = 5; 
let guess; 

// Keep asking until the user guessed correctly
while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}