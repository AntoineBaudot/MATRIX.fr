
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





tvPoster = document.getElementById('tvPoster');
modal_poster = document.getElementById('modal_poster');
modal_close = document.querySelectorAll('.modal_close');
tvMakingOf = document.getElementById('tvMakingOf');
modal_making_of = document.getElementById('modal_making_of');

tvPoster.addEventListener('click', function (e) {
    modal_poster.style.visibility = 'visible';
})
tvMakingOf.addEventListener('click', function (e) {
    modal_making_of.style.visibility = 'visible';
})


for (let i = 0; i < modal_close.length; i++) {
    modal_close[i].addEventListener('click', function (e) {
        modal_poster.style.visibility = 'hidden';
        modal_making_of.style.visibility = 'hidden';
        var myPlayer = document.getElementById("youtube-player-id");
        myPlayer.setAttribute("src", "https://www.youtube.com/embed/Kjcv-JtUOgA ");
    })
}









