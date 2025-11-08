
// synchronous programming

function firstTask() {
    console.log("first task completed");
}


function secondTask() {
    console.log("second task completed");
}



// asynchronous programming

// setTimeout(()=>{
//     console.log("Inside set timeout (after 2 seconds)");

// } , 2000)  

// firstTask();
// secondTask();


// //CallBacks --> Callback is a function as an argument to another function  (synchronous callback)


// function greet(name) {
//     console.log("Hello " + name);
// }

// function farewell(name) {
//     console.log("Goodbye " + name);
// }

// function processUserInput(gb) {
//     // abc("John Doe");
//     gb("John Doe");
// }



// processUserInput(farewell);

// // Asynchronous callback



// setTimeout(() => {
//     console.log("hello....");
// }, 5000);


// //callback hell  --> Nested callbacks stacked below one another forming a pyramid

// setTimeout(() => {
//     console.log("step 1 completed");
//     setTimeout(() => {
//         console.log("step 2 completed");
//         setTimeout(() => {
//             console.log("step 3 completed");
//         }, 1000);
//     }, 1000);
// }, 1000);


// // Promises --> to handle asynchronous operations more effectively and avoid callback hell

// let myPromise = new Promise((resolve, reject) => {
//     let workDone = false;

//     if (workDone) {
//         resolve("Work completed successfully");
//     }
//     else {
//         reject("Work not completed");
//     }

// });

// myPromise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));



// const p = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(p);



// fetch("https://jsonplaceholder.typicod.com/posts")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("Data received (then): ", data);
//     })
//     .catch(error => {
//         console.log("There has been a problem with your fetch operation: ", error);
//     });

// Async/Await --> syntactic sugar over promises

// async function fetchUsers() {

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }

//         const data =await response.json();
//         console.log("Data received: ", data);
//     }
//     catch (error) {
//         console.log("There has been a problem with your fetch operation: ", error);
//     }

// }


// fetchUsers();


