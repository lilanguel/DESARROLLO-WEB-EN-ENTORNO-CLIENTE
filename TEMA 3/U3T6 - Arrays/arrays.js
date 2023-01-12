let array = ["Gibraltar", "Uruguay", "Gabon", "Francia", "Albania"];

let opcion = parseInt(prompt(`Introduce una opcion: \n 1 - Mostrar número de países. \n 2 - Mostrar listado de países  \n 3 - Mostrar un intervalo de países \n 4 - Añadir un país \n 5 - Borrar un país \n 6 - Consultar un país`));

if (opcion == 1) {
    mostrarNumeroElementosArray(array);
} else if (opcion == 2) {
    let formatoOpcion2 = parseInt(prompt(`Como lo quieres mostrar? \n 1 - Orden que se encuentran en el array \n 2 - Del revés \n 3 - Ordenados alfabéticamente`));

    if (formatoOpcion2 == 1) {
        mostrarElementosArray(array);
    } else if (formatoOpcion2 == 2) {
        mostrarElementosInversosArray(array);
    } else {
        mostrarElementosAlfabeticamente(array);
    }
} else if (opcion == 3) {
    let intervalo = prompt(`Introduce el intervalo en el formato inicio-fin`);

    let arrayIntervalo = intervalo.split("-");

    let posicion1 = arrayIntervalo[0];

    let posicion2 = arrayIntervalo[1];

    mostrarElementosPorIntervalos(array, posicion1, posicion2);
} else if (opcion == 4) {
    let pais = prompt(`Introduce un pais`);

    let opcionInsercionPais = parseInt(prompt(`Como lo quieres introducir? \n 1 - Al principio \n 2 - Al final`));

    if (opcionInsercionPais == 1) {
        anadirElementoPrincipioArray(array, pais);
    } else {
        anadirElementoFinalArray(array, pais);
    }
} else if (opcion == 5) {
    let opcionEliminacionPais = parseInt(prompt(`Como lo quieres eliminar? \n 1 - Al principio \n 2 - Al final`));

    if (opcionEliminacionPais == 1) {
        eliminarElementoPrincipioArray(array);
    } else {
        eliminarElementoFinalArray(array);
    }
} else {
    let opcionConsultarPais = parseInt(prompt(`Como lo quieres consultar? \n 1 - Por posicion \n 2 - Por nombre`));

    if (opcionConsultarPais == 1) {
        let posicion = parseInt(prompt(`Que posicion deseas consultar?`));
        mostrarElementoPorPosicion(array, posicion);
    } else {
        let nombrePais = prompt(`Introduce el nombre del pais`)
        mostrarPosicionPorElemento(array, nombrePais);
    }
}

function mostrarNumeroElementosArray(array) {
    console.log('Entrando en la funcion mostrarNumeroElementosArray');

    console.log(`Numero de elementos del array: ${array.length}`);

    console.log('Saliendo de la funcion mostrarNumeroElementosArray');
}


function mostrarElementosArray(array) {
    console.log('Entrando en la funcion mostrarElementosArray');

    for (let i = 0; i < array.length; i++) {
        console.log(`Elemento ${i} del array: ${array[i]}`);
    }

    console.log('Saliendo de la funcion mostrarElementosArray');
}

function mostrarElementosInversosArray(array) {
    console.log('Entrando en la funcion mostrarElementosInversosArray');

    array.reverse();

    for (let i = 0; i < array.length; i++) {
        console.log(`Elemento ${i} del array: ${array[i]}`);
    }

    console.log('Saliendo de la funcion mostrarElementosInversosArray');
}

function mostrarElementosAlfabeticamente(array) {
    console.log('Entrando en la funcion mostrarElementosAlfabeticamente');
    console.log(array.sort());

    console.log('Saliendo de la funcion mostrarElementosAlfabeticamente');
}

function anadirElementoPrincipioArray(array, pais) {
    console.log('Entrando en la funcion anadirElementoPrincipioArray');

    array.unshift(pais);

    console.log(array);

    console.log('Saliendo de la funcion anadirElementoPrincipioArray');
}

function anadirElementoFinalArray(array, pais) {
    console.log('Entrando en la funcion anadirElementoFinalArray');

    array.push(pais);

    console.log(array);

    console.log('Saliendo de la funcion anadirElementoFinalArray');
}

function eliminarElementoPrincipioArray(array) {
    console.log('Entrando en la funcion eliminarElementoPrincipioArray');

    console.log(`Elemento eliminado: ${array.shift()}`);

    console.log(array);

    console.log('Saliendo de la funcion eliminarElementoPrincipioArray');
}

function eliminarElementoFinalArray(array) {
    console.log('Entrando en la funcion eliminarElementoFinalArray');

    console.log(`Elemento eliminado: ${array.pop()}`);

    console.log(array);

    console.log('Saliendo de la funcion eliminarElementoFinalArray');
}

function mostrarElementoPorPosicion(array, posicion) {
    console.log('Entrando en la funcion mostrarElementoPorPosicion');

    for (let i = 0; i < array.length; i++) {
        if (i == posicion) {
            console.log(`Elemento de la posicion ${posicion}: ${array[i]}`)
        }

    }

    console.log('Saliendo de la funcion mostrarElementoPorPosicion');
}

function mostrarPosicionPorElemento(array, elemento) {
    console.log('Entrando en la funcion mostrarPosicionPorElemento');

    for (let i = 0; i < array.length; i++) {
        if (array[i] == elemento) {
            console.log(`Posicion del elemento ${elemento}: ${i}`)
        }

    }

    console.log('Saliendo de la funcion mostrarPosicionPorElemento');
}

function mostrarElementosPorIntervalos(array, posicion1, posicion2) {
    console.log('Entrando en la funcion mostrarElementosPorIntervalos');

    for (let i = posicion1; i <= posicion2; i++) {
        console.log(`Elemento de la posicion ${i}: ${array[i]}`)
    }

    console.log('Saliendo de la funcion mostrarElementosPorIntervalos');
}