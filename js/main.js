window.onload = function(){
    halfmoon.toggleModal("modal-1");
}

var playBtn = document.getElementById("playBtn");

playBtn.onclick = function(){
    var start = document.getElementById("startpoint");
    var human = document.getElementById("human");
    start = start.value;
    var startingsquare = document.getElementById(start);
    var spaces = startingsquare.parentElement.getElementsByClassName("esp");
    spaces[0].appendChild(human);
    halfmoon.toggleModal("modal-1");
}

function rollDice8(){
    var valued8 = chance.d8();
    var d8 = document.getElementById("d8");
    d8.value = valued8;
}

var diceBtn = document.getElementById("diceBtn");
diceBtn.onclick = rollDice8;