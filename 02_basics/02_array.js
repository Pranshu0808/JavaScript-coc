const marvel_heros = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];
const dc_heros = ['Batman', 'Superman', 'Wonder Woman', 'Flash'];

// marvel_heros.push(dc_heros); 

// adds the entire dc_heros array as a single element at the end of marvel_heros      -- here dc_horos is added as a single element at the end of marvel_heros array, so marvel_heros becomes a 2D array

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros); // combines both arrays into a new array
// console.log(all_heros); // prints the combined array of marvel and dc heros

// SPREAD OPERATOR.................

const all_new_heros = [...marvel_heros, ...dc_heros]; // combines both arrays into a new array using spread operator --- whisch is good compare to concat method because it is more readable and easier to use

// console.log(all_new_heros); // prints the combined array of marvel and dc heros

const another_array = [1 , 2 , 3 , [4 , 5, 6] , 7 , [6 , 7 , [4 , 5]]]

// const real_another_array = another_array.flat(Infinity); 
// in simple words it removes all the nested arrays and returns a new array with all the elements in a single level
// console.log(real_another_array); // prints the flattened array




console.log(Array.isArray("Pranshu")); // checks if the value is an array or not, returns true or false
console.log(Array.from("Pranshu")); // converts a string into an array of characters
console.log(Array.from({name: "Pranshu", age: 20})); // Interesting
// return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates a new array with the specified values
//difference between Array.of and Array.from is that Array.of creates a new array with the specified values, while Array.from creates a new array from an array-like or iterable object.