/* window.onload = function() {
    playTxt();
}

function playTxt() {
    var i = 0;
    var txt = "Gebe dein Passwort ein!";
    var speed = 40;
    if (i < txt.length) {
        document.getElementById("password").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
} */

function showpwd() {
    var x = document.getElementById("pwdinput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}