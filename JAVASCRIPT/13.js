// map filter reduce 
/*
let ele = [15, 23, 54, 67, 89]

// array map method
let mp = ele.map((value, index, array) => {
    console.log(index, value, array)
    return (value + 1);
})
console.log(mp)

// array filter method 
let ar = [2, 4, 7, 5, 6, 8]

let cn_ar = ar.filter((fl) => {
    return fl < 6 
})
console.log(cn_ar)
*/



// let arr1 = [1, 4, 6, 7, 8, 9, 3]

// map method 
// const arr_element = (a) => {
//     return a
// }
// let elarr1 = arr1.map(arr_element)
// console.log(elarr1)

// filter method 

// const suman = (sum)=> {
//     return sum < 5
// }
// let elarr2 = arr1.filter(suman) 
// console.log(elarr2)

let arr3 = [2, 5, 2, 1, 6]

const smnpai = (a, b) => {
    return a + b
}
let pai = arr3.reduce(smnpai)
console.log(pai)