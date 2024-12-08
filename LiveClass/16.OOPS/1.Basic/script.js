/*

    OOPS -> Object Oriented Programming 

    In OOPS the PRIME focus of the language is OBJECT (Creation, manupulation and destruction).

    IN Scripting language (JS) the prime focus is FUNCTIONS.

    JS by default is a functional language.

    JS has LESS Support of OOPS.

    Main thing in OOPS and FUNCTIONAL are PARADIMES (WAy of coding).

    MAIN aim of a program (Software) is to create object and handle them.

    Objects can be created through OOPS and FUNCTIONAL programming

    OOPS: 
    1. Object
    2. class
    3. Inheritance

    4. Polymorphism
    5. Abstraction
    6. Encapsulation


*/


// ----------- HOW TO CREATE OBJECTS IN JS ---------------
/*
// WAY 1:
const utkarshPerson = {
    name: "utkarsh",
    age: 27,
    canWalk: function() {
        console.log("hello I can walk", this.name);
    }
}

console.log(utkarshPerson);

// WAY 2: constructor function

function Person(name, age){
    this.name = name;
    this.age = age;

    this.canTalk = function() {
        console.log(`yes ${this.name} can talk`);
    }
} 

const utkarhPerson = new Person("utkarsh", 27);
const arunPerson = new Person("arun", 27);

console.log(utkarhPerson);
console.log(arunPerson);

console.log(utkarhPerson.canTalk === arunPerson.canTalk, 'comparing canTalk in functional constructor')
// false


// Way 3: Class 

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    canWalk() {
        console.log("yes I can walk", this.name);
    }
}

const utkarshClassPerson = new PersonClass("utkarsh", 27);
const arunClassPerson = new PersonClass("arun", 28);
console.log(utkarshClassPerson);
console.log(arunClassPerson);

console.log(utkarshClassPerson.canWalk === arunClassPerson.canWalk, 'comparing methods')
// TRUE


utkarshClassPerson.canWalk();
arunClassPerson.canWalk();

*/

/*
    *********** CONCLUSION ***********

    1. Class are suprior as the methods are shared between the objects (through prototype).
    
    name and age are OWN PROPERTIES/method. 
    canWalk is NOT OWN PROPERTIES/method

*/

// QUESTION: having this limited knowledge tell me what is better ? COnstructor function or Normal objects or classes ? 
// Answer see above (console.log(utkarshClassPerson.canWalk === arunClassPerson.canWalk, 'comparing methods'))


// --------------------- INHERITANCE -------------------------
// ALl the properties and METHODS of parent will be part of CHILD (DERIVED CLASS).
// Any property of the child can NEVER be part of PARENT 

// EXAMPLE 1: 
/*
class Parent {
    property = 12;

    constructor() {}
}


class Child extends Parent {
    name;
    toys;

    constructor(name, toys) {
        // CALL SUPER CLASS // SUPER means PARENT CLASS
        super(); // calling the PARENT CONSTRUCTOR
        this.name = name;
        this.toys = toys;
    }
}

const child1 = new Child("child1", 1);
console.log(child1);
*/


// EXAMPLE 2: 

/*
// PARENT CLASS 
class Student {
    name;
    standard;

    constructor(name, standard) {
        this.name = name;
        this.standard = standard;
    }

    markAttandance() {
        console.log("hey there " +  this.name + " is present :: NORMAL ATTANDANCE" );
    }

    grades() {
        console.log("grades are nice");
    }
}




// SportsCaptain is a child class
class SportsCaptain extends Student {
    favTool; // ball, bat, cycling

    constructor(name, standard, favTool) {
        super(name, standard);
        this.favTool = favTool;
    }

    markAttandance() {
        console.log("hey there " +  this.name + " is present :: GROUND PRESENCE ATTANDANCE" );
    }

    routine() {
        console.log("routine of sports captain activity")
    }

}

const utkarh = new Student("utkasrh", 12);
const virat = new SportsCaptain("virat", 11, "bat");

console.log(utkarh);
utkarh.markAttandance()
utkarh.grades()

console.log(virat);

virat.markAttandance()
virat.grades();
virat.routine();
*/

/*
    PROPERTIES are OWN Properties.
    MEHTODS are inside the PROTOTYPE

    // SEE LiveClass/16.OOPS/1.Basic/PrototypeCronology.png for more clarity

*/

// --------------- private Properties ---------------

/*
class Star {
    name;
    weight;
    years;

    constructor(name, weight, year) {
        this.name = name;
        this.weight = weight;
        this.years = year;
    }
}

const sun = new Star("sun", 1000000, 400);
console.log(sun);

// sun.weight = -1;
// console.log(sun);


// HOW CAN I PROTECT WEIGHT of the sun ? 

// way 1: PROPERTY DESCRIPTORS

Object.defineProperty(sun, "weight", {
    writable: false
})
    */


// way 2: Using private Properties -> THis IS BEST WAY.

// ----------- GETTERS AND SETTERS -------------

/*
class Star {
    name;
    #weight;
    years;

    constructor(name, weight, year) {
        this.name = name;
        this.#weight = weight;
        this.years = year;
    }

    get getWeight() {
        return this.#weight;
    }

    set setWeight(newWeight) {
        // PROPER ACCESS OF check then only we can update 
        this.#weight = newWeight;
    }
}

const sun = new Star("sun", 100000, 40);
console.log(sun);


// sun.#weight = 12;
// sun["weight"] = -1;

console.log(sun.getWeight, 'reading weight property');
sun.setWeight = 12;
console.log(sun);

*/


// ------------------------- Instance vs Static Properties/methods -------------------------------

class Circle {
    radius;
    constructor(r) {
        this.radius = r;
    }

    // NORMAL METHODS

    draw() {
        console.log("DRAW THE CIRCLE FOR RADIUS " , this.radius);
    }

    // STATIC METHOD 
    static hellowWOrld() {
        console.log("I am howlloe world the cricle")
    }

}

const c1 = new Circle(12);

// c1 is INSTANCE OF CLASS Circle.

// there are Methods which are part of INSTANCE and there are methods which are part of CLASS.
// static METHODS are part of CLASS 
// NON STATIC Methods are part of INSTANCE

c1.draw();
Circle.hellowWOrld();

Circle.draw(); // this will not work

