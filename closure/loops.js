//Manejo de Closures en Loops

const miFunc = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000); //para cuando se ejecuta este bloque de código, i que fue declarada con var y tiene un scope de función ya vale 10
    }
    for (let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000); //para cuando se ejecuta este bloque de código, i que fue declarada con let y tiene un scope de bloque tiene el valor de cada iteración
    }
};

miFunc();