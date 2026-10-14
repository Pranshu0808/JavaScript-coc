// Dates....

// WAYS TO CREATE OR WRITE DATES

let myDate = new Date()
//console.log(myDate);   // Wed Oct 14 2026 16:29:13 GMT+0530 (India Standard Time)
// console.log(myDate.toString());
// console.log(myDate.toDateString());        // Wed Oct 14 2026
// console.log(myDate.toISOString());         // 2026-10-14T16:29:13.715Z
// console.log(myDate.toJSON());              // 2026-10-14T16:31:30.140Z
// console.log(myDate.toLocaleString());      // 10/14/2026, 4:31:30 PM
// console.log(myDate.toLocaleDateString());  //   10/14/2026 

console.log(typeof myDate);   // ***OBJECT***

// let myCreatedDate = new Date(2023 , 0 , 23)
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 30 , 0)   // 23 Jan 2023 05:30:00
// let myCreatedDate = new Date("2023-01-23T05:30:00")   // 23 Jan 2023 05:30:00  // yy-mm-ddThh:mm:ss
let myCreatedDate = new Date("01-23-2023")   // 23 Jan 2023 00:00:00  // mm-dd-yyyy
console.log(myCreatedDate.toDateString());


// *******************GETTING TIME STAMP*******************

let myTimeStamp = Date.now()   // 1697302290140 // the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());   // 1674435000000  // the number of milliseconds since January 1, 1970, 00:00:00 UTC

console.log(Math.floor(myTimeStamp / 1000));   // 1697302290  // the number of seconds since January 1, 1970, 00:00:00 UTC

// ******************DATES PROPERTIES***********************
let newDate =  new Date();
// console.log(newDate.getFullYear());   // 2026
// console.log(newDate.getMonth()+1);      // 10  // 1-12
// console.log(newDate.getDate());      // 14
// console.log(newDate.getDay());        // 3  // 0-6
// console.log(newDate.getHours());      // 16
// console.log(newDate.getMinutes());    // 29
// console.log(newDate.getSeconds());    // 13
// console.log(newDate.getMilliseconds());// 715

// customization format......
newDate.toLocaleString('default', { weekday: 'long' , timeZone: 'Asia/Kolkata' })   // Wednesday
