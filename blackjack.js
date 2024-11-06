// BLACK-JACK GAME PROGRAM
let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let playerElName=document.getElementById("player-el-name")

let newCards = document.querySelector("#newCards");




function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if (sum<21) {
        newCards.style.display = "block"
    }
    renderGame()
    handelePlayer()
    

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    if (sum===21) {
        playerElName.style.display="block"
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    } else if (sum>=21) {
        newCards.style.display = "none"
    }
}

/////new feature added section
let playersList = ["Muhammed Jamiu", "Musa", "Hashid", "Abbas", "Abdulhakeem", "Abdulrahim", "Anate", "Khadijat", "Nafisat", "Luqman"]
let amountsList = ["$200", "$170", "$270", "$100", "$360", "$50", "$110", "$200", "$70", "$140"]



function playerDetails() {
    const randomPlayerList = Math.floor(Math.random() * playersList.length);
    const randomAmountList = Math.floor(Math.random() * amountsList.length);

    let activePlayer=playersList[randomPlayerList]
    let activeAmount=amountsList[randomAmountList]
    
    playerEl.textContent = `${activePlayer}`
    playerElName.textContent=`${activeAmount}`
}
playerDetails()


function handelePlayer() {
    if (sum<21) {
        playerEl.style.display="block"
    } else if (sum === 21) {
        playerElName.style.display="block"
    }
}



