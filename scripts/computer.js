
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



var picAcceuil = new Image();
var picPoster = new Image();
var picVideo = new Image();
var picAbout = new Image();
var picMakingOf = new Image();
var picGalerie = new Image();
var picVideo = new Image();
var picEteint = new Image();
var picMentionsLegals = new Image();
picAcceuil.src = "../Matrix.fr/images/salle-tv-poster.jpg";
picPoster.src = "../Matrix.fr/images/salle-tv-poster.jpg";
picVideo.src = "../Matrix.fr/images/salle-tv-video.jpg";
picAbout.src = "../Matrix.fr/images/salle-tv-about.jpg";
picMakingOf.src = "../Matrix.fr/images/salle-tv-making-of.jpg";
picGalerie.src = "../Matrix.fr/images/salle-tv-galerie.jpg";
picEteint.src = "../Matrix.fr/images/salle-tv-éteint.jpg";
picMentionsLegals.src = "../Matrix.fr/images/salle-tv-mentions-legales.jpg";



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
tvMentionLegal.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-mentions-legales.jpg)";
})
tvMentionLegal.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(../Matrix.fr/images/salle-tv-éteint.jpg)";
})

