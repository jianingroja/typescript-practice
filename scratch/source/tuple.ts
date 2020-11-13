//Not Tuple
let arr = ["string", 25, true];
arr[0] = false;
arr[1] = "luigi";
arr = [30, false, "luigi"];

//Tuple
//Position Sensitive
let tup: [string, number, boolean] = ["luigi", 23, true];
//error
// tup[0] = 12;
//can change to same type
tup[0] = "micca";
//can push
tup.push(12);

let student: [string, number];
student = ["chun-li", 234234];
