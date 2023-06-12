// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEL = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let userName = "Franky"
let greeting = "Welcome to the page"
// Render the welcome message using welcomeEl.innerText
welcomeEL.innerText = greeting + ", " + userName
