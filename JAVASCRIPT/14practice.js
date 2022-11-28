let a = [1, 3, 6, 7, 9, 8]
let b = prompt("enter a number: ")
b = Number.parseInt(b)
a.push(b)
console.log(a)


do{
    a.push(b)
}while(b=0)
console.log(a)