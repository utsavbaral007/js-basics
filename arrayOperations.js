//Reverse and array
function reverseArray() {
  let revArr = [1, 2, 3, 4, 5];
  let newRevArr = [];
  for (let i = revArr.length - 1; i >= 0; i--) {
    newRevArr = [...newRevArr, revArr[i]];
  }
  console.log(newRevArr);
}
reverseArray();

//Find maximum and minumum number from an array
function maxMin() {
  const maxMinArr = [10, 9, 14, 24, 50, 38];
  let max = 0;
  let min = maxMinArr[0];
  for (let i = 0; i <= maxMinArr.length - 1; i++) {
    if (maxMinArr[i] > max) {
      max = maxMinArr[i];
    } else if (maxMinArr[i] < min) {
      min = maxMinArr[i];
    }
  }
  console.log(`Maximum number from the array is ${max} and minimum is ${min}`);
}
maxMin();

//Remove duplicates from array
function removeDuplicates() {
  const dupArr = ["a", "b", "a", "a", "c", "b", "d", "d", "e", "f", "e"];
  let newArr = [];
  for (let i = 0; i <= dupArr.length - 1; i++) {
    if (newArr.includes(dupArr[i])) {
      newArr = [...newArr];
    } else {
      newArr = [...newArr, dupArr[i]];
    }
  }
  console.log(newArr);
}
removeDuplicates();

//Find index of an element
function findIndex(num) {
  const findIndArr = [10, 20, 30, 40, 50];
  let index;
  for (let i = 0; i <= findIndArr.length - 1; i++) {
    if (findIndArr[i] === num) {
      index = i;
    } else {
      index = index;
    }
  }
  console.log(index);
}
findIndex(30);

//Check if an array contains a value
function checkValue(value) {
  const checkArr = [1, 2, 3, 4, 5];
  let valuePresent = false;
  for (let i = 0; i <= checkArr.length - 1; i++) {
    if (valuePresent) {
      break;
    }
    if (checkArr[i] === value) {
      valuePresent = true;
      return valuePresent;
    }
  }
}
console.log(
  checkValue(4)
    ? "Provided value is present in the array"
    : "Provided value is not present in the array"
);

//Filter even and odd numbers
function filterEvenOrOdd(type) {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
  switch (type) {
    case "even":
      let evenArr = [];
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
          evenArr = [...evenArr, numArr[i]];
        }
      }
      console.log(evenArr);
      break;
    case "odd":
      let oddArr = [];
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 != 0) {
          oddArr = [...oddArr, numArr[i]];
        }
      }
      console.log(oddArr);
      break;
    default:
      console.log(numArr);
  }
}
filterEvenOrOdd("odd");


//sum of all elements
function sum() {
  const sumArr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }
  console.log(sum);
}
sum();
