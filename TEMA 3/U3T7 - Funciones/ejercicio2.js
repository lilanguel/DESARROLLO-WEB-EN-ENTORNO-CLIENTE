const argumentos = process.argv.slice(2);

let numero = argumentos[0];

let esPar = (numero) => {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esPar(numero));