// const score  = 400
// console.log(100);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // now this is string
// console.log(balance.toString().length); //string length

// console.log(balance.toFixed(2)); // after decimal precision 

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))  //124

// const otherNumber1 = 1123.8966
// console.log(otherNumber1.toPrecision(3))  //1.12e+3

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

console.log(Math); // math itself is object
console.log(Math.abs(-4));           // 4
console.log(Math.round(4.3));        // 4
console.log(Math.ceil(4.2));         // 5
console.log(Math.floor(4.7));        // 4
console.log(Math.min(4 , 3 ,6 ,8));  // 3
console.log(Math.max(4 , 3 ,6 ,8));  // 8
console.log(Math.random());           // 0 < value < 1;
console.log((Math.random()*10) +  1);  // value shift to 1 < btw < 10

const min = 10
const max =  20

//formula - for liw between the range
console.log(Math.floor(Math.random()*(max - min + 1)) + min);

