let scoreHel = document.getElementById("score-home");
let scoreGel = document.getElementById("score-guest");

let scoreh = 0;

function h1(){
    scoreh += 1;
    scoreHel.innerText = scoreh;
}
function h2(){
    scoreh += 2;
    scoreHel.innerText = scoreh;
}
function h3(){
    scoreh += 3;
    scoreHel.innerText = scoreh;
}

let scoreg=0;
function g1(){
    scoreg += 1;
    scoreGel.innerText = scoreg;
}
function g2(){
    scoreg += 2;
    scoreGel.innerText = scoreg;
}
function g3(){
    scoreg += 3;
    scoreGel.innerText = scoreg;
}