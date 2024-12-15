// Question: if you want to say hello after 5 seconds on landing one the page. How can you implement



// alert('hello!!');


// SOlution : SetTimeout 
// SetTimeout takes time in milli seconds. 5000 ms -> 5seconds
// setTimeout waits for 5 sec min (GURANTEED) and then it executed the CALLBACK function () => {}.
/*
setTimeout(() => {}, 5000)


setTimeout(() => {
    alert('hello after 5 seconds');
}, 5000);

*/


/*
    MACROTASK QUEUE: Handles the Callbacks (setTimeout, setInterval)
    MICROTASK Queue: Handles promises.
*/

// EXAMPLE 1: 

/*
console.log('a');
console.log('b')


    ANSWER
    a
    b

*/

// EXAMPLE 2: 

/*
console.log("a");

setTimeout(() => {
    console.log('b');
}, 2000)


// ANSWER
// a, b (after 2 seconds)

*/

// Example 3: 

/*

console.log("a");

setTimeout(() => {
    console.log('b');
}, 2000)

console.log('c')

// Answer 
// a, c, b 

*/

// Example 4: (HYPOTHETICAL) : each console.log takes 0.5 sec to execute.
/*
console.log("a");

setTimeout(() => {
    console.log('c');
}, 2000);

console.log("b"); // 0.5 ()
console.log("d"); // 0.5 
console.log("e"); // 0.5
console.log("f"); // 0.5
console.log("g");
console.log("h");
console.log("i");

// EJOF
// ANSWER
// a, b, d, e, f g, h, i , c
*/


// ------------------------ Algorithm Of Event Loop -----------------------
/*
    1. Executor at SetTimeout - as soon as it sees setTimeout/setInterval 
        1.1 It send the CallbackFunction to the web API section.
        1.2 It starts the countdown for the delay (in the web API)
        ---- LiveClass/18.AsyncJS/1.Basic/SS/1.png ----

    2. Event loop ask the question to the stack (every 200 ms)
        2.1 Stack Are you Empty ? NO -> DO nothing
        2.2 Stack Are you Empty ? YES -> (We have to ask Questions from the Queues (Micro and Macro) )
        -------- LiveClass/18.AsyncJS/1.Basic/SS/5.png --------- 

    3. WebAPi Section - as soon as the clock becomes 0, the associated Callabck function is thrown out from the memory 
        to MACROTASK QUEUE.
        ----------- LiveClass/18.AsyncJS/1.Basic/SS/5.png --------------

    4. Again event loop will ASk quesiton 
        4.1 Stack Are you empty ? NO (Nothing happes)
        4.2 Stack Are you Empty ? YES -> (We have to ask Questions from the Queues (Micro and Macro) )

    5. If Stack is Empty && tasks are there in the queue, pop the task from the queue and execute it.
      -------- LiveClass/18.AsyncJS/1.Basic/SS/5.png --------- 
      ------ LiveClass/18.AsyncJS/1.Basic/SS/6.png ----------
*/


// Example 5: 

/*
console.log("a");

setTimeout(() => {
    console.log("c")
}, 2000);

setTimeout(() => {
    console.log("d")
}, 2000);

setTimeout(() => {
    console.log("e")
}, 2000);

console.log("b")
*/

// Answer: 
// a b c d e


// Example 6: 

/*
console.log("a");

setTimeout(() => {
    console.log("c")
}, 5000);

setTimeout(() => {
    console.log("d")
}, 2000);

setTimeout(() => {
    console.log("e")
}, 1000);

setTimeout(() => {
    console.log("f")
}, 3000);

console.log("b")

// answer:
// a b e d f c 

*/


// Example 7: 
// NOTE: MIN setTimeout will wait for 1ms (even though you have given 0 ms or -ve milli seconds)

/*
console.log("a");

setTimeout(() => {
    console.log("c");
}, 0)

console.log("b")

// Answer 
// a b c

*/

// --------- See youtube video for event loop: https://www.youtube.com/watch?v=8aGhZQkoFbQ --------- 

/*
const id = setTimeout(() => {
    console.log("c");
}, 5000);

console.log(id, 'id of setTimeout')

clearTimeout(id);
*/

// ------------------ SetInterval/ clearInterval --------------------------

/*
console.log("a");

const intervalId = setInterval(() => {
    console.log("hello");
}, 2000);

console.log("b")

setTimeout(() => {
    clearInterval(intervalId)
}, 7000);
*/

// ------------------------- Intelligernt/Tricky Questoin -----------------

// Example 8: 

/*
for(let i=0; i<5 ;i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// Answer: 
//  0 1 2 3 4
----- LiveClass/18.AsyncJS/1.Basic/SS/TrickIntelligentQUES1.png ------- 
*/


// Example 9: 

/*
for(var i=0; i<5 ;i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// Answer:
// 5 5 5 5 5
-------------- LiveClass/18.AsyncJS/1.Basic/SS/TrickIntelligentQUES2.png ------------ 
*/

// EXAMPLE 10: SOLUTION for Problem 9 without using let.
/*
for(var i=0; i<5 ;i++) {
    
    ((val) => {
        setTimeout(() => {
            console.log(val);
        }, 0);
    })(i)
}

// answer
// 0 1 2 3 4
*/


// ((val1, val2) => {
//     console.log("hello", val1, val2 );
// })(2, 1)
