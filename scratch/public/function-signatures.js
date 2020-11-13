"use strict";
//example 1
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//error
// gree = (name: string, greeting: number) => {
// console.log(`${name} says ${greeting}`);
// };
//example 2
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    //   necessary to return a number, otherwise error
    else {
        return num1 - num2;
    }
};
//example 3
let logDetails;
logDetails = (mica) => {
    console.log("hi");
};
//can rewrite as
// logDetails = (mica: person) => {
//   console.log("hi");
// };
