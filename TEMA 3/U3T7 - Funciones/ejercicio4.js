function cambioMayusculaMinuscula() {
    let cadena = prompt("Introduce un texto");
    let frecuencia = parseInt(prompt("Introduce el valor de la frecuencia"));

    let cadenaModificada = "";

    for (let i = 0; i < cadena.length; i++) {
        if (i % (frecuencia-1) === 0) {
            if (cadena[i] === cadena[i].toUpperCase()) {
                cadenaModificada += cadena[i].toLowerCase();
            } else if (cadena[i] === cadena[i].toLowerCase()) {
                cadenaModificada += cadena[i].toUpperCase();
            } else {
                cadenaModificada += cadena[i];
            }
        } else {
            cadenaModificada += cadena[i];
        }
    }
    alert(`Cadena modificada: ${cadenaModificada}`)
}

cambioMayusculaMinuscula();