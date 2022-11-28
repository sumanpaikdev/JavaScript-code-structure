// string in javascript

let name = "Hello this is Suman Paik."
let sndName = " A web developer from India."
let trdName = "     Suman Paik     "

console.log(name)
console.log(name.length)

 // These are all the String Methods
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(1,20))
console.log(name.slice(6))
console.log(name.replace("Suman Paik", "sumanpaikdev"))
console.log(name.concat(name + sndName))
console.log(trdName)
console.log(trdName.trim())

let strOne = "The score you entered is 12345"  //26 th index that means 0 -25
let amount = strOne.slice("The score you entered is ".length)
let amount2 = strOne.slice(25)  // thats why the 25 is there
console.log(amount)
console.log(typeof amount)
console.log(amount2) // this is i mean the output is a string
console.log(typeof amount2)
let amount3 = Number.parseInt(strOne.slice(25)) // thats why the 25 is there
console.log(amount3)
console.log(typeof amount3)


let naam = "ubuntu"
naam[3] = "h"
console.log(naam)  //we can not change the string coz the string is "immutable"
                    // alternate we can create a new string.