/*
    What is Event ? 
        An event is a signal from the hardware to the respective apps/destination.

    How we can generate event in an browser? 
        ANything we do in browser (click, scroll, hover, zoomin zoom out, varying screen size, click, type) in 
    and event. 


    BROADER Steps 

    User -> Action (click) -> Browser Window -> EVent (type) -> Destination. (Any where js, html).


    Event is Broadcasted everywhere.

*/


// ----------------- MOUSE EVENT ----------------------

// 1. Click 

/*
const buttonElement = document.getElementById("button");


buttonElement.addEventListener("click", () => {
    console.log("button clicked")
})
*/

// 2. Mouse Over 

/*
const containerElement = document.getElementById("container");
console.dir(containerElement);

containerElement.addEventListener("mouseover", () => {
    console.log("containerElement mouseover")

    containerElement.style.background = "red"


})
*/


// 3. Mouse Out 

/*
containerElement.addEventListener("mouseout", () => {
    console.log("containerElement mouseout")

    containerElement.style.background = ""
})
*/


// 4. Double Click
/*
containerElement.addEventListener("dblclick", () => {
    containerElement.style.background = "green"
})
*/


//  --------------- KEYBAORD EVENTS ------------

const inputboxElement = document.getElementById("inputbox");

inputboxElement.addEventListener("keydown", () => {
    console.log("key down" )
})

inputboxElement.addEventListener("keyup", () => {
    console.log("key up");
})
