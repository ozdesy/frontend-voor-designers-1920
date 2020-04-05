/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/* Hier komen de films tevoorschijn op html*/
var filmContainer = document.getElementById('film-info');

/* knop waar je op klikt, waarna de films tevoorschijn komen*/
var btn = document.getElementById('btn');
/*click event, die de functie aanroept*/
btn.addEventListener('click', function () {
    /* hiermee maak je verbinding met de url waar je alle info vandaan haalt*/
    var verzoek = new XMLHttpRequest();
    verzoek.open('GET', 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json');
    /*verzoek wordt uitgevoerd*/
    verzoek.onload = function () {
        /* hier vertelt de server dat het een json is*/
        var deFilms = JSON.parse(verzoek.responseText);
        filmsToevoegen(deFilms);
    };
    /* hiermee stuur je het verzoek naar de url*/
    verzoek.send();
});

/* hiermee geef je de films weer in html*/
function filmsToevoegen(deFilms) {
    for (i = 0; i < deFilms.length; i++) {
        let nieuweFilm = document.createElement("article");
        let nieuweTitle = document.createElement("h2");
        let nieuweSimplePlot = document.createElement("p");
        let nieuweCover = document.createElement("img");
        let nieuweDatum = document.createElement("p");
        let nieuweTrailer = document.createElement("video");
        let nieuweReviews = document.createElement("p");


        nieuweTitle.innerHTML = deFilms[i].title;
        nieuweSimplePlot.innerHTML = deFilms[i].simple_plot;
        nieuweCover.src = deFilms[i].cover;
        nieuweDatum.innerHTML = deFilms[i].release_date;
        nieuweTrailer.src = deFilms[i].trailer;
        nieuweReviews.innerHTML = deFilms[i].reviews;

        nieuweFilm.appendChild(nieuweTitle);
        nieuweFilm.appendChild(nieuweCover);
        nieuweFilm.appendChild(nieuweSimplePlot);
        nieuweFilm.appendChild(nieuweDatum);
        nieuweFilm.appendChild(nieuweTrailer);
        nieuweFilm.appendChild(nieuweReviews);


        filmContainer.appendChild(nieuweFilm);

    }
}
