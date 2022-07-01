// 6. Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando if, else y else if

// const tipoDeMatricula = "Basic";
// switch (tipoDeMatricula) {
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
//         break;
//     case "Expert":
//         console.log("Puedes tomar casi todos los cursos de ITI durante un año");
//         break;
//     case "ExpertPlus":
//         console.log(
//             "Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
//         break;
// }

const tipoDeMatricula = "Basic";
if (tipoDeMatricula === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeMatricula === "Basic") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
} else if (tipoDeMatricula === "Expert") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un año");
} else if (tipoDeMatricula === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
}