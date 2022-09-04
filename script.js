"use strict";

intro.style.textAlign = "center"

function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomLoc(el) {
    el.style.position = "absolute";
    el.style.top = randint(0, window.innerHeight) + "px";
    el.style.left = randint(0, window.innerWidth) + "px";
}

randomLoc(document.getElementById("star"));

