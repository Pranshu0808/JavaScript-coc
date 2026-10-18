
// function sayMyName(){
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
//     console.log("U");
// }

// sayMyName()  // this is function call or function invocation
// sayMyName    // this is function definition or function reference

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}
 
const ans = addTwoNumbers(3, 5);
// console.log(ans);

function loginUserMessage(username){
    if(!username){ 
        return "Please enter a username"
        
    }
    return `${username} just logged in`
}

const message = loginUserMessage("Pranshu"); // this is function call or function invocation
console.log(message);

console.log(loginUserMessage()); // undefined just logged in before if condition....after if condition it will return "Please enter a username" 

//....***********************************************..........

// BASIC SYNTAX...........
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(100)); // 100

// REST OR SPREAD OPERATOR

function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(100, 200, 300)); // [ 100, 200, 300 ]

// syntax 2
function calculateCartPrice3(val1 , val2 , ...num1){
    return num1
}
console.log(calculateCartPrice3(100, 200, 300, 2000)); // [ 100, 200, 300 ]

const user = {
    username: "Pranshu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // Username is Pranshu and price is 199
handleObject({
    username: "Pranshu",
    price: 399
}) // Username is Pranshu and price is 399

const myNewArray = [1, 2, 3, 4, 5]

function handleArray(anyarray){
    return anyarray[1]
}

console.log(handleArray(myNewArray)); // 2