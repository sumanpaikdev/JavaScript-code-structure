let insideContainer = document.getElementById("container")

insideContainer.innerHTML = "<button onclick='clickme()'>Hello!</button>"

function clickme() {
    insideContainer.innerHTML += "<p>How are you?</p>"
}