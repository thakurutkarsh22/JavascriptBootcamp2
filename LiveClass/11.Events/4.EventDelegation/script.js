

const targetContainerElement = document.getElementById("targetContainer");

const colorContainer = document.getElementById("colorContainer");

const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");


/*
redElement.addEventListener("click", () => {
    targetContainerElement.style.background = "red"
    targetContainerElement.innerHTML = `Selected color: red`
})

greenElement.addEventListener("click", () => {
    targetContainerElement.style.background = "green"
    targetContainerElement.innerHTML = `Selected color: green`
})

blueElement.addEventListener("click", () => {
    targetContainerElement.style.background = "blue"
    targetContainerElement.innerHTML = `Selected color: blue`
    
})

yellowElement.addEventListener("click", () => {
    targetContainerElement.style.background = "yellow"
    targetContainerElement.innerHTML = `Selected color: yellow`

})
*/


// COST (How many event listner you have)-> 4 units 


// IS THE ABOVE TECHNIQUE EFFICIENT ? 
/*
    adding addEventListener is expensive task we should have less no of event lisner.

*/



// SOLUTOIN TO ABOVE PROBLEM 

/*
colorContainer.addEventListener("click", (event) => {
    const targetElement = event.target;

    const color = targetElement.id;

    targetContainerElement.style.background = color

    targetContainerElement.innerHTML = `Selected color: ${color}`
})

*/ 
