/*document.getElementId("tele").addEventListener("mouseover", function () {
    document.getElementById('tele').style.backgroundImage = "url(../src/salle-tv-acceuil.jpg)";
}, false);
document.getElementById('tele').addEventListener("mouseout", function () {
    document.getElementById(tele).style.backgroundImage = "url(..src/salle-tv-éteint.jpg)";
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


let tv1 = document.getElementById("tv1")
let tele = document.getElementById("tele")


tv1.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-accueil.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv1.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})

tv2.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-poster.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv2.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})

tv3.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-video.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv3.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv4.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-about.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv4.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv5.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-making-of.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv5.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv6.addEventListener("mouseover", function (event) {
    tele.style.background = "url(../src/salle-tv-galerie.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})
tv6.addEventListener("mouseout", function (event) {
    tele.style.background = "url(../src/salle-tv-éteint.jpg)";
    tele.style.backgroundSize = "cover";
    tele.style.backgroundRepeat = "no-repeat";
})