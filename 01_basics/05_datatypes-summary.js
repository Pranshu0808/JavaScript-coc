//  # PREMITIVE DATATYPES

// 7 types : String , Number , Boolean , NULL , undefined , symbol ,BigInt

// javascript is dynamic language 
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.


const score = 100 
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

// Symbool basically unique id 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)     // gives false ya value is same but it comes false......

const BigNumber = 343254542536475857654n



// Refrence (NON - Primitive)

// Array , Objects , Functions 

const heros = ["ironman" , "batman" , "hulk" , "spiderman"]

let myobj = {
    name : "pranshu",    // inside the currly bracket all are object
    age : 20,
    
}
console.log(typeof heros);

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Return type of variables in JavaScript
// =======================
//  Primitive Datatypes
// ---------------------------------------------------
//        Number =>     number
//        String  =>        string
//        Boolean  =>    boolean
//        null  =>             object
//        undefined  =>  undefined
//        Symbol  =>      symbol
//        BigInt  =>         bigint
// ========================
//  Non-primitive Datatypes
// ---------------------------------------------
//        Arrays  =>       object
//        Function  =>  function
//        Object  =>       object

