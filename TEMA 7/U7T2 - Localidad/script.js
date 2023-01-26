let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let peticion_http;

window.onload = carga_contenido;

function carga_contenido() {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
        return;
    }
    document.getElementById("boton_mostrar_resultado").addEventListener("click", revisar_peticion);
}

function procesar_peticion() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {

            document.getElementById("resultado").textContent = peticion_http.responseText;
            if(document.getElementById("resultado").textContent=="SI"){
                document.getElementById("resultado").className="fondoVerde"
            }else{
                document.getElementById("resultado").className="fondoRojo"
            }
        }
    }
}

function revisar_peticion() {
    if (peticion_http) {
        let localidad = document.getElementById("campo_localidad").value;
        peticion_http.onreadystatechange = procesar_peticion;
        peticion_http.open("GET", `http://localhost:8090/TEMA 7/U7T2 - Localidad/localidad.php?localidad=${localidad}`, true);
        peticion_http.send();
    }
}