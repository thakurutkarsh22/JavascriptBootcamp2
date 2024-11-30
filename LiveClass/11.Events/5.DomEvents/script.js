
// QUESTION: If I say no to put Script tag in the last and Using of async and defer 
// Then How I can Select a colorContainer ? 
// ANSWER DOMContentLoaded


// 1. DOMContentLoaded :this event is fired by the browser when 100% of the DOM is created (HTML).
/*
    the gurantee of Image load is not there (image might take more time)
    Only gurantee is that DOM treee (HTML) is created 100%.
*/

/*

const colorContainer = document.getElementById("colorContainer");

    console.log(colorContainer, 'colorContainer outside')


document.addEventListener("DOMContentLoaded", () => {
    const colorContainer = document.getElementById("colorContainer");

    console.log(colorContainer, 'colorContainer inside DOMContentLoaded');
})

*/


// 2. Load: when external resource (Image, video audio css etc ...) are loaded 100% then this event will be launched.
/*
window.addEventListener("load", () => {
    console.log("after the MEDIA loaded")
})

*/


// 3. beforeunload: when the page is getting destroyed just before that browser sends this event, so that we can save/cleanup things 
/*
window.addEventListener("beforeunload", () => {
    // CLEANUP 
    localStorage.setItem("secret", "my name is xyz");
})
*/