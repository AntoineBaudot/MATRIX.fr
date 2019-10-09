/*document.getElementId("body").addEventListener("mouseover", function () {
    document.getElementById('body').style.backgroundImage = "url(../src/salle-tv-acceuil.jpg)";
}, false);
document.getElementById('body').addEventListener("mouseout", function () {
    document.getElementById(body).style.backgroundImage = "url(..src/salle-tv-éteint.jpg)";
}, false);

*/

let LsWidth = screen.width;
let HsWidth = screen.height;




let tv1 = document.getElementById("tv1")


tv1.addEventListener("mouseover", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-accueil.jpg)";
})
tv1.addEventListener("mouseout", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-éteint.jpg)";
})

tv2.addEventListener("mouseover", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-poster.jpg)";
})
tv2.addEventListener("mouseout", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-éteint.jpg)";
})

tv3.addEventListener("mouseover", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-video.jpg)";
})
tv3.addEventListener("mouseout", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-éteint.jpg)";
})
tv4.addEventListener("mouseover", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-about.jpg)";
})
tv4.addEventListener("mouseout", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-éteint.jpg)";
})
tv5.addEventListener("mouseover", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-poster.jpg)";
})
tv5.addEventListener("mouseout", function (event) {
    document.getElementById("body").style.background = "url(../Matrix.fr/src/salle-tv-éteint.jpg)";
})