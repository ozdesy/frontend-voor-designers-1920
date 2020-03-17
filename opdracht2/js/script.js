/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*********** VIDEO ALS VOORBEELD GENOMEN LINK: https://www.youtube.com/watch?v=drOgpionKpY ************/

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});


/* enige wat niet is gelukt zijn de pijltjes die naar links en rechts wijzen */
