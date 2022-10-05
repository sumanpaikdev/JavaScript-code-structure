let numCount = 0;
//increment
function incrementCount() {
    numCount = (numCount + 1);
    document.getElementById("count").innerHTML = numCount;

}
//decrement
function decrementCount() {
    numCount = (numCount - 1);
    document.getElementById("count").innerHTML = numCount;

}

function save() {
    console.log(numCount)
}