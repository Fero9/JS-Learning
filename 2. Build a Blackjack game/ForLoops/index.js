for(let i = 10; i < 101; i += 10)
{
    console.log(i + "\n")
}

let message = [
    "Hello, this is the first message",
    "This is the second message",
    "This is the third message",
    "This is the final message",
    "Nah, this one's the final one\n"
]

for(let i = 0; i < message.length; i++)
{
    console.log(message[i])
}

let cards = [7, 3, 9]
for(let i = 0; i < cards.length; i++)
{
    console.log(cards[i])
}

/*
let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for(let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i]
}
*/

let player1Time = 102
let player2Time = 107

function getTime(){
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

function getTotalTime(){
    return player1Time + player2Time
}

let totalTime = getTotalTime()
console.log(totalTime)

let randomNumber = Math.random() * 6
console.log(randomNumber)

let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)