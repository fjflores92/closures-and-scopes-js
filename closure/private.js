// Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

const creaFunc = () => {
    var nombre = "Mozilla";
    return {
        getName () {
            return nombre;
        },

        setName (value) {
            nombre = value;
        },
    };
}
  
const newFunc = creaFunc();

console.log(newFunc.getName()); // Mozilla
newFunc.setName('Paco');
console.log(newFunc.getName()); // Paco
//console.log(nombre); //nombre not defined