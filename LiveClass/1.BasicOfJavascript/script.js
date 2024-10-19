// -------------------------- VARIABLE -------------------------


// -------------- variable naming ----------

// a variable can never start with a number (number can be in between or in the last)

/*
var mathma12312rkss1 = 90;
var mathMarks = 100;
var physicsMarks = 90;

console.log(mathMarks, 'extra comment for math ');
console.log(physicsMarks, 'physics');


// Casing - Camel, pascal casing 

var bankFunds = 100;
var InterestRate = 2.5;
*/




// ----------------- variable types -----------

/*
// let const var 

// let and var -> variable 
let num = 1.1;
let name = "utkarsh";
let isSunAStar = true;

name = "akash";
isSunAStar = false;


// ---> const -> we cant re-assign the value 

const name1 = "akash";
const isMoonAStar = false;

const baseRateOfInterest = 2.5;
const pi = 3.14;

*/

// SOurce of truth/Universal truth we use const otherwise we use let 
// we DO NOT USE var, unless something is forcing 


//------------ String  ----------

/*
let score = "320";
score = "540 socre"


// -------- Variable Declaration and Variable Assignment 

// let a = 1;

let a; // Variable Declaration
a = 1; // Variable Assignment



var b; // variable Declaration
*/


// ---------------------------- Data Types -----------------------------
/*
// Primitive and Non-primitive DataTYpes 

// 1. Number

// JAVA -> int, double, float

let grade = 9.5;
let num = 100;

let temp = 40;

// 2. BigInt 
const previouslyMaxSafeInteger = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);

// 3. String (we can use "", '', `` ) (NON PRIMITIVE)

const name = "akash";
const commnetry = 'hey there guys';
const todaysWeather = `hey todays Temp is ${temp}`;

// 4. Boolean 
let isSunHot = true;


// 5. Undefined - JS sees we have not given weightOfSun a value, so JS chooses to give its DEFAULT value 

let weightOfSun;
console.log(weightOfSun, 'weightOfSun')


// 6. Null -> its a value that user will give.

let weightOfMoon = null;
console.log(weightOfMoon, 'weightOfMoon')



// Non primitive Data types - if we want to store multiple things 

// 7. Object 

const utkarshPerson = {
    name: "utkarsh",
    age: 27,
    height : 510,
    live: "delhi"
}

console.log(utkarshPerson, 'utklarash person obj');

// Array (is an Object (special type of object)) -> to store the list of items 

const peopleSignedupForTrip = ["akash", "amit", "sumit"];
console.log("peopleSignedupForTrip", peopleSignedupForTrip)
*/

// ---------------- typeof Keyword -------------------

/*
const marks = 12;
const typeOfMarks = typeof marks;

console.log(typeOfMarks, 'typeOfMarks') // Number


const name = "akash";
const typeOfName = typeof name;

console.log(typeOfName, 'typeOfName') // String


let isMoonNice;
const typeOfMoon = typeof isMoonNice;
console.log(typeOfMoon, 'typeOfMoon') // undefined


let isSunNice = null;
const typeOfSun = typeof isSunNice;
console.log(typeOfSun, 'typeOfSun') // Object -> its a bug in JS language itself 

*/


// ---------------- MORE ON PRIMITIVE AND NON PRIMITIVE -------------

// PRIMITIVE values are stored in Stack and NON PRIMITIVE are stored in HEAP.

// Stack is a place where we execute instruction (like a brain.)

// -------------- coercion (conversion) ------------------------

/*
    IMPLICT -> someone is doing something for you by default. (home food by parents)

    EXPLICIT -> when you as a person decides what you want (like ordering in the HOTEL)

*/




/*
    In programming + means 2 things 
    1. Math Addition 
    2. String Concatination (combination of 2 strings)
*/


// ------ RULE 1: String (with string + always means Concatination)  (IMPLICIT)
// NOTE: String + Anything = STRING

/*
console.log("abc" + "def") // "abcdef"
console.log(1 + "abc") // "1abc"
console.log(1 + "1") // "11"
console.log("hello" + true) // "hellotrue"

console.log("string" + {}) // "string[object Object]"
console.log("string" + [1,2]) // "string1,2"

console.log("abc" + undefined) // "abcundefined"
console.log("abc" + null)// "abcnull"
*/


// ------- RULE 2 : String to Integer (Number) (EXPLICIT)
/*

console.log(+"12") // NEVER DO THIS.

console.log(Number("12")) // this is what we should use

console.log(parseInt("123123"));

console.log(Number("12a")); // NaN -> not a numebr
*/


// -------- RULE 3 : String with (* , / , -) : + means concatination (IMPLICIT)

console.log("3" * 3, "mult")  // 9
console.log("3" - 3, "sub")  // 0
console.log("3" / 3, "division")  // 1
