// Closure: Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función.

// Ámbito léxico
const iniciar = () => {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    const mostrarNombre = () => {  // La función mostrarNombre es una función interna, una clausura.
        console.log(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
}
iniciar();

// Closure / Clausura

const creaFunc = () => {
    var nombre = "Mozilla";
    const muestraNombre = () => {
        console.log(nombre);
    }
    return muestraNombre;
}

// miFunc es un closure que incorpora tanto la función muestraNombre como el string "Mozilla" que existían cuando se creó el closure.
var miFunc = creaFunc();
miFunc();


// crearSumador recibe el parametro 'x' y retorna una nueva función. Esa función retornada recibe el parametro 'y' y retorna la suma de 'y' y 'x'
const creaSumador = (x) => { //Es una fábrica de función que suma un valor asignado por parámetro en 'y' a su argumento 'x'
    return (y) => {
        return x + y;
    };
}

// suma5 y suma10 son closures.
var suma5 = creaSumador(5); //Se utiliza la fábrica de función para crear suma5 como una nueva función que agrega 5 a 'x'
var suma10 = creaSumador(10); //Se utiliza la fábrica de función para crear suma10 como una nueva función que agrega 10 a 'x'

// suma5 y suma10 son ambos closures. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos. En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.
console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12


// fabricaSoftware recibe el parámetro cantidadNuevosProgramas, declara la variable cantidadProgramas y declara y retorna la función crearSoftware

const fabricaSoftware = (cantidadNuevosProgramas) =>{
    var cantidadProgramas = 0;
    // crearSoftware recibe el parámetro cantidadNuevosProgramas
    const crearSoftware = (cantidadNuevosProgramas) =>{
        cantidadProgramas += cantidadNuevosProgramas;
        console.log(`Cantidad de programas = ${cantidadProgramas}`)
    }
    return crearSoftware;
}

// desarrollar es igual a la ejecución de fabricaSoftware, lo que nos lleva a tener la declaración de cantidadProgramas igual a 0 y que desarrollar sea igual a la declaración de la función crearSoftware, es decir desarrollar es igual a crearSoftware que es lo que retorna fabricaSoftware; Ojo no se ejecuta la función crearSoftware, desarrollar es igual solo a la declaración de la función.
var desarrollar = fabricaSoftware();

// Cada que se ejecuta desarrollar se esta ejecutando la función crearSoftware con su scope, donde la variable cantidadProgramas en un primer momento tiene el valor de 0 y se le incrementa con el parametro cantidadNuevosProgramas, tomando un valor distinto cada que se ejecuta la función desarrollar
desarrollar(1)  // cantidad de programas = 1
desarrollar(2)  // cantidad de programas = 3
desarrollar(3)  // cantidad de programas = 6