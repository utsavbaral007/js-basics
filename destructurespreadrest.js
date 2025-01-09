function greeting() {
  let message = "Hello Good Morning!";
  function extendGreeting() {
    console.log(`John says ${message}`);
  }
  return extendGreeting;
}

let extendedMessage = greeting();
extendedMessage();

//Destructuring spread and rest

const userObject = {
  username: "John",
  occupation: "web developer",
  age: 29,
  location: "Toronto",
};
const { username, ...rest } = userObject;
console.log(username);
console.log(rest);

const userArr = [1, 2, 3, 4, 5, 6];

const [a, ...restArr] = userArr;
console.log(a);
console.log(restArr);

const spreadArr = [1, 2, 3, 4];
const spreadObj = { ...spreadArr };
console.log(spreadObj);

const numsArr = [1, 2, 3, 4];
const addNums = (...args) => {
  let total = args.reduce((acc, curr) => acc + curr, 0);
  return total;
};
console.log(addNums(...numsArr));
