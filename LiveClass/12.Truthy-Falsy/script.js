
// TRUE and FAlse

const isSunHot = true;
const isMoonHot = false;

console.log(isSunHot, 'isSunHot');
console.log(isMoonHot, 'isMoonHot');


// we can derive TRUE and FALSE from other values also. (TRUTHY and FALSY)

//  ------------------ String to BOOLEAN ----------------

/*
const str1 = "";
console.log(Boolean(str1), 'blank string'); // False

const str2 = "hello"
console.log(Boolean(str2), 'non blank string'); // true


// DO NOT USE THIS (!!) EVEN THOUGH IT WORKS 

console.log(!!(str1), 'blank string'); // False
console.log(!!(str2), 'non blank string'); // true

*/


// -------------------- NUmber to Boolean ------------------

/*
const num1 = 0
const num2 = -100
const num3 = 5
const num4  = 3.14

console.log(Boolean(num1), '0'); // false
console.log(Boolean(num2), '-100'); //  true
console.log(Boolean(num3), '5'); // true
console.log(Boolean(num4), '3.14'); // true

// Inside if condition block the conditon will try to resolve itself into TRUE and FALSe
if(num2) {
    console.log("if part")
} else {
    console.log("else part")
}

*/


// -------------------- Null and Undefined  to Boolean --------------------------
/*
const val1 = null;
const val2 = undefined;

console.log(Boolean(val1), 'val1'); // false
console.log(Boolean(val2), 'val2'); // false
*/


// -------------------- Objects to Boolean ------------------------------

const obj1 = {}; // abc@123
const obj2 = []; // abc@111

console.log(Boolean(obj1), 'obj1 {}'); // true
console.log(Boolean(obj2), 'obj2 []'); // true