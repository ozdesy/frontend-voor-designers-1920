/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// btns is de array met hartjes
var btns = document.querySelectorAll('i');



function geklikt() {
    var teller = document.querySelector('li a span');

    if (this.classList.contains('far')) {
        this.classList.remove('far');
        this.classList.add('fas');
        teller.innerHTML = parseInt(teller.innerHTML) + 1;

    } else {
        this.classList.remove('fas');
        this.classList.add('far');
        teller.innerHTML = parseInt(teller.innerHTML) - 1;
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', geklikt);
});
