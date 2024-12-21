// ----------- OLD WAY TO CONSUME ------------


/*
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log("A") // 1 

fetch(pokeUrl) // 5 sec 
.then((response) => { // 3 
    console.log(response);
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

    const containerElement = document.getElementById("container");
    containerElement.innerText = quote;

})
.catch(error => {
    console.log("level 3", error);
})
    */


// 1 work that is fettching the quote and returning
async function fetchKanyeQuote() {
    const url = "https://api.kanye.rest/";
    const response = await fetch(url);
    const data = await response.json();
    const {quote} = data;

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

