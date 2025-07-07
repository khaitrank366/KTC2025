// Callback Hell
// => hard to read, maintain, and debug
console.log("Start");

// setTimeout(() => {
//     console.log("Task 1");
//     setTimeout(() => {
//         console.log("Task 2");
//         setTimeout(() => {
//             console.log("Task 3");
//             setTimeout(() => {
//                 console.log("Task 4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Should preven callback hell
// => use Promise, async/await
function delay(ms,message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, ms);
    });
}

console.log("Start Promise");

delay(1000, "Task 1")
    .then(() => delay(1000, "Task 2"))
    .then(() => delay(1000, "Task 3"))
    .then(() => delay(1000, "Task 4"))
    .then(() => console.log("End Promise"));