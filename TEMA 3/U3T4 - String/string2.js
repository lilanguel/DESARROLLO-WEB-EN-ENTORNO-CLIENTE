/**
 * * Creamos la funcion requisitosContrasena, que nos mostrara si nuestra contrasena es segura mediante unos requisitos
 */
function requisitosContrasena() {
    console.log('Entrando en la funcion requisitosContrasena');

    // Declaramos la constante argumentos que son los datos que utilizaremos para la contrasena
    const argumentos = process.argv.slice(2);

    // Declaramos la variable contrasena que sera el primer valor introducido, que lo utilizaremos para comprobar si cumple los requisitos
    let contrasena = argumentos[0];

    // Declaramos la variable requisitosCumplidos inicializada a 0, que la iremos aumentando si cumple con un requisito
    let requisitosCumplidos = 0;

    // Si la contrasena tiene entre 8 y 16 caracteres cumplira el primer requisito
    if (contrasena.length >= 8 && contrasena.length <= 16) {
        console.log(`Tiene entre 8 y 16 caracteres`);
        requisitosCumplidos++;
    } else {
        console.log(`No tiene entre 8 y 16 caracteres`);
    }

    // Si la contrasena tiene alguna mayuscula cumplira el segundo requisito
    if (tiene_mayusculas(contrasena)) {
        console.log(`Tiene una letra mayuscula`);
        requisitosCumplidos++;
    } else {
        console.log(`No tiene una letra mayuscula`);
    }

    // Si la contrasena tiene alguna minuscula cumplira el tercer requisito
    if (tiene_minusculas(contrasena)) {
        console.log(`Tiene una letra minuscula`);
        requisitosCumplidos++;
    } else {
        console.log(`No tiene una letra minuscula`);
    }

    // Si la contrasena tiene algun numero cumplira el cuarto requisito
    if (tiene_numeros(contrasena)) {
        console.log(`Tiene un numero`);
        requisitosCumplidos++;
    } else {
        console.log(`No tiene un numero`);
    }

    // Si la contrasena tiene algun caracter especial cumplira el quinto requisito
    if (tiene_caracter_especial(contrasena)) {
        console.log(`Tiene un caracter especial`);
        requisitosCumplidos++;
    } else {
        console.log(`No tiene un caracter especial`);
    }

    // Si la suma de todos los requisitos cumplidos es 5, los habra cumplido todos y sera una contrasena segura
    if (requisitosCumplidos == 5) {
        console.log(`Cumple con todos los requisitos, es una contrasena segura`);
    } else {
        console.log(`No cumple con todos los requisitos, no es una contrasena segura`);
    }

    console.log('Saliendo de la funcion requisitosContrasena');
}

/**
 * * Comprueba si una cadena pasada como parametro tiene una mayuscula
 * @param {String} texto 
 * @returns {boolean}
 */

function tiene_mayusculas(texto) {
    // Declaramos la variable letras_mayusculas para luego recorrerla
    var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

    // Recorremos el texto pasado como parametro
    for (i = 0; i < texto.length; i++) {
        // Si encuentra una mayuscula devuelve true
        if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    // Si ha acabado el bucle y no ha encontrado una mayuscula devuelve false
    return 0;
}

/**
 * * Comprueba si una cadena pasada como parametro tiene una minuscula
 * @param {String} texto 
 * @returns {boolean}
 */

function tiene_minusculas(texto) {
    // Declaramos la variable letras_minusculas para luego recorrerla
    var letras_minusculas = "abcdefghyjklmnñopqrstuvwxyz";

    // Recorremos el texto pasado como parametro
    for (i = 0; i < texto.length; i++) {
        // Si encuentra una minuscula devuelve true
        if (letras_minusculas.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    // Si ha acabado el bucle y no ha encontrado una minuscula devuelve false
    return 0;
}

/**
 * * Comprueba si una cadena pasada como parametro tiene un numero
 * @param {String} texto 
 * @returns {boolean}
 */

function tiene_numeros(texto) {
    // Declaramos la variable numeros para luego recorrerla
    var numeros = "0123456789";

    // Recorremos el texto pasado como parametro
    for (i = 0; i < texto.length; i++) {
        // Si encuentra un numero devuelve true
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    // Si ha acabado el bucle y no ha encontrado un numero devuelve false
    return 0;
}

/**
 * * Comprueba si una cadena pasada como parametro tiene un caracter especial
 * @param {String} texto 
 * @returns {boolean}
 */

function tiene_caracter_especial(texto) {
    // Declaramos la variable caracteres para luego recorrerla
    var caracteres = "-_@#$%&";

    // Recorremos el texto pasado como parametro
    for (i = 0; i < texto.length; i++) {
        // Si encuentra un caracter especial devuelve true
        if (caracteres.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    // Si ha acabado el bucle y no ha encontrado un caracter especial devuelve false
    return 0;
}

// Llamamos a la funcion para ejecutarla
requisitosContrasena();