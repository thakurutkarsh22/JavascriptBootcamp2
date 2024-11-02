// Things that we have noticed
// 1. chrome works inside ram, when we open more tabs the ram is consumed.
// 2. Ram only stores key value pairs (Objects)
// 3. Window object talks about that particular tab. (Window object is a GLOBAL object)


// A browser tab consists of 
/*
    1. DOM: Document object Model (HTML)
    2. JS: language for math and function
    3. BOM: Browser object model -> it is a collection of function and variables that is provided by the browser so that 
    it can help the program (like calling youtube server through fetch());
*/

// ---------------- DOM TREE ----------------------

/*
// Dom visualizer Link: https://bioub.github.io/dom-visualizer/


Question: why tree format of DOM? 
Answer: bec it stored relationships.

TYPES of NODES: 
1. Element Node: (h1, html , head, title ... etc )
2. Text Node: (real text and Blank space)
3. Comment Node: (COmments inside the HTML)
*/

// ---------- CRUD operations on the DOM TREE -----
/*
    C- create
    R- read
    U- Update
    D- Delete

*/

/*
    Properties to lookout for 
    id,
    className
    classList
    textContent
    innerHtml
    innerText
*/

// -------------------------- SELECTORS (getting the element, READING) ------------------

// 1. getElementByID: (Very Very fast)
/*
const headingELement = document.getElementById("heading");
console.dir(headingELement);
*/

// 2. getElementsByClassName

/*
const golfElements = document.getElementsByClassName("golf");
console.log(golfElements);
// golfElements -> HTMLCollection -> Array like data structure
*/

// 3. getElementsByTagName:

/*
const allParagraphsELements = document.getElementsByTagName("p");
console.log(allParagraphsELements);

//allParagraphsELements -> HTMLCollection -> Array like data structure

*/


// CSS SELECTORS (SLOW in nature)

//4. querySelector -> we have to give CSS selector 
// it will only select the top most (1st) element

/*
const headingElement = document.querySelector("#heading")
console.log(headingElement);

const paraElement = document.querySelector(".sharma");
console.log(paraElement);


*/


// 5. querySelectorAll -> it will give the list of elements 

/*
const paraElements = document.querySelectorAll(".sharma");
console.log(paraElements);

paraElements -> NodeList -> array like element 
*/



// TODO: HTMLCollection vs NodeList


// -------------------------------- EDITING (update) --------------------------

const headingELement = document.getElementById("heading");
console.log(headingELement);

headingELement.innerText = "Hello world"
headingELement.style.color = "blue"