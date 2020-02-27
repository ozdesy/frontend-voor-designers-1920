/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var btn = document.getElementById('btn');

function geklikt() {
    if (btn.classList.contains('far')) {
        btn.classList.remove('far');
        btn.classList.add('fas');
    } else {
        btn.classList.remove('fas');
        btn.classList.add('far');
    }
}
btn.addEventListener('click', geklikt);

var checked0 = false;

var mijnFilm = document.querySelector("section article div");

var nummer = 0;
var teller = document.querySelector('li a span');

btn[0].addEventListener('click', function () {
    btn[0].classList.toggle('clicked');
    if (checked0 === false) {
        mijnFilm.innerHTML += '<p> Bad Boys </p>';
        nummer++;
        checked0 = true;
    } else {
        nummer--;
        checked0 = false;
    }
    teller.textContent = nummer;
})
