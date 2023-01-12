/**
 * * Creamos la funcion que calcula los dias que faltan desde la fecha actual hasta el fin del curso
 */
function diasHastaFinDelCurso() {
    console.log('Entrando en la funcion diasHastaFinDelCurso');
    // Declaramos una variable que sea la fecha de fin del curso
    const diaFinDeCurso = new Date(2023, 5, 24);

    // Declaramos una variable para la fecha actual
    let fechaActual = new Date();

    // Calculamos el tiempo de diferencia que hay entre la fecha de fin de curso y la fecha actual
    let diferenciaTiempo = diaFinDeCurso.getTime() - fechaActual.getTime();

    // Declaramos una variable que sea el calculo a dias de la variable diferenciaTiempo
    let dias = Math.round(diferenciaTiempo / 1000 / 60 / 60 / 24);

    // Mostramos por consola los dias que quedan para la fecha de fin del curso
    console.log('Quedan ' + dias + ' dias para el fin del curso');
    console.log('Saliendo de la funcion diasHastaFinDelCurso');
}
// Llamamos a la funcion para ejecutarla
diasHastaFinDelCurso();