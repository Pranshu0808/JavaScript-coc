
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
