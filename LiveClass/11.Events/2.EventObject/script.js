

// --------------- MOUSE EVENTS -------------

const buttonElement = document.getElementById("button");


buttonElement.addEventListener("click", (event) => {
    console.log("button clicked")

    console.log(event.target === buttonElement, 
        'through this we prove that button element and event.target are SAME');

    console.log(event);
})

// type : property talks about the type of event.
// Target : property represents the element on which the ACTION (click, keyup etc...) has happened.



//  --------------- KEYBAORD EVENTS ------------

const inputboxElement = document.getElementById("inputbox");


inputboxElement.addEventListener("keydown", (event) => {
    console.log("key down" )

    const whichKeyPressed = event.key;
    console.log("key down", whichKeyPressed );

    console.log(event)
})

inputboxElement.addEventListener("keyup", () => {
    console.log("key up");
})
