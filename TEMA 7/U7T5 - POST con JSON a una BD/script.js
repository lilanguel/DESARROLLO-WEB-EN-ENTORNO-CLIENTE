let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = inicio;

function inicio() {
    document.getElementById("botonEnviar").addEventListener("click", mostrar);
}

function mostrar() {
    let titulo = document.getElementById("titulo").value;
    let director = document.getElementById("director").value;
    let cadena = document.getElementById("cadena").value;
    let anyo = document.getElementById("anyo").value;
    let terminada = document.getElementById("terminada").checked;

    let serie = {
        titulo: titulo,
        director: director,
        cadena: cadena,
        anyo: anyo,
        terminada: terminada
    }

    xhr = new XMLHttpRequest();
    xhr.open("POST", "create_serie.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    let body_string = JSON.stringify(serie);

    xhr.onreadystatechange = comprobar_estado;
    xhr.send(body_string);
}

function comprobar_estado() {
    if (
        this.readyState == READY_STATE_COMPLETE &&
        this.status == HTTP_STATUS_OK
    ) {
        let respuesta = xhr.responseText;
        let resultado = document.getElementById("resultadoPeticion");
        resultado.innerHTML = respuesta;
        if (respuesta === '"ok"') {
            resultado.className = "green";
        } else {
            resultado.className = "red";
        }
    }
}