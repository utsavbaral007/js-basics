const userDetail = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
    console.log(this);
  },
};

const arrowFunction = () => {
  console.log(this);
};
arrowFunction();

function normalFunction() {
  const arrowFunction = () => {
    console.log(this);
  };
  arrowFunction();
}
normalFunction();

const arrowFunction1 = () => {
  console.log(arguments);
};
arrowFunction1(1, 2, 3);

function normalFunction1() {
  const arrowFunction1 = () => {
    console.log(...arguments);
  };
  arrowFunction1();
}
normalFunction1(1, 2, 3);

// IIFE
let count = 10;
function increase() {
  count += 1;
}
increase();
console.log(count);

(function increaseCount() {
  let count = 0;
  count += 1;
  console.log(count);
})();
