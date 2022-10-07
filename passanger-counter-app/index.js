let number = 0;
let setCount = document.getElementById("count--element");

function increment() {
    number += 1;
    setCount.innerText = number;

}
function decrement() {
    number -= 1;
    setCount.innerText = number;
}

function saveitem() {
    // console.log(number);
    let saveCount = document.getElementById("count--record");
    saveCount.innerText += number + " - ";

}