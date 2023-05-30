/*
  📌 Named Imports 
*/
import {
  myName as myNameImported,
  getPostsBasic,
  getPostsPro,
} from "./namedExports";
const myName = "Roberto";
console.log("My name is " + myNameImported);
console.log("My second name is " + myName);
console.log(getPostsBasic());
console.log(getPostsPro());

/*
  📌 Namespace Imports 
*/
import * as data from "./namedExports";
console.log(data.myName);
console.log(data.getPostsBasic());

/*
  📌 Default Imports 
*/
import getUser from "./defaultExport";
console.log(getUser());

/*
  📌 Empty Imports
  Carga todo el código pero sin hacer ningun objeto.
*/
import "./emptyExport";
import { correo } from "./emptyExport";
console.log(correo);
