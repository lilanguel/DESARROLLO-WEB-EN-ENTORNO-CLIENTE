window.onload = inicio;

function inicio() {
    document.getElementById("cargaSeries").addEventListener('click', cargar_series);
}

function cargar_series() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            procesar_xml(xhr.responseXML);
        }
    };
    xhr.open("GET", "series.xml", true);
    xhr.send();
}

function procesar_xml(docXML) {
    let table = document.createElement("table");

    table.setAttribute("border", "1");
    table.setAttribute("id", "tabla");

    tr_header = document.createElement("tr");

    th_header_titulo = document.createElement("th");
    th_header_titulo.appendChild(document.createTextNode("Titulo"));

    th_header_cadena = document.createElement("th");
    th_header_cadena.appendChild(document.createTextNode("Cadena"));

    th_header_director = document.createElement("th");
    th_header_director.appendChild(document.createTextNode("Director"));

    th_header_ano = document.createElement("th");
    th_header_ano.appendChild(document.createTextNode("Ano"));

    th_header_terminada = document.createElement("th");
    th_header_terminada.appendChild(document.createTextNode("Terminada"));

    let series = docXML.getElementsByTagName("Serie");

    for (let i = 0; i < series.length; i++) {
        let tr = document.createElement("tr");

        let td_titulo = document.createElement("td");
        td_titulo.className='negrita';
        let td_cadena = document.createElement("td");
        td_cadena.className='cursiva';
        let td_director = document.createElement("td");
        let td_ano = document.createElement("td");
        let td_terminada = document.createElement("td");

        td_titulo.appendChild(document.createTextNode(series[i].getElementsByTagName("Titulo")[0].firstChild.nodeValue));
        td_cadena.appendChild(document.createTextNode(series[i].getElementsByTagName("Cadena")[0].firstChild.nodeValue));
        td_director.appendChild(document.createTextNode(series[i].getElementsByTagName("Director")[0].firstChild.nodeValue));
        td_ano.appendChild(document.createTextNode(series[i].getElementsByTagName("Ano")[0].firstChild.nodeValue));
        if(series[i].getElementsByTagName("Ano")[0].firstChild.nodeValue>2010){
            td_ano.className='verde'
        }else if(series[i].getElementsByTagName("Ano")[0].firstChild.nodeValue<2001){
            td_ano.className='rojo'
        }else{
            td_ano.className='amarillo'
        }

        td_terminada.appendChild(document.createTextNode(series[i].getElementsByTagName("Terminada")[0].firstChild.nodeValue));

        if(series[i].getElementsByTagName("Terminada")[0].firstChild.nodeValue=='Si'){
            td_terminada.innerHTML+='✓';
        }else{
            td_terminada.innerHTML+='X';
        }

        tr.appendChild(td_titulo);
        tr.appendChild(td_cadena);
        tr.appendChild(td_director);
        tr.appendChild(td_ano);
        tr.appendChild(td_terminada);

        table.appendChild(tr);
    }

    document.getElementById("resultado").appendChild(table);
}