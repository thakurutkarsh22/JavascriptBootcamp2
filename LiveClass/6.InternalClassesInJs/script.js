const person = {
    name: "utkarh",
    class: 9,
    rollnumber: 42
}


// --------------- BAsic Class Object -----------------

// OBject class -> any object you create in any LANGUAGE it always is extended by the Created object.


const keyValuePair = Object.entries(person);
console.log(keyValuePair, 'keyValye Pair');

const onlyKeys = Object.keys(person);
console.log(onlyKeys, 'onlyKeys');


const onlyValues = Object.values(person);
console.log(onlyValues, 'onlyValues');

