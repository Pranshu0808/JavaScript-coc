
// this keyword refers to current context

// const user = {                                  // object
//     username : "hitesh",
//     price: 999 ,

//     welcomeMessage: function() {
//         console.log( `${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   {}

// browser se andr global object window object hota hai toh jb browser pr hum krte hain toh whaan {} ye nhi aata hai 

// function chai(){
//     let username = "pranshu"
//     console.log(this);
// }
// chai()

// function chai(){
//     let username = "pranshu"
//     console.log(this.username);     // undefined inside the function only this not working 
// }
// chai()

// const chai = function(){            // syntax 2
//         let username = "pranshu"
//         console.log(this.username);     // same undefined
// }
// chai()
 
//...........ARROW FUNCTION..............

// const chai = () => {            
//         let username = "pranshu"
//         console.log(this);     
// }
// chai()

// const addTwo = (num1 , num2) => {            // explicit
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2    // IMPLICIT
// const addTwo = (num1 , num2) =>  (num1 + num2)     // imp for react

const addTwo = (num1 , num2) => ({username : "pranshu"})    // object need curly bracket
console.log(addTwo(3 , 4))

// const myArray = [2 , 5  , 3 ,7 ,8]
// myArray.forEach(() => )             // overview