let myContainer = []
const inputEl = document.getElementById("input-element")
const saveEl = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-element")

saveEl.addEventListener("click", function () {
    myContainer.push(inputEl.value)
    connectInner()
    inputEl.value = ""
    console.log(myContainer)
})


function connectInner() {
    let innerItems = ""
    for (let i = 0; i < myContainer.length; i++) {
        innerItems += `<li><a href='${myContainer[i]}'>${myContainer[i]}</a></li>`
    }
    ulEl.innerHTML = innerItems
}