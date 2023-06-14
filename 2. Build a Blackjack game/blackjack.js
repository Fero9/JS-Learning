//Variables declaration
let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    playerName: "Franky",
    playerChips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.playerChips
//---------------------------------------------------//
function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1

    if(randomCard === 1){
        return 11
    }
    else if(randomCard === 11 || randomCard === 12 || randomCard === 13)
    {
        return 10
    }
    else{
        return randomCard
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    playGame()
}

function playGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " "
    }

    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false)
    {
        console.log("Drawing a new card from the deck...")
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        playGame()
    }
    else
    {
        console.log("You can no longer draw cards from the deck.")
    }
    
}