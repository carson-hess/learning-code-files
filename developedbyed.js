function first(){ // function declaration
    console.log(1);
}

function second(){
    setTimeout(() => {
        console.log(2)
    }, 0) // even though it's zero, it runs after the function third() below because second() is passed to the web APIs/callback queue instead of the call stack
}

function third(){
    console.log(3);
}

//callback = function that is a parameter

// call the functions
function second1(callback){
    setTimeout(() => {
        console.log(2)
        callback()
    })
}

first();
second1(third); // can create callback hell. Very hard to read and understand

// another example

function callbackHell(){
    setTimeout(() => {
        const data = { user: "Johnny Boy"}
        console.log(data);
        setTimeout(() => {
            console.log("Data has been updated")
        }, 1000)
    }, 500)
}
callbackHell();

// Promise = completion of an asynchronous function. Expectation of some kind of result or error

const promise = new Promise((resolve, reject) => {
    resolve('We did it!');
    reject('awww shit server is down boys'); // skips reject and the .catch() below because it works.
})

promise.then((message) => {
    console.log(message)
})

promise.catch((err) => {
    console.log(err);
})

// another example
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is my data from a server"), 2000)
})

promise1.then((res) => {
    console.log(res)
})

// fetch API returns a promise by itself

fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    return data.json() // returns to next .then() chained statement
}).then((jsonedData) => {
    console.log(jsonedData)
}).catch((err) => {console.log("Oh noooo something went wrong")

}).finally(console.log("Well, we tried")) // .finally() runs no matter what


// instead of callback hell, promises, can use async/await. Makes things more readable

async function getTodos(){
    try{
    /* instead of using fetch() followed by a bunch of .then() .catch() and .finally()
    method chaining, you declare a constant 
    Much more readable and easier to understand */
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json() // just keep adding awaits when you want to do things
    console.log(data.title)
    } 
    catch(err){
        console.log("Something went wrong...")
        console.log(err)
    }
} // await = some code that runs asynchronously

// write out function body, add async and await, then wrap it all in try/catch

getTodos();