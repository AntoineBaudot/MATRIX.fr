/*document.getElementId("body").addEventListener("mouseover", function () {
    document.getElementById('body').style.backgroundImage = "url(../src/salle-tv-acceuil.jpg)";
}, false);
document.getElementById('body').addEventListener("mouseout", function () {
    document.getElementById(body).style.backgroundImage = "url(..src/salle-tv-éteint.jpg)";
}, false);

*/



/*
let images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "../src/salle-tv-accueil.jpg",
    "../src/salle-tv-éteint.jpg",
    "../src/salle-tv-poster.jpg",
    "../src/salle-tv-video.jpg",
    "../src/salle-tv-making-of.jpg",
    "../src/salle-tv-about.jpg",
    "../src/salle-tv-galerie.jpg",
)


*/

var lScreen = window.innerWidth;
var hScreen = window.innerHeight;


/*
let bcg_menu = document.getElementById("background_menu")
let body = document.getElementById("body")
body.style.width = lScreen + 'px';
body.style.height = hScreen + 'px';
bcg_menu.style.width = lScreen + 'px';
bcg_menu.style.height = hScreen + 'px';
bcg_menu.style.background = "url(../src/salle-tv-éteint.jpg)";
*/







tvAcceuil.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-accueil.jpg)";
})
tvAcceuil.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})

tvPoster.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-poster.jpg)";
})
tvPoster.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})

tvVideo.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-video.jpg)";
})
tvVideo.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})
tvAbout.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-about.jpg)";
})
tvAbout.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})
tvMakingOf.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-making-of.jpg)";
})
tvMakingOf.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})
tvGalerie.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-galerie.jpg)";
})
tvGalerie.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})