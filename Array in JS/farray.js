let firstArray = ["one", "two", "three", "four"]
let secondArray = [
    "this is first line",
    "this is second line",
    "this is third line",
    "this is forth line"
]
let thirdArray = [
    "Suman Paik", //string
    16, //number (integer)
    true  //boolean
]
console.log(firstArray[0])
console.log(secondArray[2])

console.log(thirdArray[0])
console.log(thirdArray[1])
console.log(thirdArray[2])


firstArray.push("five")
console.log(firstArray)

firstArray.pop()
console.log(firstArray)