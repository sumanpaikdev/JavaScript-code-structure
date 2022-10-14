const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passGen = document.getElementById("generatePassword")
let textL = document.getElementById("leftText")
let textR = document.getElementById("rightText")

passGen.addEventListener("click", function () {
    textL.textContent = ""
    textR.textContent = ""
    textL.textContent = randomPasswordGenerate()
    textR.textContent = randomPasswordGenerate()

})


let passLimit = 15

function randomPasswordGenerate() {
    let myNewPassword = ""
    for (let i = 0; i < passLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        myNewPassword += characters[randomNumber]
    }
    return myNewPassword
}
