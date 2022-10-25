// Recursion

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
    }, 8000)
  );
};

const talk = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log("bla bla bla"));
    }, 4000)
  );
};

const talk2 = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log("bla bla bla"));
    }, 6000)
  );
};

const messages = [hello("Erick"), talk(), talk2(), goodBye("Erick")];

const showMessage = (messages, index = 0) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (messages[index]) {
        resolve(showMessage(messages[index], index++));
      } else {
        reject(console.log("Finishing the process."));
      }
    }, 4000)
  );
};

console.log("Starting the project!");
showMessage(messages).then((result) => console.log(result));
