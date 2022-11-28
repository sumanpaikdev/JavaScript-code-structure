let myarr = [1, 2, 3, 6, 7, 8, 9]

// classical for loop
// for(let i = 0; i < myarr.length; i++) {
//     console.log(i + " --> " + myarr[i])
// }

// for each loop 
// myarr.forEach((arr)=> {
//     console.log(arr*2)
// })

// Array.from() // html document collection

let sum = "suman"
let man = Array.from(sum)
console.log(man)

// for of loop 
for(let i of myarr){
    console.log(i)
}

// for in loop // it gives us the key value in object an index in array
for(let b in myarr){
    console.log(b) // here b represents the index number of the array
}