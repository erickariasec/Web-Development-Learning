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
const myName = "Erick";

const getPostsBasic = () => {
  return ["Post 1", "Post 2", "Post 3"];
};

const getPostsPro = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return console.log(json);
};

export { myName, getPostsBasic, getPostsPro };
