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
var btnMoveUp = document.getElementById("btnMoveUp");
var btnMoveLeft = document.getElementById("btnMoveLeft");
var btnMoveRight = document.getElementById("btnMoveRight");
var btnMoveDown = document.getElementById("btnMoveDown");
function move(dir){
    switch(dir) {
        case 1: //Up
            var losPos = Array.from(human.parentNode.parentNode.parentNode.parentNode.children).findIndex(element => 
                element.children[0].children[2].children[0] == human);
            if (losPos != -1){
                var losParDes = human.parentNode.parentNode.parentNode.parentNode.previousElementSibling;
                var arrayLosParDes = Array.from(losParDes.children);
                var losParElement;
                losParElement = arrayLosParDes[losPos];
                if(losParElement.children[0].children[2].classList.contains("esp")){
                    losParElement.appendChild(human);
                    btnMoveUp.classList.add("disabled");
                }
            }
            break;
        case 2: //Left
            break;
        case 3: //Right
            break;
        case 4: //Down
            break;
        default:
            break;
    }

    
}