const $FORM = document.getElementById('ej5');
const $FCREACION = document.getElementById('fCreacion');
const $COCINERO = document.getElementById('cocinero');
const $DESTINATARIO = document.getElementById('destinatario');
const $GRAMOS = document.getElementById('gramos');
const $COMPOSICION = document.getElementById('composicion');
const $CUENTA = document.getElementById('cuenta');

function handleSubmit(e) {
    e.preventDefault();
    let fCreacion = $FCREACION.value;
    let cocinero = $COCINERO.value;
    let destinatario = $DESTINATARIO.value;
    let gramos = $GRAMOS.value;
    let composicion = $COMPOSICION.value;
    let cuenta = $CUENTA.value;

    if (fCreacion == "" || isValidFCreacion(fCreacion) == false) {
        alert('La fecha de creacion debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por el formato dd/mm/aaaa');
    } else if (cocinero == "" || isValidCocinero(cocinero) == false) {
        alert('El cocinero debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por un nombre en clave formado por dos letras en mayúscula, un símbolo y cuatro dígitos');
    } else if (destinatario == "" || isValidDestinatario(destinatario) == false) {
        alert('El destinatario debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por  dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos');
    } else if (gramos == "" || isValidGramos(gramos) == false) {
        alert('Los gramos debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por un número del 100 al 5000');
    } else if (composicion == "" || isValidComposicion(composicion) == false) {
        alert('La composicion debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por una cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número');
    } else if (cuenta == "" || isValidCuenta(cuenta) == false) {
        alert('La cuenta bancaria debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesta por el formato estadounidense');
    } else {
        alert('Bolsa correcta y registrada');
        cuenta = cuenta.replace(/-/g, "");
        document.getElementById("cuentaCorrecta").innerHTML = cuenta;
        var regBolsa = {
            fCreacion: fCreacion,
            cocinero: cocinero,
            destinatario: destinatario,
            gramos: gramos,
            composicion: composicion,
            cuenta: cuenta
        };
        console.log(regBolsa);
        var newBolsa = JSON.stringify(regBolsa);
        console.log(newBolsa);
    }
}

function isValidFCreacion(fCreacion) {
    const validacion = /^\d{2}\/\d{2}\/\d{4}$/;
    return validacion.test(fCreacion);
}

function isValidCocinero(cocinero) {
    const validacion = /[A-Z]{2}\W\d{4}/;
    return validacion.test(cocinero);
}

function isValidDestinatario(destinatario) {
    const validacion = /([A-Z]{2,3})+([_])+([a-z])+([:])+(\d{4})$/;
    return validacion.test(destinatario);
}

function isValidGramos(gramos) {
    const validacion = /^([5-9][0-9][0-9]|[1-4][0-9][0-9][0-9]|5000)$/;
    return validacion.test(gramos);
}

function isValidComposicion(composicion) {
    const validacion = /([0,9])+([g])+([A-Z]{1,2})+([0-9]{0,1})+([A-Z]{1,2})+([0-9]{0,1})$/;
    return validacion.test(composicion);
}

function isValidCuenta(cuenta) {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = parseInt(`${cuenta[2]}${cuenta[3]}`);
    let sumaLetras = letras.indexOf(cuenta[0]) + letras.indexOf(cuenta[1]);

    if (numeros != sumaLetras) {
        return false;
    }

    if (cuenta[4] != "-" || cuenta[17] != "-") {
        return false;
    }

    for (let i = 5; i < cuenta.length - 3; i++) {
        if (isNaN(cuenta[i])) {
            return false;
        }
    }
    let primerosNumerosCuenta = parseInt(cuenta[5])+parseInt(cuenta[6])+parseInt(cuenta[7])+parseInt(cuenta[8])+parseInt(cuenta[9])+parseInt(cuenta[10]);
    let ultimosNumerosCuenta = parseInt(cuenta[11])+parseInt(cuenta[12])+parseInt(cuenta[13])+parseInt(cuenta[14])+parseInt(cuenta[15])+parseInt(cuenta[16]);

    if(parseInt(primerosNumerosCuenta/6)!=cuenta[18]){
        return false;
    }

    if(parseInt(ultimosNumerosCuenta/6)!=cuenta[19]){
        return false;
    }

    return true;
}

$FORM.addEventListener('submit', handleSubmit);