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
1. Element Node: (h1, html , head, title, p ... etc )
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
    Properties to lookout for:
    
    id,
    
    className
    classList
    
    textContent
    innerHtml
    innerText


    // TODO: by students (SCROLLING)

    clientHeight
    clientLeft
    clientTop
    clientWidth
    
    offsetHeight
    offsetLeft
    offsetParent
    offsetTop
    offsetWidth



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
/*
const headingELement = document.getElementById("heading");
console.log(headingELement);

headingELement.innerText = "Hello world"
headingELement.style.color = "blue"
*/


// ------- TEXT -----------
//  1.  innerHtml -> DANGEROUS; DO NOT USE IT 
// if you want to use it Sanatize it. 
/*
const containerElement = document.getElementById("container");
containerElement.innerHTML =  ` <p>hey I am a paragrah</p> <div> container inside container </div>`;
*/

// 2. innerText -> the format is preserved

/*
const containerElement = document.getElementById("container");
containerElement.innerText =  ` hello I am paragraph 

2nd line 

3rd line    4th sentence

`;

*/


// textContent -> the format is not Preserved
/*
const containerElement = document.getElementById("container");
containerElement.textContent =  ` hello I am paragraph 

2nd line 

3rd line    4th sentence

`;

*/


// why innerHTML is Dangerous 
// containerElement.innerHTML = ` <script> mallaciouscode() </script>  `


// ------- CLass -----------

/*
const para2Element = document.getElementById("para2");
// para2Element.className = "green"; // It will replace the classname before 

// it will not replace old classes
para2Element.classList.add("green");

console.log(para2Element.classList.contains("sharma")); // true
console.log(para2Element.classList.contains("asdasdasdasdd")); // false
para2Element.classList.contains("sharma") && para2Element.classList.remove("sharma");

// toggle the class 
para2Element.classList.toggle("golf")
// para2Element.classList.toggle("golf")

*/


// --------------------- Addition (Create) --------------------------

/* ADDING DIV

// 1. document.createElement

const divElement = document.createElement("div");

// 2. Editing the element 
divElement.classList.add("green");
divElement.innerText = "hey I am a div element";

// 3. add the new element in the EXISTING DOM.

//--- WAY 1 APPEND: 
// document.body.append(divElement);


//-- WAY 2 Inner HTML: (RARE)

document.body.innerHTML = document.body.innerHTML + 
    ` <div class="green"> hey I am a div element </div>  `

console.log(document.body.innerHTML);

*/


/*
    ADDING LIST ITEM 

    const listOfStudentElement = document.getElementById("studentList");


    // 1. create an element 
    const utkarshLIlement = document.createElement("li");

    // 2. edit element 
    utkarshLIlement.innerText = "utkarsh"

    // 3 add new element in the dom

    // way 1: 
    // listOfStudentElement.append(utkarshLIlement);

    // way2: 

    // listOfStudentElement.innerHTML += `<li> utkarsh </li>`

*/

// --------------------- - WAYS of INSERTION (WAY 1 ) ----------------- 

/*
const listOfStudentElement = document.getElementById("studentList");

// 1. APPEND: add the item in the last INSIDE THE SELECTED LIST 

const utkarshStudent = document.createElement("li");
utkarshStudent.innerHTML = "utkarh";

listOfStudentElement.append(utkarshStudent);


// 2. PREPEND : add the item in the front (INSIDE THE SELECTED LIST )

const anushaStudent = document.createElement("li");
anushaStudent.innerHTML = "anusha";

listOfStudentElement.prepend(anushaStudent);


// 3. BEFORE: add an item BEFORE the Selected LIST (OUTSIDE THE LIST)

const headingOfStudent = document.createElement("h1");
headingOfStudent.innerHTML = "STUDENT LIST";

listOfStudentElement.before(headingOfStudent);


// 4. AFTER: add an item AFTER the Selected LIST (OUTSIDE THE LIST)

const outroElement = document.createElement("h5");
outroElement.innerHTML = "********  END OF STUDENT LIST ******";


listOfStudentElement.after(outroElement);


// TODO: student : READ ABOUT insertAdjacentHTML/Text/Element
// https://javascript.info/modifying-document#insertadjacenthtml-text-element

*/


// ---------------- DELETE -------------------
/*
const containerElement = document.getElementById("container");
containerElement.remove();
*/


// ------------ PERFORMANCE ----------------
// DOM Tree is created from top to bottom once again when we add a new item to the DOM.

// PROBLEM::: 
const studentListElement = document.getElementById("studentList");
const studentList = [
    'Leanne Graham', 
    'Ervin Howell', 
    'Clementine Bauch', 
    'Patricia Lebsack', 
    'Chelsey Dietrich', 
    'Mrs. Dennis Schulist', 
    'Kurtis Weissnat', 
    'Nicholas Runolfsdottir V', 
    'Glenna Reichert', 
    'Clementina DuBuque'
]
/*

for(let i = 0; i<studentList.length ;i++) {
    const studentName = studentList[i];
    // 1. create li element 
    const newStudentLiElement = document.createElement("li");
    // 2. edit element 
    newStudentLiElement.innerHTML = studentName;
    // 3. add this element in the dom
    studentListElement.append(newStudentLiElement);
}

// ANALYSIS : 10 TImes we are touching/EDITING DOM 
// THere are 10 re-renders (DOM TREE CREATION FROM TOP TO BOTTO)
*/


// SOLUTION: FRAGMENT

const fragmentElement = new DocumentFragment();

for(let i = 0; i<studentList.length ;i++) {
    const studentName = studentList[i];
    // 1. create li element 
    const newStudentLiElement = document.createElement("li");
    // 2. edit element 
    newStudentLiElement.innerHTML = studentName;
    // 3. add this element in THE FRAGMENT 
    fragmentElement.append(newStudentLiElement);
}

studentListElement.append(fragmentElement);

// ANALYSIS : 1 TImes we are touching/EDITING DOM 
