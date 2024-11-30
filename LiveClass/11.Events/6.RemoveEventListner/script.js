const targetContainerElement = document.getElementById("targetContainer");

const colorContainer = document.getElementById("colorContainer");

const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");


const redClickHandler = () => {
    targetContainerElement.style.background = "red"
    targetContainerElement.innerHTML = `Selected color: red`
}

const greenClickHandler = () => {
    targetContainerElement.style.background = "green"
    targetContainerElement.innerHTML = `Selected color: green`
}

blueElement.addEventListener("click", () => {
    targetContainerElement.style.background = "blue"
    targetContainerElement.innerHTML = `Selected color: blue`
    
})


redElement.addEventListener("click", redClickHandler)

greenElement.addEventListener("click", greenClickHandler);



// HACKY CLEANUP 

setTimeout(() => {
    redElement.removeEventListener("click", redClickHandler);
}, 5000)



window.addEventListener("beforeunload", () => {
    // CLEANUP 
    redElement.removeEventListener("click", redClickHandler);
})