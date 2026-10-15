// ARRAY...............

const myArr = [1, 2, 3, 4, 5 , true , "pranshu"];
console.log(myArr[4]);

const myheros = ["shaktiman", "naagraj", "doga", "batman"];
console.log(myheros[2]);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[0]);

// ARRAY METHODS.................

myArr.push("new value"); // adds new value at the end of the array
console.log(myArr);

myArr.pop(); // removes last value from the array
console.log(myArr);

myArr.unshift(0); // adds new value at the beginning of the array
console.log(myArr); // time complexity is O(n) because all the elements have to be shifted to the right

myArr.shift(); // removes first value from the array
console.log(myArr); 

console.log(myArr.length); // length of the array

console.log(myArr.includes(9)); // checks if the array includes the value 9 or not, returns true or false

console.log(myArr.indexOf(9)); // returns the index of the value 9 in the array, if not found returns -1
console.log(myArr.indexOf(3));

const newArr = myArr.join(", "); // joins all the elements of the array into a string with the specified separator
console.log(newArr);   // type of newArr is string

// SLICE AND SPLICE METHODS.................

console.log("A" , myArr);    // A [ 1, 2, 3, 4, 5, true, 'pranshu' ]

const myn1 = myArr.slice(1, 3);  

console.log(myn1);  // myn1 [ 2, 3 ] 
console.log("B" , myArr);    // B [ 1, 2, 3, 4, 5, true, 'pranshu' ]   slice does not change the original array

const myn2 = myArr.splice(1, 3);  // removes 3 elements starting from index 1
console.log(myn2);  // myn2 [ 2, 3, 4 ] 
console.log("C" , myArr);    // C [ 1, 5, true, 'pranshu' ]   splice changes the original array
