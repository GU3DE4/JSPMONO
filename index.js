
console.log("Hola Mundo");

// constante sumar dos numeros
// adentro tiene un arrow function que recibe dos parametros
// y retorna la suma de los dos numeros
const sumarDosNumeros = (a, b) => {
    const variableDeSuma = a + b;
    return variableDeSuma;
}

// Tipos de variables
const tiposDeVariables = {
    string: "mi nombre es juan", // Cadena de texto
    number: 1, // Numero entero
    boolean: true, // Booleano (true o false)
    null: null, // Null (nulo)
    undefined: undefined, // Undefined (indefinido)
}

console.log(tiposDeVariables.string);

const array = ["juan", "perez", "lupe", "pepe", "maria", "jose", "ana", "pedro", "luis", "carlos", "sofia", "diego", "valentina", "daniel", "isabella", "gabriel"];

// tres partes, i que es el contador, la condicion en la que se ejecuta y el increment
for (let i = 0; i < array.length; i+=2) {
    console.log(i, array[i]);
}


console.log(sumarDosNumeros(1, 2));



