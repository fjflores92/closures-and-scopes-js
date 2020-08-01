// Function Scope

const otherFunc = () => {
    var x = 1; 
    var x = 2; //Con var puedes reasignar una variable
    let y = 1;
    //let y = 2; //Con let no puedes reasignar una variable
    console.log(x, y);
}

let y = 3; //Fuera del scope local puedes asignar una variable con el mismo nombre declarada con let
otherFunc();
console.log(y);