import { Invoice } from "./module/invoice.js";
import { Payment } from "./module/Payments.js";
import { ListTemplate } from "./module/ListTemplate.js";
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("luiigi", "work", 222);
// docTwo = new Payment("fra", "play", 333);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const anchor = document.querySelector("a")!;
// //  i know there is value for sure
// console.log(anchor.href);
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// const form = document.querySelector('form')!;
//cast
const form = document.querySelector(".new-item-form");
//to be able to accees the html property
// console.log(form.children);
//inputs
//cast
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        // doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
