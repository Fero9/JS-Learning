let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
    
}

function startGame(){
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
    console.log("Drawing a new card from the deck")
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    playGame()
}