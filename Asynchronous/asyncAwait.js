async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello", 1000));
  });

  const error = false;

  if (!error) {
    const res = await promise; // wait until the promise is resolved
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

async function getUsers() {
  // await repsonse of the fetch call
  const response = await fetch("url/to/api");

  // only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
