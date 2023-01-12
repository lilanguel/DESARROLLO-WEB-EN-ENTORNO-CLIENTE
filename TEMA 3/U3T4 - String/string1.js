/**
 * * Creamos la funcion valoresNombre que mostrara por consola varios formatos de un nombre completo pasado
 */
function valoresNombre() {
    console.log('Entrando en la funcion valoresNombre');

    // Declaramos la constante nombreCompleto que sera la cadena que le pediremos para los distintos formatos del nombre completo
    let nombreCompleto = prompt("Introduce tu nombre completo:");
    console.log(`Nombre completo introducido: ${nombreCompleto}`);

    // Reemplazamos los espacios de la cadena introducida por una cadena vacia y lo declaramos como una variable
    let nombreCompletoSinEspacios = nombreCompleto.replace(/\s/g, "");

    // Declaramos la variable tamanoNombreCompleto que la inicializaremos como la longitud de nombreCompletoSinEspacios
    let tamanoNombreCompleto = nombreCompletoSinEspacios.length;
    console.log(`Tamano del nombre completo: ${tamanoNombreCompleto}`);

    // Declaramos la variable nombreCompletoMinusculas que sera el nombre completo con todas las letras minusculas
    let nombreCompletoMinusculas = nombreCompleto.toLowerCase();
    console.log(`Cadena en minusculas: ${nombreCompletoMinusculas}`);

    // Declaramos la variable nombreCompletoMayusculas que sera el nombre completo con todas las letras mayusculas
    let nombreCompletoMayusculas = nombreCompleto.toUpperCase();
    console.log(`Cadena en mayusculas: ${nombreCompletoMayusculas}`);

    // Declaramos el array arrayNombreCompleto y anadiremos el nombre, el apellido 1 y el apellido 2
    let arrayNombreCompleto = nombreCompleto.split(" ");
    console.log(`Nombre: ${arrayNombreCompleto[0]}`);
    console.log(`Apellido 1: ${arrayNombreCompleto[1]}`);
    console.log(`Apellido 2: ${arrayNombreCompleto[2]}`);

    // Declaramos la variable propuestaNombreUsuario1 compuesta por la inicial del nombre, el primer apellido y la inicial del segundo apellido
    let propuestaNombreUsuario1 = (`${arrayNombreCompleto[0].charAt(0)}${arrayNombreCompleto[1]}${arrayNombreCompleto[2].charAt(0)}`);
    propuestaNombreUsuario1 = propuestaNombreUsuario1.toLowerCase();
    console.log(`Propuesta de nombre de usuario: ${propuestaNombreUsuario1}`);

    // Declaramos la variable propuestaNombreUsuario2 compuesta por las tres primeras letras del nombre y delos dos apellidos
    let propuestaNombreUsuario2 = (`${arrayNombreCompleto[0].slice(0,3)}${arrayNombreCompleto[1].slice(0,3)}${arrayNombreCompleto[2].slice(0,3)}`);
    propuestaNombreUsuario2 = propuestaNombreUsuario2.toLowerCase();
    console.log(`Propuesta de nombre de usuario: ${propuestaNombreUsuario2}`);

    console.log('Saliendo de la funcion valoresNombre');
}

// Llamamos a la funcion para ejecutarla
valoresNombre();