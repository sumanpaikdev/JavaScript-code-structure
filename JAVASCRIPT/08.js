const a = 23;
const b = 21;


function AddTwoNumber( x , y){
    return(
        (x+y)
    );
}

// arrow function 
const addTwoNum = ()=> {
    return(
        (a + b)
    );
}

const suman = ()=> {
    console.log("Suman")
    return(
        "sumanpaikdev"
    );
}
console.log(a+b)
console.log(AddTwoNumber(a,b))
console.log(addTwoNum(a,b))
suman();
const val = suman();
console.log(val)

const twoNum = (x,y)=> {
    return(
        console.log(x+y)
    );
}
twoNum(9,8)