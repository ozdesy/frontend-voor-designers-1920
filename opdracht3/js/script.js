/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/**** LOADER *****/

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});


/****** HIER KOMEN DE FILMS TEVOORSCHIJN OP HTML **********/
var filmContainer = document.getElementById('film-info');

/****** BTN IS DE KNOP WAAR JE OP KLIKT, VERVOLGENS KOMEN DE FILMS TEVOORSCHIJN ******/
var btn = document.getElementById('btn');

/****** DIT IS DE CLICK EVENT, DEZE EVENT ROEPT DE FUNCTIE AAN *****/
btn.addEventListener('click', function () {
    /***** MET VERZOEK MAAK JE VERBINDING MET DE URL WAAR ALLE INFORMATIES VANDAAN KOMEN *****/
    var verzoek = new XMLHttpRequest();
    verzoek.open('GET', 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json');
    /****** DOOR ONLOAD WORDT HET VERZOEK UITGEVOERD *****/
    verzoek.onload = function () {
        /***** HIER WORDT VERTELD DAT DE SERVER WAAR HET INFORMATIE VANDAAN KOMT EEN JSON IS *****/
        var deFilms = JSON.parse(verzoek.responseText);
        filmsToevoegen(deFilms);
    };
    /***** SEND STUURT HET VERZOEK NAAR DE URL *****/
    verzoek.send();
});

/***** DEZE FUNCTIE ZORGT ERVOOR DAT DE FILMS WORDEN WEERGEGEVEN IN DE HTML *****/
function filmsToevoegen(deFilms) {
    for (let i = 0; i < deFilms.length; i++) {
        let nieuweFilm = document.createElement("article");
        let nieuweTitle = document.createElement("h2");
        let nieuweSimplePlot = document.createElement("p");
        let nieuweCover = document.createElement("img");
        let nieuweDatum = document.createElement("p");
        let nieuweTrailer = document.createElement("video");

        nieuweTitle.innerHTML = deFilms[i].title;
        nieuweSimplePlot.innerHTML = deFilms[i].simple_plot;
        nieuweCover.src = deFilms[i].cover;
        nieuweDatum.innerHTML = deFilms[i].release_date;


        /* een video heeft één of meer source elementen */
        let nieuweTrailerSource = document.createElement("source");
        /* daaraan voeg je de src en een type toe */
        nieuweTrailerSource.src = deFilms[i].trailer;
        nieuweTrailerSource.setAttribute("type", "video/mp4");
        /* het source element voeg je toe aan de video*/
        nieuweTrailer.appendChild(nieuweTrailerSource);
        /* en hiermee voeg je de controls toe aan de video  */
        nieuweTrailer.setAttribute("controls", "true");



        nieuweFilm.appendChild(nieuweTitle);
        nieuweFilm.appendChild(nieuweCover);
        nieuweFilm.appendChild(nieuweSimplePlot);
        nieuweFilm.appendChild(nieuweDatum);
        nieuweFilm.appendChild(nieuweTrailer);

        filmContainer.appendChild(nieuweFilm);

    }
}
