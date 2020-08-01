// Local Scope

// El alcance de una variable se define por su ubicación dentro del código fuente

(() => {
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

// Las funciones anidadas dentro de otra función tienen acceso a las variables declaradas con var en el scope local y global.

var scope = 'I\'m global';

(() => {
    const func = () => {
        return scope //Toma el valor de la variable declarada en el Scope Global
    };
    console.log(func());
})();

(() => {
    // A esto se le llama el ámbito léxico. Esta variable pertenece a la función anónima creada (scope local) y es diferente a la variable en el scope global, asi tengan el mismo nombre
    var scope = 'I am just a local'; //La variable scope es una variable local creada dentro de la función
    const func = () => { //La función func es una función interna
        return scope //Toma el valor de la variable declarada en la función anónima externa
    }
    console.log(func());
})();

console.log(scope);

