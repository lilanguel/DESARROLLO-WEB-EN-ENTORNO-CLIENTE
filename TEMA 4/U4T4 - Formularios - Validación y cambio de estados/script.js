const $FORM = document.getElementById('ej1');
const $NAME = document.getElementById('nombre');
const $ARTISTA = document.getElementById('artista');
const $ANO = document.getElementById('ano');
const $TIPO_MUSICA = document.getElementById('tipo_musica');
const $LOCALIZACION = document.getElementById('localizacion');
const $PRESTADO = document.getElementById('prestado');

const $LABEL_NOMBRE = document.getElementById('label_nombre');
const $LABEL_ARTISTA = document.getElementById('label_artista');
const $LABEL_ANO = document.getElementById('label_ano');
const $LABEL_LOCALIZACION = document.getElementById('label_localizacion');

function handleSubmit(e) {
    e.preventDefault();
    const name = $NAME.value;
    const artista = $ARTISTA.value;
    const ano = $ANO.value;
    const tipo_musica=$TIPO_MUSICA.options[$TIPO_MUSICA.selectedIndex];
    const localizacion = $LOCALIZACION.value;
    const prestado = $PRESTADO.checked;

    if (name == "" || campo20(name) == false) {
        alert('El nombre del disco debe ser un valor válido : \n -Debe estar relleno \n - Máximo 20 caracteres');
        $NAME.className = "error_input";
        $LABEL_NOMBRE.className = "error_label";    
    } else if (artista == "" || campo20(artista) == false) {
        alert('El artista o grupo de musica debe ser un valor válido : \n -Debe estar relleno \n - Máximo 20 caracteres');
        $ARTISTA.className = "error_input";
        $LABEL_ARTISTA.className = "error_label";
    } else if (ano == "" || isValidAno(ano) == false) {
        alert('El año debe ser un valor válido : \n -Debe estar relleno \n - Debe estar compuesto por 4 caracteres numéricos.');
        $ANO.className = "error_input";
        $LABEL_ANO.className = "error_label";
    } else if (isNaN(localizacion)) {
        alert('La localización debe estar compuesto por caracteres númericos.');
        $LOCALIZACION.className = "error_input";
        $LABEL_LOCALIZACION.className = "error_label";
    } else {
        alert('Disco correcto y registrado');
        var regDisco = {
            nombre: name,
            artista: artista,
            ano: ano,
            tipo_musica: tipo_musica.text,
            localizacion: localizacion,
            prestado: prestado
        };
        console.log(regDisco);
        var newDisco = JSON.stringify(regDisco);
        console.log(newDisco);

        for (let i = 0; i < $FORM.elements.length; i++) {
            $FORM.elements[i].className = "correcto";
        }

        for (let i = 0; i < document.getElementsByTagName('label').length; i++) {
            document.getElementsByTagName('label')[i].className = "correcto";
        }
    }
}

function campo20(texto) {
    const validacion = /[A-Za-z]{1,20}/;
    return validacion.test(texto);
}

function isValidAno(ano) {
    const validacion = /^\d{4}$/;
    return validacion.test(ano);
}

$FORM.addEventListener('submit', handleSubmit);