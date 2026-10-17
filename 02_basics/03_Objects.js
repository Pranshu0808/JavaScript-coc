// there are two ways to declare a objects which is literal and constructor function

// singleton

// when we make object by using constructor function then it is called singleton always because it is a single instance of the object

// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// OBJECT LITERAL..............

const mySym = Symbol("key1"); // symbol is a unique and

const jsUser = {
    name: "Pranshu",
    "full name": "Pranshu Sharma",
   // mySym: "mykey1",   not write way..
   [mySym]: "mykey1", // correct way to use symbol
    age: 20,
    location: "Gwalior",
    email: "pranshu@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
}

// How to Access Object Properties

console.log(jsUser.name); // dot notation
console.log(jsUser["age"]); // bracket notation

// .......not possible to use dot notation when the property name has spaces or special characters, so we have to use bracket notation in that case like-- "full name".........
console.log(jsUser["full name"]); // bracket notation
console.log(jsUser[mySym]); // symbol

jsUser.email = "pranshusharma123@gmail.com"
// Object.freeze(jsUser); // freezes the object so that no changes can be made to it
jsUser.email = "pranshusharma456@gmail.com" // this will not change the email because the object is frozen console.log(jsUser.email); 

jsUser.greeting = function(){
    console.log("hello js user"); 
}
jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`); 
}

console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 




