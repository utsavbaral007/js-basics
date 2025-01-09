//Array forEach method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index) =>
  console.log(`item ${value} has index ${index}`)
);
let sum = 0;
numbers.forEach((value) => (sum += value));
console.log(sum);

let letters = ["a", "b", "a", "c", "d", "b", "d", "e", "c", "e", "f", "g"];
let lettersCount = {};
letters.forEach((value) => {
  if (lettersCount[value]) {
    lettersCount[value]++;
  } else {
    lettersCount[value] = 1;
  }
});
console.log(lettersCount);

//Array Map method
const product = [
  {
    item: "laptop",
    price: 30000,
    quantity: 3,
  },
  {
    item: "mobile",
    price: 15000,
    quantity: 5,
  },
];
let totalProduct = product.map((item) => ({
  item: item.item,
  totalPrice: item.price * item.quantity,
}));
console.log(totalProduct);

//Array filter method
const numb = [1, 2, 3, 2, 4, 5, 2, 3];
const newArr = numb.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(newArr);

//Array reduce method
const products = [
  {
    item: "laptop",
    price: 30000,
    quantity: 4,
  },
  {
    item: "mobile",
    price: 15000,
    quantity: 3,
  },
  {
    item: "tv",
    price: 20000,
    quantity: 5,
  },
];
const total = products.reduce((acc, curr) => {
  return acc + curr.quantity * curr.price;
}, 0);
console.log(total);

//Array slice method
const sliceArr = [1, 2, 3, 4, 5];
const newSlice = sliceArr.slice(0, 3);
console.log(newSlice);

//Array splice method
let spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(0, 1, "john");
console.log(spliceArr);

//Array sort method
const sortArr = [10, 24, 15, 75, 85, 3, 22, 11];
const arrSort = sortArr.sort((a, b) => a - b);
console.log(arrSort);

//Array fill method
const rating = (stars) => {
  return Array(stars).fill("⭐️");
};
console.log(rating(3));

//Array include method
const incArr = ["Utsav", "Suyesh", "Ashish", "Prajwal"];
console.log(incArr.includes("Utsav"));

//Array join method
const joinStr = incArr.join(", ");
console.log(joinStr);
console.log(`I am friends with ${joinStr}`);

//Array reverse method
const revArr = [...incArr].reverse();
console.log(incArr);
console.log(revArr);

//Array push method (adds element to the last of the array and returns the length of new array)
const pushArr = [1, 2, 3];
pushArr.push(4);
console.log(pushArr);

//Array pop method (removes elements from the last of the array and returns the removed element)
const popArr = [1, 2, 3, 4];
const removedElement = popArr.pop();
console.log(popArr);
console.log(removedElement);

//Array unshift method (adds elements to the start of the array and returns the new length of the array)
const unshiftArr = [1, 2, 3, 4, 5, 6];
const newArrLength = unshiftArr.unshift(9);
console.log(unshiftArr);
console.log(newArrLength);

//Array shift method (removes the first element of an array and returns it)
const shiftArr = [1, 2, 3, 4];
const removedEl = shiftArr.shift();
console.log(shiftArr);
console.log(removedEl);

//Array indexOf (finds the first found element and returns its index in an array) and lastIndexOf (finds the last found element and returns its index in an array) method
const indArr = [1, 2, 3, 4, 2, 4];
console.log(indArr.indexOf(2));
console.log(indArr.lastIndexOf(2));

//Array every method (returns true for truthy values while returns false if even one value is falsy in an array)
const everyArr = [
  {
    name: "utsav",
  },
  {
    name: "prajwal",
  },
  {
    surname: "ashish",
  },
];
const result = everyArr.every((value) => value.name !== undefined);
console.log(result);

//Array some method (returns true if atleast one truthy value is present, returns false if all the values are falsy)
const someArr = [1, 2, 3, 4];
const res = someArr.some((value) => value > 2);
console.log(res);

//Array find method (find element from an array and returns it (only returns the element with is found first))
const findArr = [
  {
    fullName: "Utsav Baral",
    location: "Kathmandu",
  },
  {
    fullName: "Prajwal Panta",
    location: "Kathmandu",
  },
  {
    fullName: "Suyesh Poudel",
    location: "Kathmandu",
  },
  {
    fullName: "Utsav Baral",
    location: "Chitwan",
  },
];

const data = findArr.find((value) => value.fullName === "Utsav Baral");
console.log(data);

//Array findIndex method (similar to that of find but here it will return index of first found element from array)
const findIndexArr = [1, 2, 3, 4];
const index = findIndexArr.findIndex((value) => value === 3);
console.log(index);

//Array from method
const fromStr = "1234567";
const fromArr = Array.from(fromStr, Number);
console.log(fromArr);

//Array flat method (flattens the array)
const flatArr = [1, 2, 3, [4, [5, [6, [7, 8]]]]];
const newFlatArr = flatArr.flat(Infinity);
console.log(newFlatArr);
