// CLOSURES => combination of FUNCTION and + LEXICAL ENVIRONMENT (OUTER SCOPE chaining )


// EXAMPLE 1: 
/*
const a = 12;

function abc() {
    console.log(a)
    console.log(b)
}
const b = 99;

abc()
// answer: 12 99
*/


// EXAMPLE 2: 
/*
const a = 12;

function abc(c) {
    console.log(a + b + c)
}
const b = 99;

abc(1);
// answer: 112

*/

// EXAMPLE 3: 
/*
let a = 12;

function foo(){
    const b = 9;
    
    function bar(){
        let c = 12;
        console.log(a + b + c + d)
    }

    return bar;

}

const d = 100;


const resultOfFoo = foo();

// resultOfFoo is bar function only....

resultOfFoo(); // 133

*/

//CLOSURE =  barFunction + {b, a , d}




// ------- IMPLEMENTATION ----- 


// EXAMPLE 4: 

/*
    counter() // 1
    counter() // 2 
    counter() // 3

    crate Counter function 
*/

/*
let a = 0;

function counter() {
    a++;
    return a;
}

//  counter + {a = 0}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
*/


// EXAMPLE 5: 

/*
const counter1 = carFunction();
const counter2 = someFunction();

counter1() // 1
counter1() // 2

counter2() // 1
counter2() //2

counter1() // 3
counter2() // 3

// implement  someFunction 

*/

function someFunction() {
    let value =  0;
    
    function inner() {
        value++;
        return value;
    }

    return inner;

}


const counter1 = someFunction(); // inner + {value = 1}

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4
console.log(counter1()); // 5
console.log(counter1()); // 6
console.log(counter1()); // 7
console.log(counter1()); // 8

console.log(" ---- - - - - --x-x-x-x-x-x- - - - - -x-x-x-x- --x-x-x- -x-x-x- -x-x-x- ")


// newInner1 + {value = 0}
const counter2 = someFunction();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4

console.log(" ---- - - - - --x-x-x-x-x-x- - - - - -x-x-x-x- --x-x-x- -x-x-x- -x-x-x- ")

// newInner2 + {value = 0}
const counter3 = someFunction();
console.log(counter3()); // 1
