// STEP 1: Print text to the browser console

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Juho";
let age = 25;
const favoriteAnimal = "Blue Elephant";

// Print the variables to the console
console.log("My name is " + userName);
console.log("My age is " + age);
console.log("My favorite animal is " + favoriteAnimal);

// Sentence using the variables
console.log("Hello! My name is " + userName + " and my favourite animal is the " + favoriteAnimal + ".");

// STEP 3: User interaction
// Display a pop-up message
alert("Tervetuloa hienolle nettisivylleni!");

// Ask the user for their name
const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log(visitorName);
console.log("Terve " + visitorName + "! Tervetuloa JavaScript-pajaan!");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// BONUS: compare favorite animal to "Blue Elephant"
if (visitorFavoriteAnimal === "Blue Elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}

// STEP 4: Conditionals - age check
const visitorAge = prompt("Kuinka vanha olet?");

if (Number(visitorAge) >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// STEP 5: Functions

function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser(userName);
greetUser("John");
greetUser("Maria");

// STEP 6: Button - connect JavaScript to the page
const greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click", function () {
    alert("JavaScript works!");
});
