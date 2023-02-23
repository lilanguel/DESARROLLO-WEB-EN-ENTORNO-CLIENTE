let lista_comunidades = [];

window.onload = () => {
    document.getElementById("modificar_datos").addEventListener('click', modificar_datos);
    document.getElementById("cargar_xml").addEventListener('click', cargar_xml);
    document.getElementById("cargar_fetch").addEventListener('click', cargar_fetch);
}

function modificar_datos() {
    // Primer paso, crear el XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Segundo paso, una funcion anonima que recoge y trata los datos recibidos
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let comunidades = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText))
            procesar_comunidades(comunidades)
            procesar_comunidades(lista_comunidades)
        }
    };
    // Tercer paso, configurar la peticion (metodo y url)
    xhr.open("GET", "latest.json", true);
    // Cuarto paso, realizar la peticion mediante el send
    xhr.send();
}

function procesar_comunidades(comunidades) {
    // Limpio la variable local, donde guardo...
    lista_comunidades = [];
    // ... todas las comunidades menos la de TOTALES y los campos que no me interesan
    comunidades.forEach((comunidad) => {
        if (comunidad.ccaa !== "Totales") {
            let item = {
                ccaa: comunidad.ccaa,
                dosisEntregadas: comunidad.dosisEntregadas,
                dosisAdministradas: comunidad.dosisAdministradas,
                dosisPautaCompletada: comunidad.dosisPautaCompletada,
                porcentajeEntregadas: comunidad.porcentajeEntregadas,
                porcentajePoblacionAdministradas: comunidad.porcentajePoblacionAdministradas,
                porcentajePoblacionCompletas: comunidad.porcentajePoblacionCompletas
            }
            lista_comunidades.push(item)
        }
    });

    console.log(lista_comunidades);
}

function enviar_insertar_comunidades(comunidades) {
    console.log(comunidades)
    fetch('insertar_comunidades.php', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(comunidades)
    }).then((response) => {
        if (response.ok) return response.json();
    }).then((comunidades) => {
        console.log(comunidades)
    })
}

function construir_tabla(comunidades) {
    let divTabla=document.getElementById("tabla")
    divTabla.innerHTML=""
    let tabla = document.createElement("table")
    let tr = document.createElement("tr")
    let th = document.createElement("th")

    let text = document.createElement("Comunidad")

    tabla.appendChild(tr)
    divTabla.appendChild(tabla)
}

function cargar_xml() {

}

function cargar_fetch() {

}