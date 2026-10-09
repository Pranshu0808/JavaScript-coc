let score = "33"

console.log(typeof score);  // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
// --------------------------------------------------

let score1 = "33abc"

console.log(typeof score1);  // string
console.log(typeof(score1)); // string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);  // number
console.log(valueInNumber1);       // NaN-> NOT A NUMBER


// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => null
// true = 1 , false => 0


let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)  // true

// ---------------------------------------

let isloggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isloggedIn1)
console.log(booleanIsLoggedIn1)  // false

// 1 => true , 0 => false;
// ""  => false
// "abc" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);