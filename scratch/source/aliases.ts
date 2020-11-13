type StringOrNum = string | number;
type objWithName = {
  name: string;
  uid: StringOrNum;
};

const functionOne = (a: number, uid: StringOrNum) => {
  console.log(uid);
};

const functinoTwo = (user: objWithName) => {
  console.log("hello");
};
