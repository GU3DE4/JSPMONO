const escuela = {
    nombre: "Escuela de Programación",
    direccion: "Calle 123",
    telefono: "1234567890",
    alumnos: [
        {
            id: "550e8400-e29b-41d4-a716-446655440000",
            nombre: "Juan",
            apellido: "Perez",
            edad: 20,
            grado: 1,
        },
        {
            id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8", 
            nombre: "Maria",
            apellido: "Lopez",
            edad: 19,
            grado: 2,
        },
        {
            id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
            nombre: "Carlos", 
            apellido: "Rodriguez",
            edad: 21,
            grado: 3,
        },
        {
            id: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
            nombre: "Ana",
            apellido: "Garcia",
            edad: 20,
            grado: 1,
        },
        {
            id: "6ba7b813-9dad-11d1-80b4-00c04fd430c8",
            nombre: "Pedro",
            apellido: "Martinez",
            edad: 19,
            grado: 1,
        }
    ]	
}

const obtenerAlumnosDeUnGrado = (grado) => {
    return escuela.alumnos.filter(alumno => alumno.grado === grado);
}

const contarAlumnosMayoresDe21 = () => {
    return escuela.alumnos.filter(alumno => alumno.edad === 21).length;
}

console.log(obtenerAlumnosDeUnGrado(1));
console.log("Alumnos mayores de 21:", contarAlumnosMayoresDe21());




// operadores logicos
// && (and)
// || (or)
// ! (not)
// operadores de comparacion
// == (igual)
// != (distinto)
// === (igual y del mismo tipo)
// !== (distinto y del mismo tipo)
// > (mayor)
// < (menor)
console.log("igualdad normal", "19" == 19);
console.log("igualdad estricta", "19" === 19);

const esMayorQueCincoOMenorQueDiez = (numero) => {
    return numero > 5 && numero < 10;
}

console.log(esMayorQueCincoOMenorQueDiez(6));
console.log(esMayorQueCincoOMenorQueDiez(100));

const obtenerApellidosConGGradoUno = () => {
    return escuela.alumnos
        .filter(alumno => alumno.grado === 1 && alumno.apellido.startsWith('G'))
        .map(alumno => alumno.apellido);
}

// Probamos la función
console.log("Apellidos con G de alumnos de grado 1:", obtenerApellidosConGGradoUno());



