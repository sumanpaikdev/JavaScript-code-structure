// let firstCard = 11
// let secondCard =11
// let sum = firstCard + secondCard
// let stateValue = false
// let goForward = true

// let randNum1 = Math.floor(Math.random() * 12);
// let randNum2 = Math.floor(Math.random() * 12);
// let sum = randNum1 + randNum2;
// console.log(randNum1)
// console.log(randNum2)

// console.log(stateValue)
// console.log(goForward)
// console.log(randNum1)
// console.log(randNum2)
// console.log(sum)

        // console.log("Do you want to draw a new card? 🙂")
        // console.log("Wohoo! You've got Blackjack! 🥳")
        // console.log("You're out of the game! 😭")



let stateValue = false
let goForward = true

let randNum1
let randNum2 
let sum
let printMessage = ""

let firstPara = document.getElementById("f1-para")
let secondPara = document.getElementById("f2-para")
let thirdPara = document.getElementById("f3-para")

function startGame() {


    randNum1 = Math.floor(Math.random() * 12);
    randNum2 = Math.floor(Math.random() * 12);
    sum = randNum1 + randNum2;

    secondPara.textContent = "cards :  " + randNum1 + " - " + randNum2
    thirdPara.textContent = "Sum : " + sum

    if (sum <= 15) {
         printMessage = "Draw a new card? 🙂🙂🙂"
    } else if (sum === 16) {
        printMessage = "You've got Blackjack! 🥳🥳🥳"
        stateValue = true
    } else {
        printMessage = "You're out of the game! 😭😭😭";
        goForward = false
    }
    firstPara.textContent = printMessage

}
