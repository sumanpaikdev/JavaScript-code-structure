// let number = [12, 34, 56, 67, 89, 45, 67,56]
// let newNumber = number.map(myFunction)
// console.log(newNumber)
// document.getElementById("para").textContent = newNumber;
// function myFunction(numberr) {
//    return(
//     numberr
//    ); 
// }

// let myNameObj = [
//     {firstname: "console"},
//     {lastname: "logOut"},
//     {element: 3},
//     {title: "this is map function using on object"}
// ]
// let getEl = myNameObj.map(mapFunction)

// document.getElementById("secondPara").textContent = getEl
// console.log(getEl)
// function mapFunction(myNameObj) {
//     return(
//         `${myNameObj.firstname}`
//         `${myNameObj.lastname}`
//     );
// }


let users = [
    {firstName: "kotlin",
    secondName: "programming",
    count: 2}
    // {firstName : "Susan", lastName: "Steward"},
    // {firstName : "Daniel", lastName: "Longbottom"},
    // {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(myfunction)
      
document.getElementById("para").textContent = userFullnames;
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

  function myfunction(element) {
    // return `${element.firstName} ${element.lastName}`;
    return(
     `  ${element.firstName}
        ${element.secondName}`

    );

  }