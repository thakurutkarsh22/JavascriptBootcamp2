// ----------- Creation of Arrays  --------------

/*
const arr1 = [1,2,3,4,5];
const arr2 = new Array();
*/

// -------------- Equating Arrays -----------------
/*
const arr1 = [1,2,3,4,5]; // abc@123
const arr2 = [1,2,3,4,5] // abc@111
console.log(arr1=== arr2); // false

const arr3 = arr1; // abc@123
console.log(arr2 === arr3);  // false 
console.log(arr3 === arr1);  // true
*/

// --------------- Operation in Arrays ---------------
// 2 types 
// 1. In-place -> changing the object in the same address. (Without creating a new OBJECT).
// 2. Not In-Place -> It creates a new ELEMENT. 


// 1. Push: In-place ::: It adds a new element in the last of the array.
/*
const arr = [1,2,3,4,5]; // abc@123

console.log(arr, "original array");
console.log(arr.length)

const newLengthOfArray = arr.push(15);

console.log(arr, "after pushing array");
console.log(arr.length, newLengthOfArray)
*/

// 2. POP: In-place ::: It deletes last element from array

// 3. SHIFT: UNSHIFT: In-place : It adds/removes element from the start of the array.


// 4. SLice : NOT IN- PLACE ::: Returns a copy of a section of an array.

/*
const arr = [10,20,30,40,50] // abc@123

const sectionOfArray = arr.slice(1, 4); // abc@111

console.log(arr, sectionOfArray);
console.log(arr === sectionOfArray); // false

*/

// 5. Splice: In-Place - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

/*
const arr = [1,2,3,4,5];
arr.splice(0,2);
console.log(arr);
*/

// 6. sort -> IN-Place ::: sorts the elements inside the array in INCreating or DECreasing fashion.
// BY default sort does DICTONARY SORTING.


/*
const arr = [9 ,3,7,2,1,8,5,4]; // abc@123
console.log(arr)

const newArr = arr.sort();

console.log(newArr)
console.log(newArr === arr);
*/

/*
    DICTONARY SORT 

const arr = [3,1000, 1,50, 18, 1000000, 20, 2, 18, 90, 9];
arr.sort()

console.log(arr);

// [1, 1000, 1000000, 18, 18, 2, 20, 3, 50, 9, 90];

*/


/*

const arr = [3,1000, 1,50, 18, 1000000, 20, 2, 18, 90, 9];

// ASC
arr.sort( (a,b) => {
    return a-b
})


function decOrder(a,b) {
    return b-a
}


// DEC
arr.sort( decOrder ) // NOTE: we should use arrow function here
console.log(arr);


// TRY TO USE ARROW FUNCTION AS CALLBACK FOR Correctness


*/

