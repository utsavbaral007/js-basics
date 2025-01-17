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

//find the missing number
const missingNumber = () => {
  const arr = [1, 2, 4, 5, 6];
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
};

console.log(`The missing number is ${missingNumber()}`);



//find all the pairs with given sum
function pair(sum){
  const pairArr = [1, 2, 3, 4, 5]
  let newPairArr = []
  for(let i = 0; i<= pairArr.length - 1; i++){
    for(let j = i + 1; j<pairArr.length; j++){
      if(j >= pairArr.length){
        newPairArr = [...newPairArr]
      } else if(pairArr[i] + pairArr[j] === sum){
        newPairArr = [...newPairArr, [pairArr[i], pairArr[j]]]
      }
    }
  }
  console.log(newPairArr)
}
pair(4)


//Rotate an array k times to the right
function rotateArr(rot){
  const rotArr = [1, 2, 3, 4, 5]
  let newRotArr = []
  for(let i = 0; i<rotArr.length; i++){
    if(i+rot > rotArr.length - 1){
      let index = (i+rot) - rotArr.length
      newRotArr[index] = rotArr[i]
    } else {
      newRotArr[i+rot] = rotArr[i]
    }
  }
  console.log(newRotArr)
}
rotateArr(1)


//Sort an array
function sortArr(){
  let sortArray = [10, 13, 25, 40, 30, 8, 6, 15]
  for (i = 0; i<sortArray.length; i++){
    for (let j = i + 1; j<sortArray.length; j++){
      if(sortArray[i] - sortArray[j] > 0){
        let compareElement = sortArray[i]
        sortArray[i] = sortArray[j]
        sortArray[j] = compareElement
      } else {
        sortArray[i] = sortArray[i]
        sortArray[j] = sortArray[j]
      }
    }
  }
  console.log(sortArray)
}
sortArr()
