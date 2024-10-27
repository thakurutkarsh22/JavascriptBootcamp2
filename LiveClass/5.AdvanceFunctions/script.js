
// ----- FUNCTION ADV
// Function are treated as 1st class Objects. 
// 1.  it can be assigned to a variable
// 2. it can be returned and accepted as a value from a function.

/*
function abc (abc) { // abc is a PARAMETER

    function inner() {
    }

    return inner
}

abc(1) // 1 is an ARGUMENT 
abc({})
abc(() => {})
*/


/*

// function delcaration 
function sum(a,b) {
    return a+b;
}

// function expression 
const sum2 = function(a,b) {
    return a +b;
}

// arrow Function 

const sum3 = (a,b) => {
    return a +b;
}

console.log(sum(1,2))
console.log(sum2(1,2))
console.log(sum3(1,2))


*/


// Difference between Arrow function vs Normal Function keyword 
// 1. this keyword: TODO  (this keyword do not work with ARROW func)
// 2. arguments keyword (arguments does not work with ARROW func ) 

/*
function sum (a,b) {
    console.log('arguments given to this function', arguments)
    return a + b
}

// sum(100, 20);
// sum(1, 2);
// sum(4, 10);

*/

/*
const sum2 = (a,b) => {
    console.log('arguments given to this function sum2', arguments) // this is illegal 
    return a + b
}

sum2(100, 20);
sum2(1, 2);
sum2(4, 10);
*/


// -------------- try catch --------------------
/*
let obj = {}

function sum(a,b){
    try {
        let c = a+ b;

        ////// ----- google call  Calling a server can give you error()

        // MOCK THE ERROR FOR THE DEMO
        throw new Error("Google server is down");

        return c
    } catch(error) {
        // handle the error 
        console.log(error);
        alert("hey user there is some error here enjoy this UI")
    } finally {
        // cleanup
        obj = null;
    }

}

console.log(sum(10,2));

*/



// ------------------- DANGEROUS PARTS OF FUNCTIONS ----------------

// 1. A function can ACCEPT a ""function as a PARAMETER""

/*
function sum(a,b) {
    console.log(a); //  -> printing the function
    console.log(b);

    // a() -> implementing the function
    a();
    b();
}

// sum(1,2);
// sum(1, "abcd")
// sum([1,2,3,4], {name: "utkarsh"})

sum(
    () => {
        console.log("hello hello a")
    },

    function() {
       console.log("hello heelo bb") 
    }
)

*/


// 2. A function can return a ""function as a VALUE""

/*
function abc() {

    const obj = {
        name: "utlkarsh"
    }

    function inner() {
        console.log("inner");
    }

    return inner;
}

const innerFunction = abc();

innerFunction();
*/


// --------------------- HIGHER ORDER FUNCTION (HOF) ----------------------
// 1. A function can ACCEPT a ""function as a PARAMETER""
// 2. A function can return a ""function as a VALUE""


/*
// abc is a HOF

function abc() {

    const obj = {
        name: "utlkarsh"
    }

    function inner() {
        console.log("inner");
    }

    return inner;
}


// SUM is also a HOF
function sum(a,b) {
    console.log(a); //  -> printing the function
    console.log(b);

    // a() -> implementing the function
    a();
    b();
}

sum(() => {})

*/


//--------- EXAMPLE  --------------

// it is a normal function only but it has a special name HOF
// HOF
function spaceship(leftFunction, rightFunction, command){

    if(command === "left") {
        leftFunction(); 
    } else if(command === "right"){
        rightFunction()
    } else {
        console.log("EMERGENY IN SHIP")
    }

}

// ALiens 

/*
function alienLeftFUNCTIONasjdaskdjhaskdhj() {
    console.log("ALIEN LEFT 30degree");
}

function alienRightFUNCTIONasjdaskdjhaskdhj() {
    console.log("ALIEN RIGHT 30degree");
}

spaceship(alienLeftFUNCTIONasjdaskdjhaskdhj, alienRightFUNCTIONasjdaskdjhaskdhj, "left");
spaceship(alienLeftFUNCTIONasjdaskdjhaskdhj, alienRightFUNCTIONasjdaskdjhaskdhj, "right");
*/


// HUMAN 

// humanLeftFunction is also a normal function 
// it has a special name CALLBACK FUNCTION 

function humanLeftFunction() {
    console.log("15 degree left")
}

function humanRightFunction() {
    console.log("15 degree right")
}

spaceship(humanLeftFunction, humanRightFunction, "left")
spaceship(humanLeftFunction, humanRightFunction, "right")




// ----------------------- CALLBACK FUNCTION ----------------
// ANY FUNCTION that you give to HOF (humanLeftFunction)
// we do not directly call the call back function, some other function (HOF) calls that functions
