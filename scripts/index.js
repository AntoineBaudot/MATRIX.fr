
//Characters strings / romajis - hiraganas - katakana - kanjis
var matRomajis = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var matHiraganas = "あいうえおかきくけこがぎぐげごまみむめもさしすせそわやゆうぉんんんよられりる";
var matKatakakanas = "アイウエオカキクケコサシスセソフハヒフヘハデカナテバサダレモノモモデナイケタデスヨ";
var matKanjis = "一九七二人入八力十下三千上口土夕大女子小山川五天中六円手文日月木水火犬王正出本右四左玉生田白目石立百年休先名字早気竹糸耳虫村男町花見貝赤足車学林空金雨青草音校森";
//Canvas definition
var c = document.getElementById("matrixprint");
var cv1 = c.getContext("2d");
//Canvas full screen sizing
c.height = window.innerHeight;
c.width = window.innerWidth;
//Strings splitting
matRomajis = matRomajis.split("");
matHiraganas = matHiraganas.split("");
matKatakakanas = matKatakakanas.split("");
matKanjis = matKanjis.split("");

var fontsize = 16;
var columns = c.width / fontsize; //Column number
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    cv1.fillStyle = "rgba(0, 0, 0, 0.05)";
    cv1.fillRect(0, 0, c.width, c.height);

    // //added a small text in the middle of the matrix rain (for cute sense of humor)
    // cv1.fillStyle = "orange";
    // cv1.font = "bold 70px Arial";
    // cv1.fillText("This Matrix is running on 32-bit Windows", 50, 150);

    cv1.fillStyle = "#0F0"; //green text
    cv1.font = fontsize + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //declare the empty text variable to alternate asian characters
        var text;

        if (i % 3 == 0) { //Romajis
            text = matRomajis[Math.floor(Math.random() * matRomajis.length)];
        } else if (i % 3 == 1) { //Katakanas
            text = matKatakakanas[Math.floor(Math.random() * matKatakakanas.length)];
        } else if (i % 3 == 2) { //Hiraganas
            text = matHiraganas[Math.floor(Math.random() * matHiraganas.length)];
        }
        //x = i*fontsize, y = value of drops[i]*fontsize
        cv1.fillText(text, i * fontsize, drops[i] * fontsize);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontsize > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 80);




