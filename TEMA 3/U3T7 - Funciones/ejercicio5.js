function mostrarHora() {
    var areaReloj = document.getElementById("areareloj");
    var ahora = new Date();

    areaReloj.innerHTML = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();

}
var crono = setInterval(mostrarHora, 1000);