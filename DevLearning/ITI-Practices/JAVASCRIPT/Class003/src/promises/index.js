// Promesa

const pr = new Promise((resolve, reject) => {
    resolve("Hey, todo perfecto!");
    reject("Todo salió mal!");
})


const cats = 4;

const countCat = new Promise((resolve, reject) => {
    if(cats <= 5) {
        resolve("Accept");
    } else {
        reject("Dissaproved");
    }
})

countCat
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("Hey, todo OK!"));