/**
 * * Creamos la funcion mostrarHora, que mostrara la hora en diferentes formatos segun el argumento que se le pase
 */
function mostrarHora() {
    console.log('Entrando en la funcion mostrarHora');

    // Declaramos la constante argumentos que son los datos que utilizaremos para el tipo de formato
    const argumentos = process.argv.slice(2);

    // Declaramos como variable la fecha actual
    let fechaActual = new Date();

    if (argumentos == 1) {// Si el numero introducido como parametro es el 1, mostraremos la hora en el formato 1
        console.log('Formato 1');

        // Declaramos como variable la hora actual en formato 1
        let horaFormato1 = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
        console.log(horaFormato1);
    } else {
        console.log('Formato 2');

        // Declaramos como variable la hora actual en formato 2
        let horaFormato2 = ``;
        if (fechaActual.getHours() >= 12 && fechaActual.getHours() < 24) { // Si la hora actual esta entre las 12 y las 23
            horaFormato2 += `${fechaActual.getHours()-12}:${fechaActual.getMinutes()} PM`
        } else { // Si la hora actual esta entre las 00 y las 11
            horaFormato2 += `${fechaActual.getHours()}:${fechaActual.getMinutes()} AM`
        }
        console.log(horaFormato2);
    }

    console.log('Saliendo de la funcion mostrarHora');
}

// Llamamos a la funcion para ejecutarla
mostrarHora();