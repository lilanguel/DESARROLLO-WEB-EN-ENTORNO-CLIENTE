function crearLabel(text, idFor) {
    let label = document.createElement('label');
    label.setAttribute('for', idFor);
    document.getElementById('myForm').appendChild(label);
    label.innerHTML = text;
}

function crearInput(type, id, required) {
    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    if(required==true){
        input.setAttribute("required","")
    }
    document.getElementById('myForm').appendChild(input);
}

function crearSelect(id){
    let select = document.createElement('select');
    select.id = id;
    document.getElementById('myForm').appendChild(select);
}

function anadirOpcionesSelect(id, array){
    let select = document.getElementById(id);
    for (let i = 0; i < array.length; i++) {
        let opcion = document.createElement("option");
        opcion.textContent=array[i];
        opcion.value=array[i];
        select.appendChild(opcion);
    }
}

function crearSaltoDeLineaEnFormulario(){
    let saltoDeLinea = document.createElement("br");
    document.getElementById("myForm").appendChild(saltoDeLinea);
}

function crearBotonSubmit(texto){
    let botonSubmit=document.createElement("button");
    botonSubmit.type="submit";
    botonSubmit.textContent=texto;
    document.getElementById("myForm").appendChild(botonSubmit);
}

crearLabel("Nombre del disco: ","nombre");
crearInput("text","nombre",true);
crearSaltoDeLineaEnFormulario();
crearLabel("Grupo de música o cantante: ","artista");
crearInput("text","artista",true);
crearSaltoDeLineaEnFormulario();
crearLabel("Año de publicación: ","ano");
crearInput("text","ano",false);
crearSaltoDeLineaEnFormulario();
crearLabel("Tipo de música: ","tipo_musica");
crearSelect("tipo_musica");
let arrayOpciones = ["Rock","Pop","Punk","Indie"];
anadirOpcionesSelect("tipo_musica",arrayOpciones);
crearSaltoDeLineaEnFormulario();
crearLabel("Localización: ","localizacion");
crearInput("number","localizacion",false);
crearSaltoDeLineaEnFormulario();
crearLabel("Prestado: ","prestado");
crearInput("checkbox","prestado",false);
crearSaltoDeLineaEnFormulario();
crearBotonSubmit("Enviar");