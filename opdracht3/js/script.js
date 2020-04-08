/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/* PAGE LOADER */ // Wanneer de pagina opent, komt het 'loading' icoon tevoorschijn. Dit verdwijnt na een aantal seconde. Vervolgens wordt de blank page zichtbaar en kan de gebruiker de pagina gebruiken. Bij elke refresh komt 'loading' weer tevoorschijn. // Video bekeken op youtube, vervolgens toegepast in mijn ontwerp. // Bron van video: https://www.youtube.com/watch?v=xuA83OYTE7I
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

/* BACK TO TOP */ // Wanneer de films zichtbaar zijn, en de gebruiker naar beneden scrollt, verschijnt er een button waarop je kan klikken om in een keer naar boven te gaan. // Ik heb eerst een tutorial bekeken op youtube, waarna ik het heb toegepast in mijn ontwerp. // Bron van tutorial: https://www.youtube.com/watch?v=FK5DEa1Hvco&t=593s
const buttonBackToTop = document.querySelector("#backtotop");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 350) {
        buttonBackToTop.style.display = "block";
    } else {
        buttonBackToTop.style.display = "none";
    }
}
buttonBackToTop.addEventListener("click", backToTop)

function backToTop() {
    window.scrollTo(0, 0);
};

/* DARK MODE */ // Op deze website is het mogelijk om een dark mode in te stellen. Boven aan de linkerkant is er een button beschikbaar, waarmee je de dark/light mode kan instellen. // Ik heb een video bekeken op youtube die me heeft geholpen bij het toepassen van deze code. // Bron: https://www.youtube.com/watch?v=xodD0nw2veQ&t=12s
const checkbtn = document.getElementById("check");
checkbtn.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})


/* FILMS */ // Hier komen de films tevoorschijn op HTML //
var filmContainer = document.getElementById('film-info');

/* BUTTON FILMS */ // Dit is de knop waar je op kan klikken om de films te bekijken. Wanneer je hierop klikt, komen alle films tevoorschijn. //
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    var verzoek = new XMLHttpRequest(); // hier maken we verbinding met de URL waar alle informatie vandaan komt.
    verzoek.open('GET', 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json');
    verzoek.onload = function () {
        var deFilms = JSON.parse(verzoek.responseText); // Hier wordt verteld dat de server waar het informatie vandaan komt een JSON is.
        filmsToevoegen(deFilms);
    }; // door middel van 'onload' wordt het verzoek uitgevoerd.
    verzoek.send(); // door middel van 'send' wordt het verzoek verzonden naar de URL.
});

/* HTML WEERGEVEN */ // Deze functie zorgt ervoor dat de films worden weergegeven in html //
function filmsToevoegen(deFilms) {
    for (let i = 0; i < deFilms.length; i++) {
        let theFilm = document.createElement("article"); //Element article aangemaakt: Films worden in articles weergegeven
        let theTitle = document.createElement("h2"); //Element h2 aangemaakt: Title komt tevoorschijn in de h2
        let theSimplePlot = document.createElement("p"); //Element p aangemaakt: Korte uitleg 'simple plot' wordt zichtbaar in de p 'alinea'.
        let theCover = document.createElement("img"); //Element img aangemaakt: Afbeelding van de film wordt weergegeven in de img van de html.
        let theDate = document.createElement("p"); //Element p aangemaakt: Release datum wordt weergegeven in de p
        let theGenres = document.createElement("li"); //Element 'li' aangemaakt: Genres worden weergegeven als een opsomming
        let theTrailer = document.createElement("video"); //Element 'video' aangemaakt: Trailer wordt weergegeven als een video
        let theTrailerSource = document.createElement("source"); //Element voor video: een video heeft een of meer source elementen

        //informatie uit de JSON wordt gestopt in de elementen.
        theTitle.innerHTML = deFilms[i].title;
        theSimplePlot.innerHTML = deFilms[i].simple_plot;
        theCover.src = deFilms[i].cover;
        theDate.innerHTML = deFilms[i].release_date;
        theGenres.innerHTML = deFilms[i].genres;

        //een video heeft source elementen nodig. //Bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video // en uitleg: Sanne 't Hooft
        theTrailerSource.src = deFilms[i].trailer; //src uit de JSON, dus 'trailer' in de source stoppen
        theTrailerSource.setAttribute("type", "video/mp4"); //in de src komt er ook een type --> video/mp4 zodat de website weet om wat voor soort videobestand het gaat.
        theTrailer.appendChild(theTrailerSource);
        theTrailer.setAttribute("controls", "true"); //controls toevoegen aan de video // voor de knopjes.

        theFilm.appendChild(theTitle); // titel toevoegen aan de article
        theFilm.appendChild(theCover); // afbeelding toevoegen aan de article
        theFilm.appendChild(theSimplePlot); // korte beschrijving van de film toevoegen aan de article
        theFilm.appendChild(theDate); // datum toevoegen aan de article
        theFilm.appendChild(theTrailer); // trailer toevoegen aan de article
        theFilm.appendChild(theGenres); // genres toevoegen aan de article

        filmContainer.appendChild(theFilm); // article toevoegen aan de film container 'in de film container komt alles zichtbaar op html'
    }
}
