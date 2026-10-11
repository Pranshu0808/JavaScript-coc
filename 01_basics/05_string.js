const name = "pranshu"
const repoCount = 50

// console.log(name + repoCount + "Value"); not good way

// modern way- Readable and String intrpulation 
console.log(`hello my name is  ${name} and my repo is ${repoCount}`);

// 2nd.way to declare string

const gamName = new String('Pranshu Sharma')    // google console log
console.log(gamName[0]);    // h
console.log(gamName.__proto__);

console.log(gamName.length);         //14
console.log(gamName.toUpperCase());
console.log(gamName.charAt(2));      // a
console.log(gamName.indexOf('P'));   // 0

const newString = gamName.substring(0 , 4)   // Pran
console.log(newString);

const anotherString = gamName.slice(-8 , 2)    // 6 = 14 -8 
console.log(anotherString);

const newStringOne = "     Pranshu      "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove space  // MDN

const url = "https://hitesh.com//hitesh%20choudary"

console.log(url.replace('%20' , '-'));  //(old , new) 

console.log(url.includes('hitesh'));     // checks present or not in the string

const newgamName = "pranshu-sharma-hoc-doc"
console.log(newgamName.split('-'));     //[ 'pranshu', 'sharma', 'hoc', 'doc' ]