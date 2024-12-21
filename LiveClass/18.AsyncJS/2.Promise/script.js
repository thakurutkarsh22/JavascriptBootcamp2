// PROMISES. 

/***
 * Promise is a placeholder for a future value
 * 
 * State of Promise -> 
 *  Pending -> when we are waiting for the future value to arrive 
 *  Fulfilled/resolved -> When the future value has arrived. 
 *  Rejected -> when Error Happens.
 */



// EXAMPLE 1: 
/*
console.log("a");
const url = "asdsadsadasdaads";
const promise = fetch(url)

console.log(promise);
console.log("b")

// Answer
// a <promiseObj> b

*/


// EXAMPLE 2: 

/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(pokeUrl) // 5 sec 
.then((response) => {
    console.log(response);
    return response.json()
}) // 1sec
.then(data => {
    console.log(data, 'data')
})

Answer:
 // ResponseObject, data


*/


// EXAMPLE 3: 
/*
const pokeUrl = "asdsadsadasda";

fetch(pokeUrl) // 5 sec 
.then((response) => {
    console.log(response);
    return response.json()
}) // 1sec
.then(data => {
    console.log(data, 'data')
})
.catch(error => {
    console.log("handling the error")
})
.catch()
*/



/*
try {

} catch(errr){

} finally {

}
*/


// --------------------- HANDLER -----------------
/**
 *  .then -> Consumes data
 *  .catch -> Consumes Error
 *  .finally -> it will run in the last after the then block and catch block (it is used for cleaning purpose)
 */

// EXAMPLE 4: 

/*
console.log("a")

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(pokeUrl) // LEVEL 0
.then((response) => { // LEVEL 1
    console.log(response, 'level 1');
    return response.json()
}) // 1sec
.then(data => { // LEVEL 2
    console.log(data, 'level 2')
    return data;
})
.then(data => { // LEVEL 3
    console.log(data, 'level 3') 
    return 100;
})
.then((data) => { // LEVEL 4
    console.log(data, 'level 4')
})
.catch(error => { // LEVEL 5
    console.log(error, 'LEVEL 5')
})
.finally(() => {// LEVEL 6
    console.log("finally", 'LEVEL 6')
})

console.log("b")

*/


// EXAMPLE 5:
/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(pokeUrl) // LEVEL 0
.catch(error => { // LEVEL 1
    console.log(error, 'LEVEL 1')
})
.then((response) => { // LEVEL 2
    console.log(response, 'level 2');
    return response.json()
}) // 1sec
.then(data => { // LEVEL 3
    console.log(data, 'level 3')
    return data;
})

// ANswer
level 2, level 3

*/



// ----------------------------- PROMISE CHAINING ----------------------------------
/**
 * ALGO
 * 1. Whatever Data or Error we are returning from any X level, we will get that data/error or we will consume that data/error at 
 *   (x+1 or x+2 or x+n)th level.
 * 2. At (x+1 or x+2 or ... x+n) th level I will ask a question ? can you handle the data/error, according to that we will 
 * either handle it or MOVE to next LEVEL.
 * 
 * 3. Data/Error can be handled by THEN BLOCK
 * 4. Error Can also be handled by CATCH BLOCK
 */

// // EXAMPLE 6:
/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log("A");

fetch(pokeUrl) 
.catch(error => { 
    console.log(error, 'LEVEL 1')
})
.then((response) => {
    console.log(response, 'level 2');
    return response.json()
}) // 1sec
.then(data => { 
    console.log(data, 'level 3')
    return 100;
})
.then(data => {
    console.log(data, 'level 4')
})
.then(data => {
    console.log(data, 'level 5')
    return data;
})
.catch(error=>{
    console.log(error, 'level 6')

})

console.log("B");


// Answer 
// a, b, ResponseObj Level2, DataObject level3, 100 level 4, undefined level 5

*/



//  ----------------- ERROR HANDLING ----------------------------------

// 1. multiple catch blocks

// EXAMPLE 7:
/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto kajsdhakdjhaskdjhaskdjhaskj";

console.log("A");

fetch(pokeUrl)
.then(response => {
    console.log('level 1')
    const data = response.json(); // this line will give me some error, we are trying to convert invalid data into JSOn
    return data;
})
.catch((error) => {
    console.log('level 2 error', error)
})
.then((data) => {
    console.log('level 3', data);
    return 100;
})
.then((data) => {
    console.log('level 4', data);
})
.catch(error => {
    console.log('level 5 error', error)
})

console.log("B");

// Answer: 
// A, B, Level1, Level 2 error, level 3 undefined, level4 100, 
*/


// Example 8: 
/*
console.log("A");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
.then(response => {
    console.log('level 1')
    const data = response.json(); 
    return data;
})
.then((data)=> {
    console.log('level 2 data')
    return data;
}, (error) => {
    console.log('level 2 error')
    return "error";
})
.then(data => {
    console.log('level 3 data')
    console.log(data);

    // MOCKING ERROR 
    throw new Error("utkarsh created this error");
})
.then(data => {
    console.log('level 4 data', data)
    return 1;
})
.catch(eror => {
    console.log('level 5 error', eror)
})

console.log("B");

// Answer: A, b, level1, level2 data, level3 data, Level 5 error;
*/


// EXAMPLE 9: 
/*
console.log("A");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
.then(response => {
    console.log('level 1', response.status)
    const data = response.json(); 
    return data;
})
.then((data)=> {
    console.log('level 2 data')
    return 10;
}, (error) => {
    console.log('level 2 error')
    return "error";
})
.then(data => {
    console.log('level 3 data', data)
    // MOCKING ERROR 
    throw new Error("utkarsh created this error");
})
.then(data => {
    console.log('level 4 data', data)
    return 1;
}, (err) => {
    console.log('level 4 err', err)
})
.catch(eror => {
    console.log('level 5 error', eror)
})
.then(data => {
    console.log("level 6", data);
})

console.log("B");

// Annswer: A, b, level 1 200,  level 2 data, level 3 data 10, level 4 err utkarsh created this error, level 6 undefined.
*/



// EXAMPLE 10: 
/*
console.log("A");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
.then(response => {
    console.log('level 1', response.status)
    const data = response.json(); 
    return data;
})
.then((data)=> {
    console.log('level 2 data')
    throw new Error("error at lv2");
    return 10;
}, (error) => {
    console.log('level 2 error')
    return "error";
})
.then(data => {
    console.log('level 3 data', data)
    // MOCKING ERROR 
    throw new Error("utkarsh created this error");
})
.then(data => {
    console.log('level 4 data', data)
    return 1;
}, (err) => {
    console.log('level 4 err', err)
})
.catch(eror => {
    console.log('level 5 error', eror)
})
.then(data => {
    console.log("level 6", data);
})

console.log("B");

// Answer : A, B , level 1 200, level 2 data, level 4 err : error at lv2, lv6 undef.
*/