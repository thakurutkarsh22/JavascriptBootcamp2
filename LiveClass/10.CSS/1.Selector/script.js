
/*
    3 ways to Give styling 

    1. Inline styling -> Style ATTRIBUTE
    2. using <style> tag
    3. EXTERNAL CSS (styles.css)


    // USE : 
    WHY DO WE NEED EXTERNAL CSS ? 
    we can use common CSS in multiple files 
    Change effort is less in future development


*/


//  -------------------- -------------------- CSS SELECTORS ------------------------------------------ 


// --------------- 1. DIRECT SELECTORS --------------- ---- 

// 1. Tag Selector 
/*
    p {}
    h1 {}
    div {}

*/

// 2. ID Selector 
/*
    #heading {
    }
*/

// 3. Class selector

/*
    .paragraph {
    }


*/



// ---------------------- PRECEDENCE RULES ----------------------

// 0. !important -> DO NOT USE THIS (MOSTLY TRY TO AVOID ) -> 
// 1. Inline Styles: <h1 style="color:  rebeccapurple;">
// 2. Id selector:  #heading
// 3. Class, pseudoclass, attributeSelect: .heading
// 4. Elements: h1 , p , 


// IF 2 rules are fighting in the same level
// the rule that is after will always win 

/*
    .paragraph {
   color: red; 
}


.sports {
    color: yellowgreen;
}

*/

// SPOTS WILL WIN HERE



// ------------- 2. Combinator Selector --------------

// 1. Decendant Selector (space) 
// I want all para that is inside div to be red color 
/*
    div p {
    color: red;
}

*/

// 2. child ( > )


// 3. Ajecent Sibling (+)


// 4. all sibling (~)
