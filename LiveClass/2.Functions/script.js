// -------- FUNCTIONS -------
// in jS function is SPECIAL TYPE OF OBJECT

/*
function sum(a,b) {
    let c = a + b;

    return c;
}
// this function returns value of c


function printName(name) {
    console.log(name);


    // if you are not returning any value from a function 
    // js returns it DEFAULT_VALUE = undefined
    //return undefined;
}

const money = sum(1,2)
console.log(money, 'money') // 3

const printMyname = printName("utkarsh");
console.log(printMyname, 'printName') 

// this function returns ?  undefined
*/


// -------------- Function declaration -------------
//  (this will be interesetd in the PARSING PHASE)

/*
function sum(a,b) {
    let c = a + b;

    return c;
}
*/


// ------------- Function Expression ----------------
// (this will NOT BE interested in PARSING phase)

/*
const obj = {};
const sum2 = function(a,b) {
    return a + b
}

console.log(sum2(1,2), 'sum2')
console.log(sum2(1,2), 'sum2')
*/


// --------------- Function with a call site ----------------
// the place where you are calling the function (how you are calling the function )
/*
function sum(a,b) {
    return a + b;
}

console.log(sum(1,2)) // 3

// Incorrect but still not giving error
console.log(sum()) // NaN
console.log(sum(1)) // NaN
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 3
*/

// --------------- Function with Default values ------------------

/*
function sum(a = 0, b = 0, c = 0) {
    return a + b + c;
}


const result = sum();
console.log(result, 'nothing in the argument') // 0

const result2 = sum(1);
console.log(result2, 'result2t') // 0

*/



// -------------- REST OPERATOR -----------------------
// ... -> rest operator syntax

/*
function admissionToSchool(name, standard, age, ...info ) {
    const student = {
        name,
        standard,
        age,
        info: info,
    }

    console.log(student)

    console.log(info, 'info rest of the information')
}


const arjun = admissionToSchool("arjun", 1, 5, "delhi pitampura", "xyz father", "xyz mother");

const utkarsh = admissionToSchool("this will go to info", "asdasda")

*/

// ------------------- PASS BY VALUE VS PASS BY REFERENCE ------------------

/*
PASS BY VALUE
function sum(a,b) {
    a = a + 10;
    b = b + 10;
    return a + b;
}

const result = sum(1,2);
console.log(result, 'result'); // 23

*/


/*PASS BY REFERENCE
const math = {
    marks: 98,
    grade: "A+"
}

const science = {
    marks: 90,
    grade: "A"
}

function sumMarks(subject1, subject2) {
    // GRACE MARKING FOR NICE HANDWRITING
    subject1.marks += 2; 
    subject2.marks += 3;

    return subject1.marks + subject2.marks;
}


console.log(sumMarks(math, science)) // 193

// marks without grace is = 188


console.log(math.marks, 'Original math marks') // 100 
console.log(science.marks, 'Original science marks') // 93

*/
