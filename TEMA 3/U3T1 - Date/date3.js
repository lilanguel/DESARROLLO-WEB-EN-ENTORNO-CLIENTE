/**
 * * Creamos la funcion mostrarFecha, que mostrara la fecha en diferentes formatos segun el argumento que se le pase

 */
function mostrarFecha() {
    console.log('Entrando en la funcion mostrarFecha');

    // Declaramos la constante argumentos que son los datos que utilizaremos para el tipo de formato
    const argumentos = process.argv.slice(2);

    // Declaramos como variable la fecha actual
    let fechaActual = new Date();

    if (argumentos == 1) { // Si el numero introducido como parametro es el 1, mostraremos la fecha en el formato 1
        console.log('Formato 1');

        // Creamos una variable para transformar la fecha actual
        let fechaFormato1 = `${fechaActual.getDate()}/${fechaActual.getMonth()+1}/${fechaActual.getFullYear()}`;

        console.log(fechaFormato1); // Mostramos por consola la fecha actual en el formato 1
    } else if (argumentos == 2) { // Si el numero introducido como parametro es el 2, mostraremos la fecha en el formato 2
        console.log('Formato 2');

        // Creamos un array de dias de la semana y otro de los meses
        let arrayDias = [`Domingo`, `Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sabado`];
        let arrayMeses = [`enero`, `febrero`, `marzo`, `abril`, `mayo`, `junio`, `julio`, `agosto`, `septiembre`, `octubre`, `noviembre`, `diciembre`];

        // Creamos una variable para transformar la fecha actual
        let fechaFormato2 = ``;

        // Recorremos el array de dias desde la posicion 0 hasta la longitud del array
        for (let i = 0; i < arrayDias.length; i++) {
            // Si el dia de la semana de la fecha actual es el numero que se esta recorriendo, a la fecha en el formato 2 se le concatena el dia de la semana que le corresponde segun el array de dias y el dia del mes
            if (fechaActual.getDay() == i) {
                fechaFormato2 += `${arrayDias[i]}, ${fechaActual.getDate()} de `;
            }
        }

        // Recorremos el array de meses desde la posicion 0 hasta la longitud del array
        for (let i = 0; i < arrayMeses.length; i++) {
            // Si el mes de la fecha actual es el numero que se esta recorriendo, a la fecha en el formato 2 se le concatena el mes que le corresponde segun el array de meses y el ano
            if (fechaActual.getMonth() == i) {
                fechaFormato2 += `${arrayMeses[i]} de ${fechaActual.getFullYear()}`;
            }
        }

        console.log(fechaFormato2); // Mostramos por consola la fecha actual en el formato 2
    } else { // Si el numero introducido como parametro es otro numero que no sea 1 o 2, mostraremos la fecha en el formato 3
        console.log('Formato 3');

        // Creamos un array de dias de la semana en ingles y otro de los meses en ingles
        let arrayDiasIngles = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
        let arrayMesesIngles = [`January`, `February`, `March`, `April`, `May`, `June`, `Julu`, `August`, `September`, `October`, `November`, `December`];

        // Creamos una variable para transformar la fecha actual
        let fechaFormato3 = ``;

        // Recorremos el array de dias en ingles desde la posicion 0 hasta la longitud del array
        for (let i = 0; i < arrayDiasIngles.length; i++) {
            // Si el dia de la semana de la fecha actual es el numero que se esta recorriendo, a la fecha en el formato 3 se le concatena el dia de la semana que le corresponde segun el array de dias en ingles
            if (fechaActual.getDay() == i) {
                fechaFormato3 += `${arrayDiasIngles[i]}, `;
            }
        }

        // Recorremos el array de meses en ingles desde la posicion 0 hasta la longitud del array
        for (let i = 0; i < arrayMesesIngles.length; i++) {
            // Si el mes de la fecha actual es el numero que se esta recorriendo, a la fecha en el formato 3 se le concatena el mes ingles que le corresponde segun el array de dias en ingles, el ano y el dia del mes
            if (fechaActual.getMonth() == i) {
                fechaFormato3 += `${arrayMesesIngles[i]} ${fechaActual.getDate()}, ${fechaActual.getFullYear()}`;
            }
        }

        console.log(fechaFormato3); // Mostramos por consola la fecha actual en el formato 3
    }

    console.log('Saliendo de la funcion mostrarFecha')
}
// Llamamos a la funcion para ejecutarla
mostrarFecha();