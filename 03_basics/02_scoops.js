// NORMALYYY.........

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} ---> Scope of that program........

let a = 300

if(true){    
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER : " , a);        // INNER : 10
}

// console.log(a);  all ok          // a = 300
// console.log(b);  all ok
console.log(c);     // 30 so problem // ususallly people avoid var beause it deifne uncertainly
