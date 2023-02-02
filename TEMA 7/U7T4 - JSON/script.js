window.onload = inicio;

function inicio() {
    document.getElementById("cargaSeries").addEventListener('click', cargar_series);
}

function cargar_series() {
    fetch('series.json')
        .then(response => response.json())
        .then(data => {
            let series = data.Series;
            let result = "<table border=1><tr><th>Título</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";

            for (let i = 0; i < series.length; i++) {
                result += "<tr>";
                result += "<td class=negrita>" + series[i].Serie.Título + "</td>";
                result += "<td class=cursiva>" + series[i].Serie.Cadena + "</td>";
                result += "<td>" + series[i].Serie.Director + "</td>";
                
                if (series[i].Serie.Año > 2010) {
                    result += "<td class=verde>" + series[i].Serie.Año + "</td>";
                } else if (series[i].Serie.Año < 2001) {
                    result += "<td class=rojo>" + series[i].Serie.Año + "</td>";
                } else {
                    result += "<td class=amarillo>" + series[i].Serie.Año + "</td>";
                }

                if (series[i].Serie.Terminada=="Sí") {
                    result += "<td>" + series[i].Serie.Terminada + "✓" + "</td>";
                } else {
                    result += "<td>" + series[i].Serie.Terminada + "X"+ "</td>";
                }
                result += "</tr>";
            }
            result += "</table>";
            document.getElementById("resultado").innerHTML = result;
        });
}