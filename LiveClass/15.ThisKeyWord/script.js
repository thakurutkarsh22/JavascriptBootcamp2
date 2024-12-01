
// ALL THESE RULES WILL ONLY WORK WITH NORMAL FUNCTION NOT ARROW FUNCTION 
// Normal function: with function keyword



// --------------------- call site ------------------
/*
function foo() {
    console.log("hellow");
}

foo(); /// this is a CALL SITE (REFERENCE to FUNCTION (foo) + parentheses of EXECUTION() )

foo; // this is NOT a call site 


const fooCopy = foo; // this is NOT a call site  

fooCopy() // this is a CALL SITE

// THE CONTEXT (this) is dependent on the call site.



const obj = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function() {
        console.log("study");
    }
}

obj.study(); // this is also a CALL SITE


*/



// TODO: read more from youdonotknowjsyet book (later on in life)

// -------------------------------- THIS KEYWORD ---------------------------

// this -> context at which the function is CALLED

// 1. --- - - - -- - -  Default Binding.

// "use strict";
/*
function foo() {
    // this -> window / undefined (strict mode)
    console.log("hello");
    console.log(this)
}

foo();  // is this a call site ? YES 
// have I given any EXTRA INFORMATION ? NO
*/

// 2. - - - - - - - -Implicit Binding: JS determines the context 

// EXAMPLE 1:  Obj will be the context 
/*
const obj = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function() {
        // context -> this -> obj
        console.log("study");
        console.log(this, 'this keyword');
    }
} 

obj.study(); // is this a call site ? YES
// have I given any EXTRA INFORMATION ? // yes 
*/


// EXAMPLE 2:  Obj1 will be the context 
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function() {
        // context -> this -> obj1
        console.log("study");
        console.log(`hey there ${this.name} is Studying`)
    }
} 
obj1.study();
*/


// EXAMPLE 3:  
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function() {
        // context -> this -> window / undefined (strict mode) / obj1
        console.log("study here");
        console.log(this)
    }
} 

const studyCopy = obj1.study; // is this a call site ? NO

// FOR THIS LINE WHAT IS CONTXT -> window
studyCopy();  // is this a call site ? YES
// have I given any EXTRA INFORMATION ? NO


// FOR THIS LINE THE CONTEXT -> obj1
obj1.study(); // is this a call site ? YES
// have I given any EXTRA INFORMATION ? YES
*/


// EXAMPLE 4: 
/*
const obj2 = {
    name: "utkarsh",
    func: function() {
        // context -> this -> Obj2
        console.log("hello obj2", this.name)
    }
}

const obj1 = {
    name: "akash",
    rollNumber: 99,
    obj2: obj2
}


obj1.obj2.func() // is this a call site ? YES 
// have I given any EXTRA INFORMATION ? YES
*/


// ob1.obj2.obj3.obj4.obj5.func(); // inside func() obj5 would be the context.


// 3. - - - - - - --  EXPLICIT BINDING : in this we are telling the js what is the context 
/*
    in this the USER overrides the default nature of JS binding (default and inplicit)

    1. call 
    2. apply 
    3. bind


*/

// EXAMPLE 1: call 

/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function(a, b) {
       // context -> this -> obj1 (implicit) / obj2 (explicit)
        console.log("study here");
        console.log(this.name, a , b)
    }
}
const obj2 = {
    name: "akash",
    class : 12
}

// FOr this line the context in study function will be obj1
obj1.study(1,2) // is this a call site // yes
// have i given any extra info // yes -> obj1

    // study here 
    // utkarsh 1 2




// FOr this line the context in study function will be obj2
obj1.study.call(obj2, 1,2);

    // study here 
    // akash 1 2



*/

// EXAMPLE 2: 

/*
function foo(){
    console.log("hello foo")
    console.log(this);
} 

const obj = {
    name: "utkarsh"
}

// for this line the context in foo function will be WINDOW / undefined (in case of strict mode)
foo(); // is this a call site ? yes
// have i given any extra information? NO


// for this line the context in foo function will be obj
foo.call(obj)
*/


// EXAMPLE 3: apply
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function(a, b) {
       // context -> this -> obj1 (implicit) / obj2 (explicit)
        console.log("study here");
        console.log(this.name, a , b)
    }
}
const obj2 = {
    name: "akash",
    class : 12
}


obj1.study.call(obj2, 1,2)
obj1.study.apply(obj2, [1,2])

*/

// EXAMPLE 4: bind
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function(a,b) {

        console.log("study here");
        console.log(this)
    }
} 

const studyCopy = obj1.study;

// For this line the context inside the study function will be window or undefined (in case of strict mode)
studyCopy(1,2); // is this a call site ? YES
// have I given any extra information ? NO 


// For this line the context inside the study function will be Obj1 (IMPLICIT BINDING )
obj1.study(1,2); 


// For this line the context inside the study function will be Obj1 (EXPLICIT BINDING)
obj1.study.call(obj1, 1,2)


// / TODO :: 

// do some workk .. . . . . .. . . . . 


// call the functoin 
obj1.study.call(obj1, 1,2)




//  ----- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function abc() {
    console.log("hello world abc")
    console.log(this)
}

// abcWithCOntextAttached is abc only with CONTEXT already set to Obj1
const abcWithCOntextAttached = abc.bind(obj1)

// setTimeout is calling abc -> in short WE HAVE NO IDEA ABOUT the call site (binding is DEFAULT )
setTimeout(abcWithCOntextAttached, 5000)

*/

// EXAMPLE 5: 
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function(a,b) {

        console.log("study here");
        console.log(this.name)
        console.log(this)
    }
} 


// obj1.study()

setTimeout(obj1.study.bind(obj1), 5000);
*/


// 4. new keyword: 
/*
function Car(name, speed, model) {
    this.namezz = name;
    this.speed = speed;
    this.model = model;
}

const ferrari = new Car("ferrari",200, "v8");

const waganR = new Car("wagon R", 100, "m2");

// new is -> {} (blank object )

// this blank object is given to the Car Function as CONTEXT 


console.log(ferrari);
console.log(waganR);

*/



//  ------- - - - - -------- RULE PRECEDENCE --------- - - - -


/*
    when 2 rules are fighting then the precedence rule comes into play

    new >> explicit binding >> implicit > default
*/

// EXAMPLE 1
/*
const obj1 = {
    name: "utkarsh",
    class: 12,
    hobbies: ["cycling", "badmintion", "teaching"],
    study: function(a, b) {
       // context -> this -> obj1 (implicit) / obj2 (explicit)
        console.log("study here");
        console.log(this.name, a , b)
    }
}
const obj2 = {
    name: "akash",
    class : 12
}


// in this case 2 tules are fighting IMPLICIT and EXPLICIT
// EXPLICIT will win
obj1.study.call(obj2, 1,2);
// akash 

*/

// EXAMPLE 2: 


function Person(name, age){
    this.name = name;
    this.age = age;

    this.canTalk = function() {
        console.log(`yes ${this.name} can talk`);
    }
} 

const utkarhPerson = new Person("utkarsh", 27);
const akashperson = new Person("akash", 22);

const ankushPerson = {
    name: "ankush",
    age: 19
}

console.log(utkarhPerson)
console.log(akashperson)
console.log(ankushPerson)


utkarhPerson.canTalk.call(akashperson)
