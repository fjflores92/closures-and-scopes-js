// Scope: Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope es el bloque de código en el que se puede acceder a una variable.
// Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.
// Con la palabra reservada var podemos re-asignar una variable pero es una mala práctica. var a='a'; var a='b'; a es igual a 'b'
// Con let y const no podemos, aparecerá un error. let a='a'; let a='b'; Error
// Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
// Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
// La doble asignación de una variable también es una mala práctica.

var hello = 'Hola';
let world = 'Hello world';
const helloWorld = 'Hello World!';

const anotherFunct = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunct();

// Mala Práctica
const helloWorld = () => {
    globalVar = '¡Soy global alv!';
    var localVar = otherGlobalVar = "I'm Global FB!";
}
helloWorld();
console.log(globalVar);
console.log(otherGlobalVar);
//console.log(localVar); //localVar not defined

