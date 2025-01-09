//reverse the given string
const reverseStr = function (str) {
  let splitStr = str.split("");
  let newStr = [];
  for (let i = splitStr.length - 1; i >= 0; i--) {
    newStr = [...newStr, splitStr[i]];
  }
  console.log(newStr.join(""));
};
reverseStr("hello");

//check if the string is palindrome or not
const palindrome = (str) => {
  let splitStr = str.toLowerCase().split("");
  let newStr = [];
  for (let i = splitStr.length - 1; i >= 0 - 1; i--) {
    newStr = [...newStr, splitStr[i]];
  }
  console.log(newStr.join("") === str ? "is palindrome" : "not palindrome");
};
palindrome("saas");

//count number of vowels in a string
const vowelCount = (str) => {
  let vowel = ["a", "e", "i", "o", "u"];
  let strSplit = str.split("");
  let counter = {};
  for (i = 0; i <= strSplit.length - 1; i++) {
    if (vowel.includes(strSplit[i]) && counter[strSplit[i]]) {
      counter[strSplit[i]]++;
    } else if (vowel.includes(strSplit[i]) && !counter[strSplit[i]]) {
      counter[strSplit[i]] = 1;
    } else {
      counter = { ...counter };
    }
  }
  console.log(counter);
};
vowelCount("i have so many vowels");

//Finding the longest word in a string
const longestString = (str) => {
  const splitStr = str.split(" ");
  let length = 0;
  let index;
  for (let i = 0; i <= splitStr.length - 1; i++) {
    if (length < splitStr[i].length) {
      length = splitStr[i].length;
      index = i;
    }
  }
  console.log(`Longest string is ${splitStr[index]}`);
};
longestString("hello how are you");

//Capitalize the first letter of each word
const capitalize = (str) => {
  const strSplit = str.split(" ");
  const newArr = strSplit.map(
    (val) => val.charAt(0).toUpperCase() + val.slice(1)
  );
  console.log(newArr.join(" "));
};
capitalize("this is a sentence");

//check if string includes another string
const checkString = (str1, str2) => {
  const splitStr = str1.split(" ");
  console.log(splitStr.includes(str2) ? "Includes" : "Does not include");
};
checkString("hello world", "world");

//Repeat the given string
const repeatString = (str, count) => {
  let newStr = "";
  for (let i = 1; i <= count; i++) {
    newStr += str;
  }
  console.log(newStr);
};
repeatString("abc", 3);

//remove duplicates from a string
const removeDuplicate = (str) => {
  const splitStr = str.split("");
  let newStr = [];
  for (let i = 0; i <= splitStr.length - 1; i++) {
    if (!newStr.includes(splitStr[i])) {
      newStr = [...newStr, splitStr[i]];
    }
  }
  console.log(newStr.join(""));
};
removeDuplicate("aaaaabbbbbccddddfccccceeeee");
