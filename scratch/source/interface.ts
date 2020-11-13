interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "mica",
  age: 12,
  speak(text: string): void {
    console.log("jk");
  },
  spend(amount: number): number {
    console.log("asd");
    return amount;
  },
  //error
  //   skill()
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("hi ", person.name);
};

greetPerson(me);
