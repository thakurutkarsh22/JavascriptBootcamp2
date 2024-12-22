// ----------- OLD WAY TO CONSUME ------------


/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log("A") // 1 

fetch(pokeUrl) // 5 sec 
.then((response) => { // 3 
    console.log(response);

    fetch().then() // 5

    return response.json()
}) // 1sec
.then(data => { // 4
    console.log(data, 'data by promise')
})

console.log("B") // 2 
*/


// -------------------- NEW WAY TO CONSUME - async/await -----------------------------
/*  
    1. if you want to use async-await, you need to make sure that the function is AYSNC.
    2. every ASYNC function return a PROMISE.
    3. Syntatical sugar -> behind the scenes it converts to promise only.
*/
/*
console.log("a");
console.log("b");

async function fetchPokemon(){
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(url);// await is waiting for the PROMISE of fetch to resolve.
    const data = await response.json(); // await is waiting for the PROMISE of JSON() to resolve.
    console.log(data, 'data by async await');
    return 1;
}

fetchPokemon();
*/



// EXAMPLE 1: Convert this question to async-await 

const url = "https://api.kanye.rest/";

/*
fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data, 'lv2')
    const quote = data.quote;
    return quote;

})
.then(data => {
    // DISPLAYING
    const containerElement = document.getElementById("container");
    containerElement.innerText = data;
})
.catch(error => {
    console.log("level 3", error);
})
    */
    


// ANSWER

/*
// 1 work that is fettching the quote and returning
async function fetchKanyeQuote() {
    const url = "https://api.kanye.rest/";
    const response = await fetch(url);
    const data = await response.json();
    const quote = data.quote;
    // const {quote} = data;

    return quote;
}

// 1 type of work which is displaying
function displayQuotes(quote){
    const containerElement = document.getElementById("container");
    containerElement.innerText = quote;
}


// MULTIPLE THING -> Impure functon
async function main() {
    const quote = await fetchKanyeQuote();
    displayQuotes(quote);
}

main();

*/


// EXAMPLE 2: Fetch pokemon api and display : DO both promise and async-await
/*
const pokeAPUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(pokeAPUrl)
.then(resp => {
    const data = resp.json();
    return data;
})
.then(data => {
    const {name, order} = data;
    return {
        name, 
        order
    }
})
.then(data => {
    const {name, order} = data;

    const containerElement = document.getElementById("container");
    containerElement.innerText = name + " ::: " + order;
})
.catch(error => {
    console.log(error);
})
    */



// ASYNC AWAIT VERSION 

async function fetchApiINfo() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function display(data){
    const {name, order} = data;
    const containerElement = document.getElementById("container");
    containerElement.innerText = name + " ::: " + order;
}


// 1st way to consume - traditional way 

// fetchApiINfo()
// .then(data => {
//     throw new Error()
//     display(data);
// })
// .catch(error=> {
//     console.log(error);
// })


// 2nd way to consume - modern way  async await 

async function main() {
    try {
        const data = await fetchApiINfo();
        display(data);
    } catch(error){
        console.log(error);
    }
    
}

main()

