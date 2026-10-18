// Constructor......

// const tinderUser = new Object();
// const tinderUser = {}; // object literal syntax

// tinderUser.id = "123abc";
// tinderUser.name = "Pranshu";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser); // { id: '123abc', name: 'Pranshu', isLoggedIn: false }

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Pranshu",
//             lastname: "Sharma"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname) // Pranshu

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};       

// // const obj3 = Object.assign(target, source1, source2); // combines obj1 and obj2 into obj1
// // const obj3 = Object.assign({}, obj1, obj2); // combines obj1 and obj2 into a new object

// const obj3 = {...obj1, ...obj2}; // combines obj1 and obj2 into a new object using spread operator -- moree use

// // console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const users =[
//     {
//         id : 1 ,
//         email : "some@gmail.com" ,
//     },
//     {
//         id : 1 ,
//         email : "some@gmail.com" ,
//     },
//     {
//         id : 1 ,
//         email : "some@gmail.com" ,
//     },
//     {
//         id : 1 ,
//         email : "some@gmail.com" ,
//     },
//     {
//         id : 1 ,
//         email : "some@gmail.com" ,
//     }

// ]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns an array of keys of the object
// console.log(Object.values(tinderUser)); // returns an array of values of the object
// console.log(Object.entries(tinderUser)); // returns an array of key-value pairs of the object.........less use

// console.log(tinderUser.hasOwnProperty("name")); // checks if the object has the specified property, returns true or false.........



// ...........................DESTRUCTURING......................

// OBJECT DESTRUCTURING.......

const course = {
    coursename: "JavaScript",
    price: 299,
    courseInstructor: "Pranshu Sharma"
}

// course.curseInstructor 

const {courseInstructor : instructor} = course
console.log(instructor); // Pranshu Sharma

// const navbar = ({conpany}) => {

// }

// navbar(company = "pranshu")

// API - short defination of API is "Application Programming Interface" - it is a set of rules that allows different software entities to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable integration between different systems, allowing them to work together seamlessly.

// {
//     "name" : "Pranshu",
//     "coursename" : "JavaScript",
//     "price" : "free"
// }

//JSON :- JAVA SCRIPT OBJECT NOTATION

[
    {},
    {},                 // json format to undersatnd json code
    {}            
]