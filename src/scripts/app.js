"use strict";
let burger = document.querySelector(".bouton-menu");
burger.addEventListener("click", toggle);

function toggle(){
    if(document.body.hasAttribute("burger-menu")){
        document.body.removeAttribute("burger-menu");
        //burger.innerHTML = "Menu";
    }else{
        document.body.setAttribute("burger-menu", true);
        //burger.innerHTML = "Retour";
    }
};

var audio = document.getElementById("audio");
var play = document.getElementById("play");

play.onClick = function(){
  audio.play();
  console.log ("play");
};