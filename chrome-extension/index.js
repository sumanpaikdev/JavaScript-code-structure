let myContainer = ["www.goolge.com", "www.facebook.com", "www.twitter.com", "www.showwcase.com"]
const inputEl = document.getElementById("input-element")
const saveEl = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-element")

saveEl.addEventListener("click", function() {
    myContainer.push(inputEl.value) 
    console.log(myContainer)
})
for(let i = 0; i < myContainer.length; i++) {
    ulEl.innerHTML += "<li>" +myContainer[i] + "</li>"
}