// Local Scope

// El alcance de una variable se define por su ubicación dentro del código fuente

const helloWorld = (() => {
    var helloVar = 'Hello World Var';
    let helloLet = 'Hello World Let';
    const helloConst = 'Hello World Const';
    console.log(helloVar);
    console.log(helloLet);
    console.log(helloConst);
})();

// Fuera de la función son undefined
console.log(helloVar);
console.log(helloLet);
console.log(helloConst);


// Lexical Scope

// Las funciones anidadas dentro de otra función tienen acceso a las variables declaradas en el scope local.

var scope = 'I\'m global';

const functionScope = (() => {
    const func = () => {
        return scope //Toma el valor de la variable declarada en el Scope Global
    };
    console.log(func());
})();

const functionLocalScope = (() => {
    // A esto se le llama el ámbito léxico. Esta variable pertenece al scope local y es diferente a la variable en el scope global, asi tengan el mismo nombre
    var scope = 'I am just a local';
    const func = () => {
        return scope //Toma el valor de la variable declarada dentro del bloque de código (Scope Local)
    }
    console.log(func());
})();

console.log(scope);

