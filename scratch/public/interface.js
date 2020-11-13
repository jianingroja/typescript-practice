"use strict";
const me = {
    name: "mica",
    age: 12,
    speak(text) {
        console.log("jk");
    },
    spend(amount) {
        console.log("asd");
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log("hi ", person.name);
};
greetPerson(me);
