/**
 * * Creamos la funcion que calcula en que anos cae en domingo el cumpleanos que se introduce por argumentos desde el ano 2022 hasta el ano 2100

 */
function calculaCumpleanosDomingos() {
    console.log('Entrando en la funcion calculaCumpleanosDomingos')
    // Declaramos la constante argumentos que son los datos que utilizaremos para el dia y el mes
    const argumentos = process.argv.slice(2);

    // El primer argumento seria el dia y el segundo seria el mes (estos dos argumentos deben estar separados por un espacio)
    console.log("Dia: ", argumentos[0]);
    console.log("Mes: ", argumentos[1]);

    // Creamos la fecha de cumpleanos desde el ano 2022
    let fechaCumpleanos = new Date(2022, parseInt(argumentos[1]), parseInt(argumentos[0]));

    // Recorremos todos los anos que hay desde 2022 hasta 2100 
    for (let i = 2023; i <= 2100; i++) {
        if (fechaCumpleanos.getDay() == 0) { // Este bloque se ejecuta si el dia de la fecha de cumpleanos es el primer dia, reconoce como primer dia el domingo
            console.log('Ano: ' + i); // Mostramos por consola el ano
        }
        fechaCumpleanos.setFullYear(i); // Ponemos el ano que esta recorriendo el bucle a la fecha de cumpleanos
    }
    console.log('Saliendo de la funcion calculaCumpleanosDomingos')
}
// Llamamos a la funcion para ejecutarla
calculaCumpleanosDomingos();