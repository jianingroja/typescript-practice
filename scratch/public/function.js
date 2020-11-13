"use strict";
let greet = () => {
    console.log("Hello world");
};
//explicitly
//let greet: Function;
//error: greet = "Hello";
// let greet: Function;
// greet = () => {
//   console.log("Hello");
// };
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
    //optional / undefined
};
add(1, 2);
//error
// add(1, "2");
add(1, 2, "3"); //optional
const addd = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
    //default value
};
addd(1, 2);
//return void when we don't return anything
const minus = (a, b) => {
    return a + b;
};
let result = minus(3, 2); //become the return value type
//error
// result = "string";
//explicitly declare the return type
const minuss = (a, b) => {
    return a + b;
};
