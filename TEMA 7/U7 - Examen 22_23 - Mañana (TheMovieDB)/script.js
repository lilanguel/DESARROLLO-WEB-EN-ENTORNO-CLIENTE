const API_KEY = "ad6bb6d2762de404c0f5be19576da4df";
const TRENDING_MOVIES_URL = "trending/movie/week";
const API_BASE_URL = `https://api.themoviedb.org/3/${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;

let lista_peliculas_favoritas = [];
let lista_peliculas_generadas = [];
let pelicula_generada;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let xhr;
let div_resultados = document.getElementById("div_resultados");

window.onload = () => {
    document.getElementById("cargar_peliculas").addEventListener('click', cargar_peliculas);
    document.getElementById("guardar_favoritos").addEventListener('click', guardar_peliculas_favoritas_fetch);
    document.getElementById("obtener_favoritos").addEventListener('click', cargar_favoritos);
    document.getElementById("limpiar_fichas").addEventListener('click', limpiar_fichas);
}

function cargar_peliculas() {
    console.log('Entra en cargar_peliculas')

    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let peliculas = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            procesar_peliculas(peliculas.results);
        } else if (xhr.status != 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    };

    xhr.open("GET", API_BASE_URL, true);
    xhr.send();
}

function comprobar_estado() {
    if (
        this.readyState == READY_STATE_COMPLETE &&
        this.status == HTTP_STATUS_OK
    ) {
        let respuesta = xhr.responseText;
        div_resultados.innerHTML = respuesta;
    } else {
        console.log(xhr.responseText);
    }
}

function guardar_peliculas_favoritas_fetch() {
    fetch("save_movies.php", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(lista_peliculas_favoritas),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data)
            div_resultados.innerHTML = data.resultado;
        })
        .catch((error) => {
            console.log(error);
        });
}

function cargar_favoritos() {
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let favoritos = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            procesar_favoritos(favoritos);
        } else if (xhr.status != 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    };

    xhr.open("GET", "get_favs.php", true);
    xhr.send();
}

function procesar_peliculas(peliculas) {
    console.log('Entra en procesar_peliculas');

    let resultado_cargar_peliculas = document.getElementById('resultado_cargar_peliculas');
    resultado_cargar_peliculas.innerHTML = "";

    let titulo = document.createElement('h1');
    titulo.innerHTML = 'Peliculas en tendencia'
    resultado_cargar_peliculas.appendChild(titulo);

    for (let i = 0; i < peliculas.length; i++) {
        let card_pelicula = document.createElement('div');
        card_pelicula.className = 'card';

        let parrafo_id = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_id);
        parrafo_id.innerHTML = peliculas[i].id;

        let parrafo_titulo_original = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_titulo_original);
        parrafo_titulo_original.innerHTML = peliculas[i].original_title;

        let parrafo_overview = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_overview);
        parrafo_overview.innerHTML = peliculas[i].overview;

        let parrafo_original_language = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_original_language);
        parrafo_original_language.innerHTML = peliculas[i].original_language;

        let parrafo_release_date = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_release_date);
        parrafo_release_date.innerHTML = peliculas[i].release_date;

        let parrafo_vote_average = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_vote_average);
        parrafo_vote_average.innerHTML = peliculas[i].vote_average;

        let imagen_pelicula = (document.createElement("img"));
        card_pelicula.appendChild(imagen_pelicula);
        imagen_pelicula.src = `https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}`;
        imagen_pelicula.width = '200'

        let boton_favorito = document.createElement('button');
        boton_favorito.className = "btn";
        let icono_corazon_vacio = document.createElement('img');
        icono_corazon_vacio.src = `heart_border.png`;
        icono_corazon_vacio.id = `corazon${peliculas[i].id}`
        icono_corazon_vacio.width = '50';
        boton_favorito.id = `${peliculas[i].id}`;
        boton_favorito.appendChild(icono_corazon_vacio);
        card_pelicula.appendChild(boton_favorito);

        pelicula_generada = {
            "id": peliculas[i].id,
            "original_title": peliculas[i].original_title,
            "overview": peliculas[i].overview,
            "original_language": peliculas[i].original_language,
            "release_date": peliculas[i].release_date,
            "vote_average": peliculas[i].vote_average,
            "poster_path": peliculas[i].poster_path
        }

        lista_peliculas_generadas.push(pelicula_generada);

        resultado_cargar_peliculas.appendChild(card_pelicula);

        boton_favorito.addEventListener('click', (p) => {

            let pelicula = lista_peliculas_generadas.find(
                (p) => p.id == boton_favorito.getAttribute('id')
            );

            if (document.getElementById(`corazon${pelicula.id}`).src == "heart_filled.png") {
                lista_peliculas_favoritas.pop(pelicula);
                document.getElementById(`corazon${pelicula.id}`).src == "heart_border.png";
            } else if (document.getElementById(`corazon${pelicula.id}`).src = "heart_border.png") {
                lista_peliculas_favoritas.push(pelicula);
                document.getElementById(`corazon${pelicula.id}`).src = "heart_filled.png"
            }

            console.log(lista_peliculas_favoritas)
        });
    }
}

function procesar_favoritos(favoritos) {
    let resultado_favoritos = document.getElementById('favoritos');
    resultado_favoritos.innerHTML = "";

    let titulo = document.createElement('h1');
    titulo.innerHTML = 'Peliculas favoritas'
    resultado_favoritos.appendChild(titulo);

    for (let i = 0; i < favoritos.length; i++) {
        let card_pelicula = document.createElement('div');
        card_pelicula.className = 'card';

        let parrafo_id = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_id);
        parrafo_id.innerHTML = favoritos[i].id;

        let parrafo_titulo_original = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_titulo_original);
        parrafo_titulo_original.innerHTML = favoritos[i].original_title;

        let parrafo_overview = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_overview);
        parrafo_overview.innerHTML = favoritos[i].overview;

        let parrafo_original_language = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_original_language);
        parrafo_original_language.innerHTML = favoritos[i].original_language;

        let parrafo_release_date = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_release_date);
        parrafo_release_date.innerHTML = favoritos[i].release_date;

        let parrafo_vote_average = (document.createElement("p"));
        card_pelicula.appendChild(parrafo_vote_average);
        parrafo_vote_average.innerHTML = favoritos[i].vote_average;

        let imagen_pelicula = (document.createElement("img"));
        card_pelicula.appendChild(imagen_pelicula);
        imagen_pelicula.src = `https://image.tmdb.org/t/p/w500/${favoritos[i].poster_path}`;
        imagen_pelicula.width = '200'

        resultado_favoritos.appendChild(card_pelicula);
    }
}

function limpiar_fichas() {
    document.getElementById("resultado_cargar_peliculas").innerHTML = ""
    document.getElementById("favoritos").innerHTML = ""
}