function abc(fn) {
    // will do its own work 
    // any api call 
    // any console 

    fn(); // in here I am calling back the fn after my work 
    // this whole concept is known as callbacks
}


abc(() => {})
// () => {} -> is known as callback function 


// DRAWBACK 
// 1. order of execution varies
// 2. Callback hell (pyramid)


/*
function google("read email", fun) {

    // 0. fetch email
    // 1. read Email


    function sendReplies("hey there whas up", (success | failure) => {
        
        function success() {
            // 
            function mailing() {
                
                function openReplies(){
                
                        function () {

                        
                        }
                
                } 
                openReplies()//5 
            }
            mailing() // 4
        }

        success() // 3


        failure() {

        }
        failure()

    } )

    sendReplies(); // 2


}



google("reading email") // 1
*/



/*
google("read email")
.then(send replies)
.then("success or failure")
.then("send more email")
*/


//---- BETTER TO USE ------->

// callbacks -> Promise -> async await