class Student {
    name;
    standard;

    constructor(name, std) {
        this.name = name;
        this.standard = std;
    }

    markAttandance() {
        console.log("hey Marking attandance for " + this.name + " :: NORMAL ATTANDANCE");
    }

    grades() {
        console.log("grades for " + this.name + " are nice");
    }
}

// DERIVED CLASS (child class) -> SportsCaptain 
class SportsCaptain extends Student {
    favTool;

    constructor(name, standard, favTool) {
        super(name, standard);
        this.favTool = favTool;
    }

    markAttandance() {
        console.log("hey Marking attandance for " + this.name + " :: GROUND ATTANDANCE");
    }

    routine() {
        console.log(`here is a routine for ${this.name}`);
    }
}

const virat = new SportsCaptain("virat","12","bat");


// ------------------------- INHERITANCE BEFORE 2015 (Es5) -----------------------------------
// before 2015 there was no class in js 
// before that there was constructor function.

/* 
    SUB OPTIMAL SOLUTION for a construction function 

function StudentConstructor(name, std) {
    this.name = name;
    this.standard = std;

    this.markAttandance = function() {
        console.log("hey Marking attandance for " + this.name + " :: NORMAL ATTANDANCE");
    }

    this.grades = function() {
        console.log("grades for " + this.name + " are nice");
    }
}

const utkarshClass = new Student("utkarsh", 12);
const arunClass = new Student("utkarsh", 12);

console.log(utkarshClass.markAttandance === arunClass.markAttandance) // true

utkarshClass.markAttandance()
const utkarshCOnstructor = new StudentConstructor("UtkarshCOnstructor", 12);
const abhishekCOnstructor = new StudentConstructor("UtkarshCOnstructor", 12);
utkarshCOnstructor.markAttandance()

console.log(utkarshClass);
console.log(utkarshCOnstructor);
console.log(abhishekCOnstructor);

console.log(utkarshCOnstructor.markAttandance === abhishekCOnstructor.markAttandance) // false 

*/


/**
 * 
 *  GOOD Solution for the above thing
    GOOD REPRESENTAION of a CLASS 
 * 
 */

    // ---------------------  PARENT ---------------------- 
function StudentConstructor(name, std) {
    this.name = name;
    this.standard = std;
}

StudentConstructor.prototype.markAttandance = function() {
    console.log("hey Marking attandance for " + this.name + " :: NORMAL ATTANDANCE");
}

StudentConstructor.prototype.grades = function() {
    console.log("grades for " + this.name + " are nice");
}

const utkarshCOnstructor = new StudentConstructor("utkarsh", 12);
const arunCOnstructor = new StudentConstructor("arun", 12);

console.log(arunCOnstructor)
console.log(utkarshCOnstructor)

utkarshCOnstructor.markAttandance();
arunCOnstructor.markAttandance();

console.log(arunCOnstructor.markAttandance === utkarshCOnstructor.markAttandance);


//------------------- CHILD   --------------

function SportsCaptainConstructor(name, standard, favTool) {
    // In order to call SUPER -> we have to 
    // StudentConstructor(name, standard) // THIS IS BAD 
    StudentConstructor.call(this, name, standard) // this is good 

    this.favTool = favTool;
}


// MY AIM NOW IS TO SET THE PARENTS METHOD AND THEN CHILD METHOD

function myExtends() {
    // Parent -> StudentConstructor I am setting up PARENT METHOD 
    const objectWIthParentPrototype = Object.create(StudentConstructor.prototype); 
    SportsCaptainConstructor.prototype = objectWIthParentPrototype;

    // We had lost the CHILD constructor we are resetting it.
    SportsCaptainConstructor.prototype.constructor = SportsCaptainConstructor;
}

myExtends();


SportsCaptainConstructor.prototype.markAttandance = function() {
    console.log("hey Marking attandance for " + this.name + " :: GROUND ATTANDANCE");
}

SportsCaptainConstructor.prototype.routine = function() {
    console.log(`here is a routine for ${this.name}`);
}

const viratCOnstructor = new SportsCaptainConstructor("viratsss", 12, "bat");
console.log(viratCOnstructor);