'use strict';

// Forma 1 - Palabra export
// export const myName = "Erick";

// export const getPostsBasic = () => {
//   return ["Post 1", "Post 2", "Post 3"];
// };

// export const getPostsPro = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const json = await response.json();
//   return console.log(json);
// };

// Forma 2 - Exportar al final del documento
const myName$1 = "Erick";

const getPostsBasic = () => {
  return ["Post 1", "Post 2", "Post 3"];
};

const getPostsPro = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return console.log(json);
};

// Forma 1 - Mediante la palabra export default
// export default () => {
//   return {
//     name: "Erick",
//     email: "correo@correo.com",
//   };
// };

const getUser = () => {
  return {
    name: "Erick",
    email: "correo@correo.com",
  };
};

console.log("Soy código que se ejecuta desde el archivo emptyExport.js");

const correo = "correo@correo.com";

/*
  📌 Named Imports 
*/
const myName = "Roberto";
console.log("My name is " + myName$1);
console.log("My second name is " + myName);
console.log(getPostsBasic());
console.log(getPostsPro());
console.log(myName$1);
console.log(getPostsBasic());
console.log(getUser());
console.log(correo);
