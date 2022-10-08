let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let NumStatus = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
 function add(){
     let sum = num1 + num2
     NumStatus.textContent = "Sum : "+ sum
 }
 function subtract(){
     let sub = num1 - num2
     NumStatus.textContent = "Subtract : "+ sub
 }
 function divide(){
     let divi = (num1 / num2)
     NumStatus.textContent = "Divide : "+ divi
 }
 function multiply(){
     let mul = num1 * num2
     NumStatus.textContent = "Multiply : "+ mul
 }

