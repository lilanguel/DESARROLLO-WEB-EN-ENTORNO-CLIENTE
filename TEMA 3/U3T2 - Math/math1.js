/**
 * * Creamos la funcion para calcular las distintas operaciones matematicas segun un argumento pasado
 */

function operacionesMatematicas() {
    console.log('Entrando en la funcion operacionesMatematicas');

    // Declaramos la constante argumentos que son los datos que utilizaremos para el tipo de operacion que se realizara
    const argumentos = process.argv.slice(2);

    // Declaramos la variable que sera el primer numero introducido, que lo utilizaremos para saber que operacion se realizara mediante un switch
    let numeroIntroducido = argumentos[0];

    switch (numeroIntroducido) {
        case '1': // Si el numero introducido es 1
            let base = argumentos[1]; // Declaramos la variable base que sera el segundo numero introducido como argumento
            let exponente = argumentos[2]; // Declaramos la variable exponente que sera el tercer numero introducido como argumento

            // Declaramos la variable potencia, que es la operacion de elevar a la base el exponente
            let potencia = Math.pow(base, exponente);

            console.log(`La potencia de X elevado a Y es: ${potencia}`);

            break;
        case '2': // Si el numero introducido es 2
            let n = argumentos[1]; // Declaramos la variable n que sera el segundo numero introducido como argumento

            if (n >= 0) { // Si n es mayor igual que 0 se ejecutara este bloque
                // Declaramos la variable raiz que sera la raiz cuadrada de n
                let raiz = Math.sqrt(n);

                console.log(`La raíz de X es: ${raiz}`);
            } else { // Si n no es mayor igual que 0 se ejecutara este bloque
                console.log(`El numero introducido es negativo`)
            }
            break;
        case '3': // Si el numero introducido es 3
            let decimal = argumentos[1]; // Declaramos la variable decimal que sera el segundo numero introducido como argumento

            // Declaramos la variable decimalRedondeado que sera el resultado del redondeo del numero decimal
            let decimalRedondeado = Math.round(decimal);

            console.log(`El numero redondeado es: ${decimalRedondeado}`);

            break;
        case '4': // Si el numero introducido es 4
            let angulo = argumentos[1]; // Declaramos la variable angulo que sera el segundo numero introducido como argumento

            if (angulo >= 0 && angulo <= 360) { // Si el angulo es mayor o igual que 0 y es menor o igual que 360 se ejecutara este bloque
                // Declaramos las variables seno, coseno y tangente que seran las operaciones trigonometricas del angulo introducido 
                let seno = Math.sin(angulo);
                let coseno = Math.cos(angulo);
                let tangente = Math.tan(angulo);

                console.log(`Seno: ${seno}, coseno: ${coseno} y tangente: ${tangente}`)
            } else { // Si el angulo no es mayor o igual que 0 o no es menor o igual que 360 se ejecutara este bloque
                console.log(`El angulo introducido no esta entre 0 y 360 grados`)
            }
            break;
    }
    console.log('Saliendo de la funcion operacionesMatematicas');
}
// Llamamos a la funcion para ejecutarla
operacionesMatematicas();