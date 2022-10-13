let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let middleState = document.getElementById("readyFight")
let buttonClick = document.getElementById("fightButton")

buttonClick.addEventListener("click", function () {
    let numberOne = Math.floor(Math.random() * fighters.length)
    let numberTwo = Math.floor(Math.random() * fighters.length)
    middleState.textContent = fighters[numberOne] + " Vs " + fighters[numberTwo]
})