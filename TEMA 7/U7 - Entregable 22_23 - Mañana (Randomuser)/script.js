let lista_usuarios = [];
let usuario_generado;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let xhr;

window.onload = () => {
    document.getElementById("generar_usuario").addEventListener('click', pedir_usuario);
    document.getElementById("guardar_usuarios_http").addEventListener('click', guardar_usuarios_http);
    document.getElementById("guardar_usuarios_fetch").addEventListener('click', guardar_usuarios_fetch);
}

function pedir_usuario() {
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let usuario = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            procesar_usuario(usuario.results[0]);
        } else {
            console.log(JSON.parse(xhr.responseText))
        }
    };

    xhr.open("GET", "https://randomuser.me/api/?nat=es", true);
    xhr.send();
}

function comprobar_estado() {
    if (
        this.readyState == READY_STATE_COMPLETE &&
        this.status == HTTP_STATUS_OK
    ) {
        let respuesta = xhr.responseText;
        let resultado = document.getElementById("resultado_post");
        resultado.innerHTML = respuesta;
    } else {
        console.log(xhr.responseText);
    }
}

function guardar_usuarios_http() {
    xhr = new XMLHttpRequest();
    xhr.open("POST", "save_users.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    let body_string = JSON.stringify(lista_usuarios);

    xhr.onreadystatechange = comprobar_estado;
    xhr.send(body_string);
}

function guardar_usuarios_fetch() {
    fetch("save_users.php", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(lista_usuarios),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data)
            let resultado = document.getElementById("resultado_post");
            resultado.innerHTML = data.resultado;
        })
        .catch((error) => {
            console.log(error);
        });
}

function procesar_usuario(usuario) {
    let card_usuario = document.getElementById("card_usuario");
    card_usuario.innerHTML = "";

    let imagen_usuario = (document.createElement("img"));
    card_usuario.appendChild(imagen_usuario);
    imagen_usuario.src = usuario.picture.medium;

    let titulo_nombre = (document.createElement("h3"));
    card_usuario.appendChild(titulo_nombre);
    titulo_nombre.innerHTML = `${usuario.name.first} ${usuario.name.last}`;

    let parrafo_calle = (document.createElement("p"));
    card_usuario.appendChild(parrafo_calle);
    parrafo_calle.innerHTML = `Street: ${usuario.location.street.name}`

    let parrafo_telefono = (document.createElement("p"));
    card_usuario.appendChild(parrafo_telefono);
    parrafo_telefono.innerHTML = `Phone: ${usuario.phone}`;

    let parrafo_email = (document.createElement("p"));
    card_usuario.appendChild(parrafo_email);
    parrafo_email.innerHTML = `Email: ${usuario.email}`

    let boton_anadir_a_tabla = document.createElement("button");
    boton_anadir_a_tabla.className = 'btn btn-warning'
    card_usuario.appendChild(boton_anadir_a_tabla);
    boton_anadir_a_tabla.innerHTML = 'Add to table';
    boton_anadir_a_tabla.id = 'anadir_a_tabla';

    usuario_generado = {
        "name": `${usuario.name.first} ${usuario.name.last}`,
        "phone": `${usuario.phone}`,
        "street": `${usuario.location.street.name}`,
        "email": `${usuario.email}`,
        "image": `${usuario.picture.medium}__`
    }

    document.getElementById("anadir_a_tabla").addEventListener('click', anadir_a_tabla);
}

function anadir_a_tabla() {
    lista_usuarios.push(usuario_generado);

    console.log(lista_usuarios)

    crear_tabla();
    let tabla = document.getElementById("tabla_usuarios");

    for (let i = 0; i < lista_usuarios.length; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);

        let td_imagen = document.createElement("td");
        td_imagen.innerHTML = lista_usuarios[i].image;
        tr.appendChild(td_imagen);

        let td_nombre = document.createElement("td");
        td_nombre.innerHTML = lista_usuarios[i].name;
        tr.appendChild(td_nombre);

        let td_direccion = document.createElement("td");
        td_direccion.innerHTML = lista_usuarios[i].street;
        tr.appendChild(td_direccion);

        let td_telefono = document.createElement("td");
        td_telefono.innerHTML = lista_usuarios[i].phone;
        tr.appendChild(td_telefono);

        let td_email = document.createElement("td");
        td_email.innerHTML = lista_usuarios[i].email;
        tr.appendChild(td_email);
    }
}

function crear_tabla() {
    let tabla = document.getElementById("tabla_usuarios");
    tabla.innerHTML = "";

    let tr = document.createElement("tr");
    tabla.appendChild(tr);

    let th_imagen = document.createElement("th");
    th_imagen.innerHTML = "Foto";
    tr.appendChild(th_imagen);

    let th_nombre = document.createElement("th");
    th_nombre.innerHTML = "Nombre";
    tr.appendChild(th_nombre);

    let th_direccion = document.createElement("th");
    th_direccion.innerHTML = "Direccion";
    tr.appendChild(th_direccion);

    let th_telefono = document.createElement("th");
    th_telefono.innerHTML = "Telefono";
    tr.appendChild(th_telefono);

    let th_email = document.createElement("th");
    th_email.innerHTML = "Email";
    tr.appendChild(th_email);
}