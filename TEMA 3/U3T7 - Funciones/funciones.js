function calculoIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let IMC = peso / Math.pow(altura,2);

    alert(`Indice de masa corporal: ${IMC}`)
}

function calculoFMC() {
    let edad = parseFloat(document.getElementById("edad").value);
    let FMC = 220 - edad;

    alert(`Frecuencia cardiaca maxima: ${FMC}`)
}
