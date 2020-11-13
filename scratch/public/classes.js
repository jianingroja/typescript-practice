import { Invoice } from "./module/invoice.js"; //not .ts
//imagine i was in public file
//calsses -- object
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`;
//   }
// }
//create a new instatnce of object
const invOne = new Invoice("mica", "work", 22);
const invTwo = new Invoice("luigi", "study", 33);
console.log(invOne, invTwo);
//an array exclusive of Invoice class object
let invoices = [];
invoices.push(invOne);
//error
// invoices.push({ name: "hi" });
//limit access to the invoice class
//private property
class InvoicePrivate {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invPrivate = new InvoicePrivate("mica", "play", 22);
//error
// console.log(invPrivate.client);
//Read Only
class InvoiceRead {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invRead = new InvoiceRead("mica", "play", 22);
//NO error
console.log(invRead.client);
//error
// invRead.client = "luigi";
// Short Hand
// Only Work when usingAcces modifier
class InvoiceQuick {
    //   readonly client: string;
    //   details: string;
    //   amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invQuick = new InvoiceQuick("quick", "qq", 343);
console.log(invQuick);
