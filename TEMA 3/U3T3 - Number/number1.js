/**
 * * Creamos la funcion formatosNumero que mostrara por consola los distintos formatos de un numero que le pasaremos en un argumento
 */
function formatosNumero() {
    console.log('Entrando en la funcion formatosNumero');

    // Declaramos la constante num que sera el numero que le pediremos para los distintos formatos del numero
    let num = parseInt(prompt("Introduce un número:"));
    console.log(`Numero introducido: ${num}`);

    // Declaramos las variables para los distintos formatos del numero
    let valorExp = num.toExponential();
    let decimal = num.toFixed(4);
    let binario = num.toString(2);
    let octal = num.toString(8);
    let hexadecimal = num.toString(16);

    console.log(valorExp);
    console.log(decimal);
    console.log(binario);
    console.log(octal);
    console.log(hexadecimal);

    console.log('Saliendo de la funcion formatosNumero');
}

// Llamamos a la funcion para ejecutarla
formatosNumero();