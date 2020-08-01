a = 2;
var a;
console.log(a); // 2

// Hoisting

// El Hoisting eleva las declaraciones en el momento de la interpretación, previo a ser ejecutado en el navegador.

// var a; // declaración
// a = 2; // asignación
// console.log(a); // 2 //acceso


// Aqui no aplica porque primero se esta queriendo acceder al valor previo a la asignación
console.log(a); // undefined
var a = 2;

/********************************/

nameOfDog('Braulio');
const nameOfDog = (name) => {
    console.log(name); // Braulio
}

// El Hoisting eleva las declaraciones en el momento de la interpretación, previo a ser ejecutado en el navegador.

/*
const nameOfDog = (name) => {
    console.log(name);
}
nameOfDog('Braulio');
*/