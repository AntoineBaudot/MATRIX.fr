//Characters strings
var matNumbers = "01";
var matOthers = "abcdefghijklmnopqrstuvwxyzアイウエオカキクケコサシスセソフハヒフヘハデカナテバサダレモノモモデナイケタデスヨあいうえおかきくけこがぎぐげごまみむめもさしすせそわやゆうぉんんんよられりる";

//Canvas definition
var c = document.getElementById("matrixprint");
var cv1 = c.getContext("2d");

//Canvas full screen sizing
c.height = window.innerHeight;
c.width = window.innerWidth;

//Strings splitting
matNumbers = matNumbers.split("");
matOthers = matOthers.split("");
var fontsize = 18;
var columns = c.width / fontsize; //Column number
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//Characters Drawing
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    cv1.fillStyle = "rgba(0, 0, 0, 0.05)";
    cv1.fillRect(0, 0, c.width, c.height);
    cv1.fillStyle = "#58e57a"; //green text
    cv1.font = fontsize + "px arial";
    //Drops
    for (var i = 0; i < drops.length; i++) {
        //declare the empty text variable to alternate asian characters
        var text;
        if (i % 3 == 0) { //Romajis
            text = matNumbers[Math.floor(Math.random() * matNumbers.length)];
        } else if (i % 3 == 1) { //Katakanas
            text = matOthers[Math.floor(Math.random() * matOthers.length)];
        }
        cv1.fillText(text, i * fontsize, drops[i] * fontsize);
        //Random drops
        if (drops[i] * fontsize > c.height && Math.random() > 0.975)
            drops[i] = 0;
        //Y increment
        drops[i]++;
    }
}
setInterval(draw, 85);




