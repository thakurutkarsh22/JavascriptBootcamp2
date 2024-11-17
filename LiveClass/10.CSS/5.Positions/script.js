// POSITIONS

/*
    5 types of position 
    1. Static (DEFAULT) 
    2. Relative
    3. Absolute
    4. Fixed
    5. Sticky





    // if you want to change the position 
    // these properties work everywhere other than STATIC POSITION. 
    top left right bottom z- index : 10px

    POSITIONING ATTRIBUTES: top left right bottom z- index


    document flow: arrangement of elements that we have added 

    IMP NOTE: if you want to give an element relative and absolute position MAKE SURE 
    ITS PARENT HAVE ANY OTHER POSITION THAN STATIC, (parent would be referenced)

    NOTE: IF there is no POSITION to parent or PARENT then 
        BODY will the REFERENCED and body is (STATIC POSITION)

*/


/*
    1. ABSOLUTE: 

    -> it allows to place ELEMENT exactly where WE want (Move around)
    -> POSITIONING ATTRIBUTES will set the location for us
    
    -> IMP *** whatever POSITIONING ATTRIBUTES we are giving that position will be relative 
            to PARENT 
    
    -> Element is TAKE OUT FROM THE DOCUMENT FLOW
    -> elements below will TAKE THE BLANK SPACE. 


    REFERENCE: body or Parent container
    
*/

/*
    2. Relative: 

    -> Relative position orginally is relative to its ORIGINAL Position (LIKE IN DOCUMENT FLOW)
    -> POSITIONING ATTRIBUTES will set the location for us

    -> with this the element is NOT out of the DOCUMENT FLOW.

    -> they take static position of the element as the reference.

    -> MOSTLY Parents are given Relative Property 

     REFERENCE: STATIC POSITION
*/

/*

    3. FIXED: 

    -> used for headers, top bars etc.
    -> OUT FROM DOCUMENT FLOW

    -> the elements are positioned relative to VIEWPORT, or BROWSER WINDOW

    -> when we top any  POSITIONING ATTRIBUTES it will try to position relative to VIEWPORT


    -> DIRECT PARENT do not have effect.

    REFERENCE: viewPORT

*/

/*
    4. Sticky 


    -> COMBINATION of FIXED POSITIONS and RELATIVE POSITION
    
    -> STICKY is RELATIVE POSITION until you scroll and get to the STICKY ELEMENT (top view port encountered)

    -> It will behave as FIXED POISITON the moment top viewport is encountered by the element and till ITS PARENT 
    ELEMENT BOUNDARY (parent || body)


    REFERENCE: parent or BODY 




*/
