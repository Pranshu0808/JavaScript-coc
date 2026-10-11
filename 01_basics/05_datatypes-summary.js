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
            
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  STACK (primitive) AND HEAP (Non- primitive) memory
// stack - copy ,  heap - Reference

let myYoutubename = "pranshusharma.com"

// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.



// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )