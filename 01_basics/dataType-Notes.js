// Two types of data type 

// (1) Primitive -

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n     Ye Big int hai  iske piche "n" laga hai



// (2) Reference (Non primitive) -

// Array, Objects, Functions

// Array-

const heros = ["shaktiman", "naagraj", "doga"];


// Object-
// ye Parnthesis ke andar h wo object h isko #myObj name variable store kr rhe hai
let myObj = {
    name: "hitesh",
    age: 22,
}

//Function -

//      function(){}    => ye Function hai isko #myFunctiona variable m store kr rhe or Paranthesis ke andar khuch bhi print kr do



const myFunction = function(){
    console.log("Hello world");
}

// kis bhi variable ka Type janane ke liye Function -

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3