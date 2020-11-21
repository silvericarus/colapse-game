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


var diceBtn = document.getElementById("diceBtn");
diceBtn.onclick = rollDice8;
function move(dir){
    switch(dir) {
        case 1: //Up
            var losPos = Array.from(human.parentNode.parentNode.parentNode.parentNode.children).findIndex(element => 
                element.children[0].children[2].children[0] == human);
            if (losPos != -1){
                let losParDes = human.parentNode.parentNode.parentNode.parentNode.previousElementSibling;
                let arrayLosParDes = Array.from(losParDes.children);
                let losParElement;
                losParElement = arrayLosParDes[losPos];
                if(losParElement.children[0].children[2].classList.contains("esp")){
                    losParElement.appendChild(human);
                    btnMoveUp.classList.add("disabled");
                }
            }
            break;
        case 2: //Left
            var losPos = Array.from(human.parentNode.parentNode.parentNode.parentNode.children).findIndex(element => 
                element.children[0].children[2].children[0] == human);
            if (losPos != -1){
                let losParElement = human.parentNode.parentNode.parentNode.previousElementSibling;
                if(losParElement.children[0].children[2].classList.contains("esp")){
                    losParElement.appendChild(human);
                    btnMoveLeft.classList.add("disabled");
                }
            }
            break;
        case 3: //Right
            var losPos = Array.from(human.parentNode.parentNode.parentNode.parentNode.children).findIndex(element => 
                element.children[0].children[2].children[0] == human);
            if (losPos != -1){
                let losParElement = human.parentNode.parentNode.parentNode.nextElementSibling;
                if(losParElement.children[0].children[2].classList.contains("esp")){
                    losParElement.appendChild(human);
                    btnMoveRight.classList.add("disabled");
                }
            }
            break;
        case 4: //Down
            var losPos = Array.from(human.parentNode.parentNode.parentNode.parentNode.children).findIndex(element => 
                element.children[0].children[2].children[0] == human);
            if (losPos != -1){
                let losParDes = human.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
                let arrayLosParDes = Array.from(losParDes.children);
                let losParElement;
                losParElement = arrayLosParDes[losPos];
                if(losParElement.children[0].children[2].classList.contains("esp")){
                    losParElement.appendChild(human);
                    btnMoveDown.classList.add("disabled");
                }
            }
            break;
        default:
            break;
    }   
}

function translateMoveArrow(arrow) {
    switch (arrow) {
        case "↑":
            return 1;
        case "←":
            return 2;
        case "→":
            return 3;
        case "↓":
            return 4;
    }
}

function rollDice8(){
    var valued8 = chance.d8();
    var d8 = document.getElementById("d8");
    collapseLoseta(valued8);
    d8.value = valued8;
    
}

function collapseLoseta(num) {
    //Checkear si loseta objetivo es td.vacia o td#1-8
    var losetaObjetivo = document.getElementById(num).parentElement.parentElement;
    var dir = losetaObjetivo.children[0].getElementsByClassName("dir")[0];
    switch(translateMoveArrow(dir.innerText)){
        case 1://Up
            var losPos = Array.from(losetaObjetivo.parentElement.children).findIndex(element => 
            element.children[0].children[0].innerText == num);
            if(losPos != -1){
                var losParDes = losetaObjetivo.parentElement.previousElementSibling;
                var arrayLosParDes = Array.from(losParDes.children);
                var losParElement;
                losParElement = arrayLosParDes[losPos];
                var newLoseta = document.createElement("td");
                newLoseta.classList.add("vacia");
                losetaObjetivo.parentElement.insertBefore(newLoseta,losetaObjetivo);
                losParElement.appendChild(losetaObjetivo);
            }
            break;
        case 2://Left
            var losPos = Array.from(losetaObjetivo.parentElement.children).findIndex(element => 
            element.children[0].children[0].innerText == num);
            if (losPos != -1){
                let losParElement = losetaObjetivo.previousElementSibling;
                var newLoseta = document.createElement("td");
                newLoseta.classList.add("vacia");
                losetaObjetivo.insertAdjacentElement("afterend",newLoseta);
                losParElement.appendChild(losetaObjetivo);
            }
            break;
        case 3://Right
        var losPos = Array.from(losetaObjetivo.parentElement.children).findIndex(element => 
            element.children[0].children[0].innerText == num);
            if (losPos != -1){
                let losParElement = losetaObjetivo.nextElementSibling;
                var newLoseta = document.createElement("td");
                newLoseta.classList.add("vacia");
                losetaObjetivo.insertAdjacentElement("afterend",newLoseta);
                losParElement.appendChild(losetaObjetivo);
            }
            break;
        case 4://Down
        var losPos = Array.from(losetaObjetivo.parentElement.children).findIndex(element => 
            element.children[0].children[0].innerText == num);
            if(losPos != -1){
                var losParDes = losetaObjetivo.parentElement.nextElementSibling;
                var arrayLosParDes = Array.from(losParDes.children);
                var losParElement;
                losParElement = arrayLosParDes[losPos];
                var newLoseta = document.createElement("td");
                newLoseta.classList.add("vacia");
                losetaObjetivo.parentElement.insertBefore(newLoseta,losetaObjetivo);
                losParElement.appendChild(losetaObjetivo);
            }
            break;
    }
}