window.onload = iniciar;

function iniciar() {
    document.getElementById('dni').addEventListener('change', isValidDni);
    document.getElementById('nombre').addEventListener('change', isValidNombre);
    document.getElementById('fNac').addEventListener('change', isValidFNac);
    document.getElementById('nHijos').addEventListener('change', isValidNHijos);
    document.getElementById('email').addEventListener('change', isValidEmail);
    document.getElementById('web').addEventListener('change', isValidWeb);
    document.getElementById('password').addEventListener('change', isValidPassword);
}

function isValidDni(evento) {
    let dni = evento.currentTarget.value;

    const validacion = /^\d{8}[A-Z]$/;

    if (validacion.test(dni) == true) {
        document.getElementById('dni').className = 'correcto';
    } else {
        document.getElementById('dni').className = 'erroneo';
        document.getElementById('dni').value = "";
    }
}

function isValidNombre(evento) {
    let nombre = evento.currentTarget.value;

    const validacion = /^(?:\b\w+\b[\s\r\n]*){2,4}$/;

    if (validacion.test(nombre) == true) {
        document.getElementById('nombre').className = 'correcto';
    } else {
        document.getElementById('nombre').className = 'erroneo';
        document.getElementById('nombre').value = "";
    }
}

function isValidFNac(evento) {
    let fNac = evento.currentTarget.value;

    const validacion = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

    if (validacion.test(fNac) == true) {
        document.getElementById('fNac').className = 'correcto';
    } else {
        document.getElementById('fNac').className = 'erroneo';
        document.getElementById('fNac').value = "";
    }
}

function isValidNHijos(evento) {
    let nHijos = evento.currentTarget.value;

    if (nHijos >= 0) {
        document.getElementById('nHijos').className = 'correcto';
    } else {
        document.getElementById('nHijos').className = 'erroneo';
        document.getElementById('nHijos').value = "";
    }
}

function isValidEmail(evento) {
    let email = evento.currentTarget.value;

    const validacion = /^(.+\@.+\..+)$/;

    if (validacion.test(email) == true) {
        document.getElementById('email').className = 'correcto';
    } else {
        document.getElementById('email').className = 'erroneo';
        document.getElementById('email').value = "";
    }
}

function isValidWeb(evento) {
    let web = evento.currentTarget.value;

    const validacion = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/;

    if (validacion.test(web) == true) {
        document.getElementById('web').className = 'correcto';
    } else {
        document.getElementById('web').className = 'erroneo';
        document.getElementById('web').value = "";
    }
}

function isValidPassword(evento) {
    let password = evento.currentTarget.value;

    const validacion = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/;

    if (validacion.test(password) == true) {
        document.getElementById('password').className = 'correcto';
    } else {
        document.getElementById('password').className = 'erroneo';
        document.getElementById('password').value = "";
    }
}