//define how an object should look

export interface HasFormatter {
  format(): string;
}

//generic

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  name: "string",
  data: "data",
};

const docFour: Resource<string[]> = {
  uid: 1,
  name: "string",
  data: ["data", "bread"],
};
