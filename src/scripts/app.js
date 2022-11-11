"use strict";
const box = document.querySelector('.box');
let scrollLine =  document.querySelector('.scroll');

box.addEventListener('wheel', (e)=> {
      e.preventDefault();
      box.scrollLeft += e.deltaY;
      scrollLinr.style.width = box.scrollLeft / 2 + 'px';
});

let burger = document.querySelector(".bouton-menu");
burger.addEventListener("click", toggle);

function toggle(){
    if(document.body.hasAttribute("burger-menu")){
        document.body.removeAttribute("burger-menu");
        burger.innerHTML = "Menu";
    }else{
        document.body.setAttribute("burger-menu", true);
        burger.innerHTML = "Retour";
    }
};