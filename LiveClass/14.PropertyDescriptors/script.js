// we can do CRUD operation on the proerties of the Object

// AGENDA 

/*
    DISCRIPTOR PROPERTIES

    value: "utkarsh",
    writable: true,
    enumerable: true,
    configurable: true


    1. Writable: if True it mean we can change the value of KEY otherwise not.
    2. Enumerable: if true, we can get this property inside for-in loop
    3. Configurable: if true you can delete the KEY

*/



// 1. we want to protect out object properties (changed deleted etc...).



const obj = {
    name: "utkarsh007",
    sandard: 12,
    rollNumber: 99
}

const nameDescriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescriptor)

// {
//     "value": "utkarsh007", // this stores the value that the KEY is storing.
//     "writable": true, // can I change the value of "name" KEY 
//     "enumerable": true,
//     "configurable": true
// }




obj.name = "aeroplane"
console.log(obj)



Object.defineProperty(obj, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});


const nameDescriptorAfterWrtableFalse = Object.getOwnPropertyDescriptor(obj, "name");

console.log(nameDescriptorAfterWrtableFalse, 'nameDescriptorAfterWrtableFalse')


// THIS OPerATION will not work
obj.name = "priyanka"
console.log(obj);
