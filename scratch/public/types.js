"use strict";
let character = "mica"; //string
let age = 20; //number
let isGreat = true; //bolean
//error
// age = "red";
//function
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(3));
//arrays
let names = ["luigi", "mica"];
names.push("perry");
//error
// names.push(3);
// names[0] = 3;
let numbers = [10, 20];
numbers.push(34);
//error
// numbers.push("sda");
//mixed array
let mixed = ["mica", 3, "red", 3];
mixed.push("one");
mixed.push(3);
mixed[0] = 1;
//objects
let mica = {
    name: "red",
    belt: "black",
    age: 18,
};
mica.age = 20;
mica.name = "redi";
//error
// mica.name = 20; //can't change types
// mica.skills = ["fighting", "sneaking"]; //can't add property
//overwrite the object with exact same types and property
mica = {
    name: "luigi",
    belt: "green",
    age: 40,
};
//explicit types
let myString;
let myNumber;
let myBoolean;
age = 20;
//error: age = "mica";
myBoolean = true;
//error: myBoolean = "mica";
//arrays
let micared;
micared = ["asd", "sdf"];
let micare = [];
micare.push("asd");
//union types
let mixeds = [];
mixeds.push("hello");
mixeds.push(20);
//error: mixeds.push(false);
console.log(mixeds);
let uid;
uid = 1;
//error: uid = false;
console.log("uid: " + uid);
//objects
let myObject;
myObject = {
    name: "mica",
    age: 20,
};
myObject = []; //array is a type of object
let myObjectTwo;
myObjectTwo = {
    name: "red",
    age: 11,
};
//any types, think twice before using
let myAny = 20;
myAny = "20";
console.log(myAny);
myAny = {
    name: "luigi",
};
console.log(myAny);
let myMixedAny = []; //same with object
myMixedAny.push("string");
myMixedAny.push(true);
myMixedAny.push(5);
console.log(myMixedAny);
