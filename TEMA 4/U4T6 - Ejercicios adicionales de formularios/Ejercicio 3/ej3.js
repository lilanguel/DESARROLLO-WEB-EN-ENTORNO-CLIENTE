window.onload = iniciar;

function iniciar() {
    let cookieMeses = getCookie('meses');
    if (cookieMeses != "") {
        let contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = "";
        alert("Meses: " + cookieMeses);
        let botonEliminarCookie = document.createElement("input");
        botonEliminarCookie.type = "button";
        botonEliminarCookie.setAttribute("onclick", "borrarCookie('meses')");
        botonEliminarCookie.value = "Eliminar Cookie Meses";
        contenedor.appendChild(botonEliminarCookie);
    }
}

const $FORM = document.getElementById('ej3');
const $NOMBRE = document.getElementById('nombre');
const $TELEFONO = document.getElementById('telefono');
const $MESES = document.getElementById('nMeses');

function handleSubmit(e) {
    e.preventDefault();
    let nombre = $NOMBRE.value;
    let telefono = $TELEFONO.value;
    let meses = $MESES.value;

    if (nombre == "" || isValidNombre(nombre) == false) {
        alert('El nombre debe ser un valor válido : \n - Debe estar relleno \n - Debe contener al menos una minúscula, mayúscula,número y alguno de estos signos (. - _)');
    } else if (telefono == "" || isValidTelefono(telefono) == false) {
        alert('El telefono debe ser un valor válido : \n - Debe estar relleno \n - Debe estar compuesto por el formato (XXX) XX-XX-XX');
    } else if (meses == "") {
        alert('Los meses deben ser un valor válido : \n - Debe estar relleno \n - Debe introducir una cantidad entre 1 y 24');
    } else {
        abrirVentana();
        var regUser = {
            nombre: nombre,
            telefono: telefono,
            meses: meses
        };
        crearCookie('meses', meses);
        console.log(regUser);
        var newUser = JSON.stringify(regUser);
        console.log(newUser);
        recargarVentana();
    }
}

function isValidNombre(nombre) {
    const validacion = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*(\.|\_|\-)).*$/;
    return validacion.test(nombre);
}

function isValidTelefono(telefono) {
    const validacion = /^\(([0-9]{3}\))+(\s)+([0-9]{2})+(-)+([0-9]{2})+(-)+([0-9]{2})$/;
    return validacion.test(telefono);
}

function abrirVentana() {
    let ventana = window.open("envio_formulario.html", "envio de datos", "width=300,height=300,scrollbars=NO");
    setTimeout(function () {
        ventana.close()
    }, 3000);
}

function recargarVentana() {
    setInterval("location.reload()", 4000);
}

function crearCookie(cname, cvalue) {
    document.cookie = `${cname}=${cvalue}`;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";"); //Divide la cookie separando por ;
    for (let i = 0; i < ca.length; i++) {
        //Recorre cada trozo de la cookie
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { //Si encuentra el campo buscado
            return c.substring(name.length, c.length); //lo devuelve
        }
    }
    return ""; //Si no devuelve vacío
}

function borrarCookie(name) {
    let d = new Date(); // Se extrae la fecha actual
    let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
    document.cookie = name + "=" + getCookie(name) + "; " + expires; //Se crea la cookie
}

$FORM.addEventListener('submit', handleSubmit);