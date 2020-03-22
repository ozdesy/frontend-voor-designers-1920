/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var filmContainer = document.getElementById('film-info');

var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json');
    request.onload = function () {
        var myData = JSON.parse(request.responseText);
        weergevenHtml(myData);
    };
    request.send();
});


function weergevenHtml(data) {
    var htmlTekst = '';

    for (i = 0; i < data.length; i++) {
        htmlTekst += "<p>" + data[i].title + "<br> " + data[i].plot + ".</p>";
    }

    filmContainer.insertAdjacentHTML('beforeend', htmlTekst);
}
