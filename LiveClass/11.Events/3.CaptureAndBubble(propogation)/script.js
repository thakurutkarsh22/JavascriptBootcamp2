/*
    3 Phases of Travelling 
    1. Capture Phase: event is looking for the culprit element due to whom the event was created.
    2. Target Phase: this is the time when we actually find the element.
    3. BUBBLE Phase: this is the phase in which the event object travels up to die.


    SEE IMAGE: 
    LiveClass/11.Events/3.CaptureAndBubble(propogation)/CaptureandBubble.png
    LiveClass/11.Events/3.CaptureAndBubble(propogation)/CapturenBubbleWithEventObj.png

*/



const containerTwoElement = document.getElementById("container2");

// BUBBLE  PHASE ADD EVENT LISTNER 
/*
containerTwoElement.addEventListener("click", (event) => {
    console.log(event.target) // value
    console.log("hey I am container and I am clicked")
})

*/

/*
    BUBBLING EVENT LISTNER (right side)

    childElement.addEventListener("click", (event) => {
        console.log("child clicked");
    })

    CAPTURE EVENT LISTNER  (left side)
    
    childElement.addEventListener("click", (event) => {
        console.log("child clicked");
    }, true)


*/



const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
const gprandParentElement = document.getElementById("grandparent");


// ---------- EXAMPLE  ------------

/*
// Question1: click on child 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
})

// Answer : child clicked

*/

/*
// Question2: click on child 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
})

gprandParentElement.addEventListener("click", (event) => {
    console.log("grandparent clicked");
})

// Answer : child clicked
// grandparent clicked"
*/


/*
// Question3: click on Parent 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
})

gprandParentElement.addEventListener("click", (event) => {
    console.log("grandparent clicked");
})

// Answer : grandparent clicked

*/

/*
// Question4: click on CHILD 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
}, true)

gprandParentElement.addEventListener("click", (event) => {
    console.log("grandparent clicked");
}, true)

// Answer : grandparent clicked
// child clicked
*/


/*
// Question5: click on parent 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
})

parentElement.addEventListener("click", () => {
    console.log("parent clicked")
})

gprandParentElement.addEventListener("click", (event) => {
    console.log("grandparent clicked");
}, true)

// Answer : Grandparent clicked
// parent  clicked

*/

/*
// Question6: click on child 

childElement.addEventListener("click", (event) => {
    console.log("child clicked");
}, false)

parentElement.addEventListener("click", () => {
    console.log("parent clicked")
}, true)

gprandParentElement.addEventListener("click", (event) => {
    console.log("grandparent clicked");
}, false)

// Answer : parent clicked , child clicked grandparent clicked

*/