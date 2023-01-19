document.getElementById("botonAnadirTexto").addEventListener('click', anadirTextoLista);
document.getElementById("botonBorrarPrimerLi").addEventListener('click', borrarPrimerLi);
document.getElementById("botonBorrarUltimoLi").addEventListener('click', borrarUltimoLi);

function anadirTextoLista() {
    console.log("Entrando en la funcion anadirTextoLista");

    let texto = prompt("Introduce un texto");
    let nuevoElemento = document.createElement("li");
    document.getElementById("lista").appendChild(nuevoElemento);
    nuevoElemento.innerHTML = texto;

    console.log("Saliendo de la funcion anadirTextoLista")
}

function borrarPrimerLi() {
    console.log("Entrando en la funcion borrarPrimerLi");

    let lista = document.getElementById("lista");
    let hijosLista = lista.getElementsByTagName("li");

    lista.removeChild(hijosLista[0]);

    console.log("Saliendo de la funcion borrarPrimerLi")
}

function borrarUltimoLi() {
    console.log("Entrando en la funcion borrarUltimoLi");

    let lista = document.getElementById("lista");
    let hijosLista = lista.getElementsByTagName("li");
    lista.removeChild(hijosLista[hijosLista.length - 1]);

    console.log("Saliendo de la funcion borrarUltimoLi")
}