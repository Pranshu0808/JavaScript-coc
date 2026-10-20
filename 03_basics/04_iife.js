// Immediately Invoked Function Expressions

// BAISCC...
// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

//..IIFE.....

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

// The main reasons are why we are using IIFE:
// - Immediate execution: Run code as soon as it is defined.
// - Avoid global scope pollution: Variables declared inside the function stay local.
// - Encapsulation: Keep variables and logic private within the function.

// Including arrow function 
( (name) => {
    console.log(`DB CONNECTED TWO ${name} `);
})('Pranshu');
