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

/*

console.log("3" * 3, "mult")  // 9
console.log("3" - 3, "sub")  // 0
console.log("3" / 3, "division")  // 1
*/

// TODO: // give article for coersion.


// ---------------------- Objects ------------------------------

// Key - Value Pair
// key - name, age
// values - akash , 27
/*
const person = {
    name: "akash",
    age: 27,
    currentlyStudying: 12,
    "current salary": 1000
}


// CRUD -> Create, Read, Update, Delete

// ------- READ/get ----------

console.log(person.name, 'name') // akash
console.log(person.currentlyStudying) // 12
console.log(person["current salary"]) // 1000
console.log(person["name"]) // akash



// ---------- Update//Edit -----------
person.name = "utkarsh";
person["current salary"] = 90;

console.log(person);


// ------------- DELETE ------------------

delete person["current salary"];


console.log(person)

*/

// ---------------------- Arrays ------------------

/*
const arr = [15, 30, 45, 60, 75];

console.log(arr); // [1,2,3,4,5]
console.log(arr.length) // 5

// Note: Weird Part  (NEVER DO THIS)
// arr.length = 0;

// console.log(arr); // []



// ------------ READ/ get ------------

console.log(arr[0]); // 15
console.log(arr[1]); // 30

console.log(arr[arr.length - 1]); // 75

console.log(arr[90]) // undefined


// -------------- EDIT/ 
/*
arr[0] = 20

console.log(arr);



// ----------- Array Properties ------------

// 1. Push -> add new element in the last of the array 

// arr.push(100);
// console.log(arr);


// 2. POP -> remove an element from the last.

// arr.pop();
// console.log(arr);


// 3. SHIFT -> removes the value from the start of the array

// arr.shift();
// console.log(arr);


// 4. Unshift -> add the value in the start of the array

// arr.unshift(20);
// console.log(arr);

*/


// ---------------------- PARSING IN JAVASCRIPT --------------------


// Tavelling in Js file in 2 parts 
/*  
    1. PARSING PAHSE -> we care about variable and function Delcaration 
    2. EXECUTION PHASE -> in this we actually implement the lines/code.

*/


// var a = 12;

/*
var a; // (declaration)
a = 12; // (assignment)

*/


// -------------- HOISTING ----------------


/*
**** NON HOISTED VIEW ****
    console.log(x, 'x')
    var x = 99;
*/


/*
 ***HOISTING VIEW****
It seems that var x is declared on top 


    var x;

    console.log(x, 'x')
    x = 99;


*/



// ------------------- BAsic Operations (Assignment, Operator) --------------

/*
console.log(1 +2); // 3
console.log(Math.pow(2,3)) // 8

// Modulo ----- % gives me remainder

console.log(101 % 3) // 2

console.log(10 % 2) // 0

*/


// --------- COmparisions -----------
/*
console.log(1> 2); // false

console.log(1 <=2) // true


console.log(1 == 2)// false
console.log(1 != 2) // true

// == vs ===
//  == -> we do not check the type, ONLY VALUE WE CHECK (DO NOT USE THIS MOST OF THE TIMES)
// === -> BOTH TYPE AND VALUE are checked (USE THIS ONLY)

console.log(1 == "1") // true

console.log(1 === "1") // false

console.log(1 !== "1") // true
*/


// ------------------ BASIC PROGRAMMING ---------------

// --------- CONDITIONS: 

// 1. IF-ELSE

/*
if(money > 100000) {
    // then purchase I phone 
} else {
    // go with 10k phone chinese
}
    */

// if you want to find out if a number is even or not
/*
let  n = 100;

if(n % 2 === 0 ) {
    console.log("even")
} else {
    console.log("odd")
}

// NOTE: this is not the fastest way to check for the even and odd 
// BITWISE is the fastest way


if((n&1) === 0) {
    console.log("even")
} else {
    console.log("odd")
}

*/

// 2. Switch 
/*
switch(condition) {
    case 1: 
    console.log(1)
        break;
    case 2: 
        break;
    default: 
        break;
}
*/


// ----------------- Loops ----------------

let arr  = [12,17,15,14,90,13]

// 1. for loop 
/*
for(let i =0; i< arr.length ;i++) {
    console.log(arr[i]);
}
*/

// 2. while loop 

/*
let i =0;
while(i < arr.length) {
    console.log(arr[i]);

    i++;
} 
*/

// 3. for - of  (VALUES)
// ITERABLE OBJECT -> Array Like object (Array, List)
// if your OBJECT has Symbol(Symbol.iterator) -> then it means we can use for - of. 
/*

for(const item of arr) {
    console.log(item, "for of loop")
}

// THIS WILL NOT WORK
const obj = {
    name: "utkarsh",
    age: 27
}

for(const item of obj) {
    console.log(item, "for of loop")
}
*/

// 4. For - in loop (KEYS)
// they print keys on object ({} , [])

/*
const obj = {
    name: "utkarsh",
    age: 27
}

for(const key in obj) {
    console.log(key, obj[key], obj.key); // name utkarsh undefined
}

for(const key in arr) {
    console.log(key, arr[key]);
}
*/

// TODO: why String(person) will not work 