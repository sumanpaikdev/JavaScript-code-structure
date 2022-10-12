let numberCardArray = []
let sum = 0

let Blackjack = false
let online = false

let printMessage = document.getElementById("description")
let cardElement = document.getElementById("cardNumber")
let sumElement = document.getElementById("sum")

// console.log(numberCardArray)
let bids = {
    name: "Mr. Black Jack:",
    count: 200
}
let MoneyInput = document.getElementById("amountCard")
MoneyInput.textContent = bids.name + " $"+ bids.count

function getRandomCard() {
    let randNumber = Math.floor(Math.random() * 13) + 1

    if (randNumber > 10) {
        return 10
    } else if (randNumber === 1) {
        return 11
    } else {
        return randNumber
    }
}

function renderGame() {

    cardElement.textContent = "Cards: "
    for (let i = 0; i < numberCardArray.length; i += 1) {
        cardElement.textContent += numberCardArray[i] + " "
    }

    sumElement.textContent = "Sum : " + sum

    if (sum < 21) {
        printMessage.textContent = "Draw a new card?"
    } else if (sum === 21) {
        printMessage.textContent = "You have got Blackjack!"
        Blackjack = true
    } else {
        printMessage.textContent = "You are out of the game."
        online = false
    }
}


function startGame() {
    online = true
    let one = getRandomCard()
    let two = getRandomCard()
    numberCardArray = [one, two]
    sum = one + two
    renderGame()
}

function updateGame() {

    if (Blackjack === false && online === true) {
        let three = getRandomCard()
        numberCardArray.push(three)
        sum += three
        renderGame()
    }
}