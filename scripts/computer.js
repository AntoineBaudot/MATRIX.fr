
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
picAcceuil.src = "images/salle-tv-poster.jpg";
picPoster.src = "images/salle-tv-poster.jpg";
picVideo.src = "images/salle-tv-video.jpg";
picAbout.src = "images/salle-tv-about.jpg";
picMakingOf.src = "images/salle-tv-making-of.jpg";
picGalerie.src = "images/salle-tv-galerie.jpg";
picEteint.src = "images/salle-tv-éteint.jpg";
picMentionsLegals.src = "images/salle-tv-mentions-legales.jpg";



tvAcceuil.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-accueil.jpg)";
})
tvAcceuil.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})

tvPoster.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-poster.jpg)";
})
tvPoster.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})

tvVideo.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-video.jpg)";
})
tvVideo.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})
tvAbout.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-about.jpg)";
})
tvAbout.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})


tvMakingOf.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-making-of.jpg)";
})
tvMakingOf.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})
tvGalerie.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-galerie.jpg)";
})
tvGalerie.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})
tvMentionLegal.addEventListener("mouseover", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-mentions-legales.jpg)";
})
tvMentionLegal.addEventListener("mouseout", function (event) {
    document.getElementById("background_menu").style.backgroundImage = "url(images/salle-tv-éteint.jpg)";
})





tvAbout = document.getElementById('tvAbout');

tvAbout.addEventListener('click', function (e) {
    document.getElementById('modal_about').style.visibility = 'visible';
})



