let lista_usuarios = [];

window.onload = () => {
    document.getElementById("generar_usuario").addEventListener('click', pedir_usuario);
}

function pedir_usuario() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let usuario = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            procesar_usuario(usuario.results[0]);
        }
    };

    xhr.open("GET", "https://randomuser.me/api/?nat=es", true);
    xhr.send();
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

    let usuario_generado={
        "name":`${usuario.name.first} ${usuario.name.last}`,
        "phone":`${usuario.phone}`,
        "street":`${usuario.location.street.name}`,
        "email":`${usuario.email}`,
        "image": `${usuario.picture.medium}__`
    }

    lista_usuarios.pop(usuario_generado);

    document.getElementById("anadir_a_tabla").addEventListener('click', anadir_a_tabla(lista_usuarios));
}

function anadir_a_tabla(lista_usuarios) {
    crear_tabla();
    
}

function crear_tabla(){
    let tabla = document.getElementById("tabla_usuarios");
    tabla.innerHTML="";

    let tr=document.createElement("tr");
    tabla.appendChild(tr);

    let th_imagen=document.createElement("th");
    th_imagen.innerHTML="Foto";
    tr.appendChild(th_imagen);

    let th_nombre=document.createElement("th");
    th_nombre.innerHTML="Nombre";
    tr.appendChild(th_nombre);

    let th_direccion=document.createElement("th");
    th_direccion.innerHTML="Direccion";
    tr.appendChild(th_direccion);

    let th_telefono=document.createElement("th");
    th_telefono.innerHTML="Telefono";
    tr.appendChild(th_telefono);

    let th_email=document.createElement("th");
    th_email.innerHTML="Email";
    tr.appendChild(th_email);
}