// Array methods

let myArr = [1, 3, 5, 7, 8, 9]
let myArr2 = [11, 32, 54, 75, 87, 90]
let myArr3 = [511, 532, 354, 575, 275, 105]
let myar1 = myArr.toString()
console.log(myArr)
console.log(myar1)

/*
// removing the last element from the existing array
myArr.pop()
console.log(myArr)

// adding a external element in the existing array 
myArr.push(34)
console.log(myArr)

// removing the element from the first index position 
myArr.shift()
console.log(myArr)

// adding an element at the very first index of the existing array 
myArr.unshift(99)
console.log(myArr)
*/

delete myArr[0]   //[ <1 empty item>, 3, 5, 7, 8, 9 ]
console.log(myArr)
// "delete" operator can not change the length of that array 

let newArray = myArr.concat(myArr2) //this mewthods returns a new array and added the more than one array
console.log(newArray)
let brandArr = myArr.concat(myArr2, myArr3)
console.log(brandArr)

// shor the array 
let sortarr = myArr3.sort()
console.log(sortarr)

// sort in desending order 
let compare = (a, b)=> {    // "compare" function
    return b - a
}
let desort = myArr3.sort(compare)
console.log(desort)

// reverse the array 

let reverse = myArr.reverse()
console.log(reverse)