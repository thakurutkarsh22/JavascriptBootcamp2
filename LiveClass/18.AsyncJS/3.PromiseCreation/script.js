// ---------------- PROMISE CREATION ------------------

// WAY 1: Class 

/*
const utkarshFetch = new Promise((resolve, reject) => {
    const url = "xyzURL";

    setTimeout(() => {
        const data = 20; // I am considering this data from server.
        // TO give the Data we need to RESOLVE the promise

        if(data === 20) {
            resolve(data)
        } else {
            // reject("Data is corrupted")
        }

        
    }, 4000)

});

console.log("hello world", utkarshFetch);


// CONSUME A PROMISE 

fetch();

utkarshFetch
.then(data => {
    console.log("level 1", data);
})
.catch(error => {
    console.log("level 2 error")
})

*/

// Fetch Behind the scenes IDEA ---- 

fetch()


function myFetch(url, options) {
    const promise = new Promise((res, rej) => {
        // 1. Fetch the data from server 
        // const xhttpReq = XMLHttpRequest();
        // const data = xhttpReq.open("GET", url);

        const error = false; // somehow this will be changed acc to server 

        // 2. WRAP the data in response Object
        const responseObj = {
            status: 200,
            url : url,
            data: [1,2,3,4],
            type: "sada",
            ok: true
        }

        // 3. Resolve or reject the promise

        if(!error) {
            res(responseObj);
        } else {
            rej("server time out")
        }
    });
    return promise;
}


myFetch("someUrl")
.then(resp => {
    console.log("lv1", resp)
})



// WAY 2: Async - await . 
