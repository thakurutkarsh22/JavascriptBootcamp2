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
containerTwoElement.addEventListener("click", (event) => {
    console.log(event.target) // value
    console.log("hey I am container and I am clicked")
})

