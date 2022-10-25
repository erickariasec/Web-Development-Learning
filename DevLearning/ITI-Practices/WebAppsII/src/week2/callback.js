//Callbacks
const hello = (myName, micallback) => {
  setTimeout(() => {
    console.log("Hello " + myName);
    micallback();
  }, 2000);
};
const goodBye = (name, otrocallback) => {
  setTimeout(() => {
    console.log("Goodbye " + name);
    otrocallback();
  }, 2000);
};
const talk = (myCallbackMessage) => {
  setTimeout(() => {
    console.log("bla bla bla");
    myCallbackMessage();
  }, 3000);
};
//---

console.log("Starting the project!");
hello("Erick", () => {
  talk(() => {
    talk(() => {
      goodBye("Erick", () => {
        console.log("Finishing the process.");
      });
    });
  });
});

//Implement the same with promises, async/await and recursivity
