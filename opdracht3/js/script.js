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
        var myData = JSON.parse(verzoek.responseText);
        weergevenHtml(myData);
    };
    /* hiermee stuur je het verzoek naar de url*/
    verzoek.send();
});

/* hiermee geef je de films weer in html*/
function weergevenHtml(films) {
    var htmlTekst = '';

    for (i = 0; i < films.length; i++) {
        htmlTekst += "<p>" + films[i].title + "<br> " + films[i].plot + ".</p>";
        htmlTekst += "<p>" + films[i].cover + "<br>" + films[i].simple_plot + ".</p>";
    }

    filmContainer.insertAdjacentHTML('beforeend', htmlTekst);
}
