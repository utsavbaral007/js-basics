const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ email: "user@example.com", username: "user" });
  }, 2000);
});
promiseOne.then((data) => console.log(data));

const promiseTwo = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve({ username: "Utsav", email: "user@example.com" });
  } else {
    reject("Error occured");
  }
});
promiseTwo.then((data) => console.log(data)).catch((err) => console.log(err));

function promiseThree() {
  return new Promise((res, rej) => {
    let error = false;
    if (!error) {
      res({ username: "Utsav", email: "user@example.com" });
    }
    rej("ERROR: Something went wrong!");
  });
}

const resolvePromise = async () => {
  console.log("promise start");
  const response = await promiseThree();
  console.log(response);
  console.log("promise ended");
};
resolvePromise();
