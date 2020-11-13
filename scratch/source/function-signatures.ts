//example 1
let gree: (a: string, b: string) => void;
gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//error
// gree = (name: string, greeting: number) => {
// console.log(`${name} says ${greeting}`);
// };

//example 2
let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  }
  //   necessary to return a number, otherwise error
  else {
    return num1 - num2;
  }
};

//example 3
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (mica: { name: string; age: number }) => {
  console.log("hi");
};
//error
// logDetails = (mica: { name: string; age: boolean }) => {
//   console.log("hi");
// };

type person = { name: string; age: number };
//can rewrite as
// logDetails = (mica: person) => {
//   console.log("hi");
// };
