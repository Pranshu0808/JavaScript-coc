// NORMALYYY.........

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} ---> Scope of that program........

// let a = 300

// if(true){    
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER : " , a);        // INNER : 10
// }

// // console.log(a);  all ok          // a = 300
// // console.log(b);  all ok
// console.log(c);     // 30 so problem // ususallly people avoid var beause it deifne uncertainly


// ***********************-----------------------------*****************************

// function one(){
//     const username = "pranshu"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//   //  console.log(website);

//     two()
// }

// one()

// if(true){
//     const username = "pranhu"
//     if(username === "pranhu"){
//         const website = " youtube"
//         console.log(username + website);
//     }
// }

// console.log(username)


// ++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}


//  differnt syntax but in this error comes because we store the value at one constant
addTwo(5)
const addTwo = function(num){
    return num + 2
}

