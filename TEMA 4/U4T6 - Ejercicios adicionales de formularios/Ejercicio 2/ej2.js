window.onload = iniciar;

function iniciar() {
    alert('Bienvenido al test de conocimientos matemáticos \n Seleccione las respuestas que crea correctas teniendo en cuenta las siguientes consideraciones:\n1.- Los aciertos tienen puntuaciones variables en función de la dificultad de la pregunta.\n2.- Las preguntas no contestadas ni suman ni restan puntos.\n3.- Las respuestas equivocadas restan más o menos puntos en función del tipo de fallo.\nNOTA:\nEl test que va a realizar a continuación carece de rigor \'científico\'. Únicamente se utiliza para mostrar una posibilidad más de la programación en JavaScript.\nGRACIAS')
}

function mostrarResultado() {
    let aciertos = 0;
    let fallos = 0;
    let respuesta_blanco = 0;
    let pregunta_blanco=0;

    for (let i = 1; i < 4; i++) {
        respuesta_blanco=0;
        for (let j = 1; j < 4; j++) {
            let respueta = document.getElementById(`respuesta${j}p${i}`);

            if (respueta.checked) {
                if (i == 1 && j == 1) {
                    aciertos++;
                } else if (i == 2 && j == 2) {
                    aciertos += 2;
                } else if (i == 3 && j == 2) {
                    aciertos += 2;
                } else {
                    if (i == 1) {
                        fallos++;
                    } else {
                        fallos += 2;
                    }
                }
            }else{
                respuesta_blanco++;
            }
        }
        if (respuesta_blanco==3) {
            pregunta_blanco++;
        }
    }

    let porcentaje = ((aciertos - fallos) * 100) / 5;
    let comentario = "";

    if (porcentaje < 25) {
        comentario = `DESASTROSO. Sin comentarios.`;
    } else if (porcentaje >= 25 && porcentaje < 50) {
        comentario = `JUSTILLO. Un repaso no le irá nada mal.`;
    } else if (porcentaje >= 50 && porcentaje < 75) {
        comentario = `BIEN. Puede defenderse con ayuda de una calculadora.`;
    } else if (porcentaje >= 75 && porcentaje < 100) {
        comentario = `NOTABLE. Usted tiene una buena base de matemáticas.`;
    } else if(porcentaje==100) {
        comentario = `SOBRESALIENTE. Sus conocimientos de matemáticas son excelentes`;
    }

    if(pregunta_blanco==3){
        comentario=`Por favor, conteste alguna de la preguntas del test. LISTILLO!!`
    }

    console.log(`Aciertos: ${aciertos}`);
    console.log(`Fallos: ${fallos}`);
    console.log(`Respuestas en blanco: ${pregunta_blanco}`);
    console.log(`Porcentaje: ${porcentaje}`)
    console.log(`Comentario: ${comentario}`);

    alert(`Su puntuación es ${aciertos-fallos}\nEl número máximo de puntos que podía conseguir es de ${aciertos}\nHa dejado sin contestar ${pregunta_blanco}\nSu porcentaje de aciertos es de ${porcentaje}%\n${comentario}`);
}

function resetear() {
    let confirmacion = confirm(`¡ATENCIÓN! Los datos del test se van a reiniciar.`)

    if (confirmacion == true) {
        document.getElementById('myForm').reset();
    }
}

function mostrarRespuestasCorrectas() {
    alert(`1-A, 2-B, 3-B`);
}