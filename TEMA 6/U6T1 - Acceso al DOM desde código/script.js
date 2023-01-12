let info = document.getElementById("info");

// 1 
let listaParrafos = document.getElementsByTagName("p");
info.innerHTML += `Número de párrafos de la página: ${listaParrafos.length} <br>`

// 2 
let textoParrafos2 = listaParrafos[1].textContent;
info.innerHTML += `Texto del segundo párrafo: ${textoParrafos2} <br>`

// 3 
let listaEnlaces = document.getElementsByTagName("a");
info.innerHTML += `Número de enlaces de la página: ${listaEnlaces.length} <br>`

// 4 
let direccionEnlace1 = listaEnlaces[0];
info.innerHTML += `Dirección del primer enlace: ${direccionEnlace1} <br>`

// 5 
let direccionEnlacePenultimo = listaEnlaces[listaEnlaces.length - 2];
info.innerHTML += `Dirección del penúltimo  enlace: ${direccionEnlacePenultimo} <br>`

// 6
info.innerHTML += `Número de enlaces que apuntan a /wiki/Municipio: ${wiki_municipio(listaEnlaces)} <br>`

function wiki_municipio(enlaces) {
    let contador = 0;
    for (const i of enlaces) {
        if (i.href.includes("/wiki/Municipio")) {
            contador++;
        }
    }
    return contador;
}

// 7 
let primerParrafo = listaParrafos[0];
let enlacesPrimerParrafo = primerParrafo.getElementsByTagName("a");
let numEnlacesPrimerParrafo = enlacesPrimerParrafo.length;
info.innerHTML += `Número de enlaces del primer párrafo: ${numEnlacesPrimerParrafo} <br>`