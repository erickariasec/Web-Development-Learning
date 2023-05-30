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

export default getUser;