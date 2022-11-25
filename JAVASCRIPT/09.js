let marks = {
    ram: 90,         // ----> 0
    sam: 89,         // ----> 1
    seeta: 99,       // ----> 2
    lakshman: 88,    // ----> 3
    hunuman: 99      // ----> 4 
}
/*
console.log(marks) //for print the whole object as it is 
console.log(marks.sam) //for print the value of a specific key
console.log(Object.values(marks)) //for print the all values of the existing object
console.log(Object.keys(marks)) //for print the all keys of the existing object
console.log(Object.values(marks).length) //print the object length
console.log(Object.keys(marks).length) //for print the object length
*/
console.log(Object.keys(marks)[3])
console.log(Object.values(marks)[3])
console.log(marks[Object.keys(marks)[3]])

// for(let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("the marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]])
// }
// for(let i=0; i<Object.keys(marks))

// for(let i=0; i< Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " is " + Object.values(marks)[i])
// }

// FOR IN LOOP
5

for(let key in marks){
    console.log(key)
}