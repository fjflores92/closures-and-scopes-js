// Block Scope

//Un bloque de código puede ser una estructura de control o un fragmento de código entre llaves

(() => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'orange';
    }
    console.log(fruits1, fruits2, fruits3); // Las variables declaradas con var pueden ser accedidas en todo el scope de la función
})();

(() => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'orange';
    }
    console.log(fruits1, fruits2, fruits3); // Las variables declaradas con let y const pueden ser accedidas sólo en el scope del bloque en el que fueron declaradas
})();

(() => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'orange';
    }

    if (true) {
        var fruits1 = 'kiwi'; //Reasignación de la variable fruits1 previamente declarada
        let fruits2 = 'peach';
        const fruits3 = 'grape';
        console.log(fruits1, fruits2, fruits3); // Las variables que se muestran en este console.log son las declaradas en el bloque
    }
    console.log(fruits1, fruits2, fruits3); // Las variables que se muestran en este console.log son las declaradas con var
})();

// El Block Scope solo es funcional con let
let x = 1;
var y = 2;
{
    let x = 2; //nueva declaración de x
    var y = 4; //reasignación de y
    console.log(x, y);
}
console.log(x, y);

(() => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000); //para cuando se ejecuta este bloque de código, i que fue declarada con var y tiene un scope de función ya vale 10
    }
    for (let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000); //para cuando se ejecuta este bloque de código, i que fue declarada con let y tiene un scope de bloque tiene el valor de cada iteración
    }
})();