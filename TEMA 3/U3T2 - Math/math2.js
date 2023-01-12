/**
 * * Creamos la funcion calculaValoresCircunferencia que nos muestra los valores de una circunferencia segun el radio que se le pasara como argumento
 */
function calculaValoresCircunferencia() {
    console.log('Entrando en la funcion calculaValoresCircunferencia');
    // Declaramos la constante argumentos que son los datos que utilizaremos para el radio
    const argumentos = process.argv.slice(2);

    // Declaramos la variable radio que sera el primer numero introducido, que lo utilizaremos para los distintos valores de la circunferencia
    let radio = argumentos[0];
    // Declaramos las variables de los distintos valores de la circunferencia
    let diametro = radio * 2;
    let perimetroCircunferencia = 2 * Math.PI * radio;
    let areaCircunferencia = Math.PI * Math.pow(radio, 2);
    let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
    let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

    console.log(`Valor del radio: ${radio} cm`);
    console.log(`Valor del diametro: ${diametro} cm`);
    console.log(`Valor del perimetro de la circunferencia: ${perimetroCircunferencia} cm`);
    console.log(`Valor del area de la circunferencia: ${areaCircunferencia} cm2`);
    console.log(`Valor del area de la esfera: ${areaEsfera} cm2`);
    console.log(`Valor del volumen de la esfera: ${volumenEsfera} cm3`);

    console.log('Saliendo de la funcion calculaValoresCircunferencia');
}

// Llamamos a la funcion para ejecutarla
calculaValoresCircunferencia();