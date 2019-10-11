var str = "Wake up...<br>The Matrix has you..<br>Follow the white rabbit.",
    i = 0,
    skipIt = false,
    text,
    inputText,
    username,
    usernameOk = false,
    nextMatrixComp = 0,
    nextMatrixAnswer = 0,
    p;
var speed = 60;

function inputUsername() {
    document.getElementById("matrixType").innerHTML = "Please enter your login :";
}
function nextMatrix() {
    if (nextMatrixComp === 0) {
        nextMatrixComp++;
        i = 0;
        text = [];
        document.getElementById("matrixType").innerHTML = "Knock, Knock, " + username + ".";
        str = "You'll need to solve some riddles to achieve this game!<br>To get some indications about riddles, use the command: help,<br>you can also quit this game by typing: quit. Enjoy!";
        setTimeout(matrixType, 3000);
    }
    else if (nextMatrixComp === 1) {
        nextMatrixComp++;
        i = 0;
        text = [];
        str = "Enter Password :";
        setTimeout(matrixType, 1);
    }
    else if (nextMatrixAnswer === 1) {
        nextMatrixComp++;
        nextMatrixAnswer = 6;
        i = 0;
        text = [];
        str = "Authorized user. Prove us that you're trustworthy.<br>You will be tested<br> GPMMP XIJN :";
        setTimeout(matrixType, 1);
    }
    else if (nextMatrixAnswer === 2) {
        nextMatrixAnswer = 7;
        i = 0;
        text = [];
        str = "All right, you found the white rabbit.<br>Don't expect him to lead you to us. You do not truly know someone, until you fight them.";
        setTimeout(matrixType, 1);
    }
    else if (nextMatrixAnswer === 3) {
        nextMatrixAnswer = 8;
        i = 0;
        text = [];
        str = "All right, if you're ready, you have one more choice to make.";
        setTimeout(matrixType, 1);
    }
    else if (nextMatrixAnswer === 4) {
        nextMatrixAnswer = 0;
        i = 0;
        text = [];
        str = "Good choice, " + username + ", Welcome to the real world.";
        nextMatrixComp = 4;
        setTimeout(matrixType, 1);
    }
    else if (nextMatrixComp === 4) {
        redirectWebsite();
    }
}

function redirectWebsite() {
    location.replace("computer.html")
}

function matrixType() {
    text = str.slice(0, ++i);
    if (text === str) return nextMatrix();
    document.getElementById("matrixType").innerHTML = text;
    var char = text.slice(-1);
    if (char === '<') {
        skipIt = true;
    }
    if (char === '>') {
        skipIt = false;
    }
    switch (char) {
        case ',':
            setTimeout(matrixType, 700);
            break;
        case '.':
            setTimeout(matrixType, 1100);
            break;
        default:
            if (skipIt) return matrixType();
            return setTimeout(matrixType, speed);
    }
}

function resetInput() {
    document.getElementById("inputBox").value = "";
}

function newLine(text) {
    var y = window.scrollY;
    resetInput();
    var newP = document.createElement("p");
    newP.setAttribute("id", "pGen");
    var newContent = document.createTextNode(text);
    newP.appendChild(newContent);
    var currentP = document.getElementById('p1');
    document.body.insertBefore(newP, currentP);
    window.scrollTo(0, y + 100);
    setTimeout(removeLine, 3000);
}

function removeLine() {
    p = document.getElementById("pGen");
    p.parentNode.removeChild(p);
}

function interpreteCommands() {
    inputText = document.getElementById("inputBox").value;
    let docText = "";
    switch (inputText) {
        case "help":
            docText = "You don't really need help now...";
            if (nextMatrixComp === 2) {
                docText = "You need a 4 digit password.";
            }
            else if (nextMatrixAnswer === 6) {
                docText = "Caesar didn't want to be understood. Its probably an Alice in wonderlands reference";
            }
            else if (nextMatrixAnswer === 7) {
                docText = "rfc 4648 has an elder";
            }
            else if (nextMatrixAnswer === 8) {
                docText = "He is the youngest member of the family";
            }
            newLine(docText);
            break;
        case 'sudo':
            docText = "You don't have enough privileges.";
            newLine(docText);
            break;
        case '1999':
            nextMatrixAnswer = 1;
            resetInput();
            nextMatrix();
            break;
        case 'the white rabbit':
            nextMatrixAnswer = 2;
            resetInput();
            nextMatrix();
            break;
        case 'white rabbit':
            nextMatrixAnswer = 2;
            resetInput();
            nextMatrix();
            break;
        case 'QXJlIHlvdSByZWFkeSB0byBmaWdodA== ?':
            nextMatrixAnswer = 3;
            resetInput();
            nextMatrix();
            break;
        case '726564206f7220626c7565':
            nextMatrixAnswer = 4;
            resetInput();
            nextMatrix();
            break;
        case 'quit':
            redirectWebsite();
            break;
        default:
            docText = 'The command : "' + inputText + '" is not recognized, type "help" to get helped.';
            newLine(docText);
            break;
    }
}

//When enter is pressed
document.getElementById("inputBox").onkeyup = function (e) {
    if (e.keyCode === 13 && usernameOk) {
        interpreteCommands();
        document.getElementById("inputBox").focus();
    }
    if (e.keyCode === 13 && usernameOk === false) {
        username = document.getElementById("inputBox").value;
        usernameOk = true;
        str = "Wake up, " + username + "...<br>The Matrix has you..<br>Follow the white rabbit..;",
            resetInput();
        matrixType();
    }
};

//Exec
inputUsername();
