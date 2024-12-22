
// PROMISE: 
/**
 *  1. PRomise are eager in nature
 * 
 */








// Example 1: 
/*
const promise = new Promise((res, rej) => {
    console.log("eager promise")
    res(1);
})
console.log("A");

setTimeout(() => {
    console.log("c")
}, 0)

promise.then(data => console.log(data));


console.log("b")

// Answer: eager promise, a, b, 1, c
*/

// Example 2: 

const promise = new Promise((res, rej) => {
    
    console.log("eager promise")
    setTimeout(() => {
        res(1);
    }, 5000);
    
})
console.log("A");
setTimeout(() => {
    console.log("c")
}, 0)
promise.then(data => console.log(data));
console.log("b")

// Answer : eager promise, a, b, c, 1