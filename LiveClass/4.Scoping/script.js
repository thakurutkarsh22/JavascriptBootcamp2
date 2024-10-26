// ---------------- SCOPING (SCOPE) ----------------


// 1.  the JS file is GLOBAL 
// 2. Scope of Var is Global and Functional (EC -> Execution Context)
// 3. we have learned that Scope of Var is EC thats it. 


/*
EXAMPLE 1: 
var a = 12;
console.log(a);

if(true) {
    console.log(a, 'inside if block')
}

console.log(a)


// OUTPUT: 12 , 12 'inside if block' , 12 

*/


// 

/*
    EXAMPLE 2:
var a = 12;
console.log(a);

function abc() {
    var a  = 100;
    console.log(a, 'inside the function ');
}

abc();

console.log(a, 'after function call')

// OUTPUT 12 100 12
*/


/*
    EXAMPLE 3: 

    var a = 12;
    console.log(a);

    function abc() {
        a  = 100;
        console.log(a, 'inside the function ');

        return 1;
    }

    var returnedValue = abc();
    console.log(returnedValue);

    console.log(a, 'after the function call');

    // 12 100 1 100

*/


/*
    EXAMPLE 4:


    var a = 100;
    console.log(a);

    if(true) {
        var a = 99;
        console.log(a, 'inside the if'); 
    } 

    console.log(a, 'after if') 

    // 100 99 99 
*/









