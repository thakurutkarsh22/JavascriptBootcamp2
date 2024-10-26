// ---------- SPREAD OPERATOR -----
// ... -> syntax 


/*
const arr = [1,2,3,4,5]; // 

// If you think this is a copy you are DEAD WRONG.
const arrCopy = arr;

console.log(arr === arrCopy, "cmparing arr with arrCopy");
*/



/*

    How to achieve a copy 

*/

// Copy Way 1: for loop (Shallow copy)

/*
const arr = [1,2,3,4,5]; // abc@123

const copyArr = []; // abc@111


for(let i=0; i< arr.length ; i++) {
    const item = arr[i];
    copyArr.push(item);
}

console.log(copyArr)
console.log(copyArr === arr , "comparing arr with copyArr")

*/


// Copy way 2 -> Spread Operator (Shallow copy)

/*
const arr = [1,2,3,4,5]; // abc@1234

const copyArr =  [...arr]; // abc@111

console.log(copyArr, 'copyArr');
console.log(arr === copyArr, 'comparing arr and copyArr');

*/


/*
const person = {
    name: "arjun",
    class: 12
} // abc@123

const copyPerson = {...person} // abc@111

console.log(copyPerson, 'copyPerson')
console.log(copyPerson === person, 'comparing person and copyPerson');
*/


// ------------- DEEP COPY VS SHALLOW COPY --------------

// -------- SHALLOW COPY --------

/*
const person = {
    name: "arjun",
    class: 12,
    address: {
        pincode: 10034,
        street: "cannaugh place",
        houseNumber: "3435"
    }
} 

const copyPerson = {...person}
copyPerson.name = "utkarsh"
copyPerson.class = 11;
copyPerson.address.houseNumber = "9999"

console.log(person);
console.log(copyPerson);
console.log(person === copyPerson, 'comparing peson and copyperson');

*/

// TRICK TO HAVE DEEP COPY 

const person = {
    name: "arjun",
    class: 12,
    address: {
        pincode: 10034,
        street: "cannaugh place",
        houseNumber: "3435"
    }
} // abc@123
person.name = "abc"
console.log(person)

const stringPerson = JSON.stringify(person) // abc@1234
console.log(stringPerson, 'string')

const copyPerson = JSON.parse(stringPerson);

copyPerson.name = "utkarsh"
copyPerson.class = 11
copyPerson.address.houseNumber = 9999

console.log(copyPerson);










