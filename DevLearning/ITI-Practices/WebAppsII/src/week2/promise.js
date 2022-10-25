// Promise

const hello = (myName) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log("Hello " + myName));
    }, 2000)
  );
};

const goodBye = (myName) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log("Good bye " + myName));
    }, 2000)
  );
};

const talk = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log("bla bla bla"));
    }, 3000)
  );
};

hello("Erick")
  .then(() => talk())
  .then(() => talk())
  .then(() => goodBye("Erick"))
  .then(() => console.log("Finishing the process."))
  .catch((err) => console.error(err));

console.log("Starting the project!");
