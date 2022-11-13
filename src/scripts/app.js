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
}
//player
let currentAudio = 0; 

const audio = document.querySelector('.audio');

const temps = document.querySelector('.durre');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disque = document.querySelector('.vinyl');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const precedentBtn = document.querySelector('.precedent-btn');
const suivantBtn = document.querySelector('.suivant-btn');

/*change le bouton play en pause*/
playBtn.addEventListener ('click', () => {
  if(playBtn.className.includes('pause')){
    audio.play();
  }else{
    audio.pause();
  }
  playBtn.classList.toggle('pause');
  disque.classList.toggle('play');
})

//set up music
const setAudio = (i) => {
  temps.value = 0; 
  let song = musics[i];
  currentAudio = i;
  audio.src =song.path;
  
   songName.innerHTML = song.name; 
   artistName.innerHTML = song.artist; 
   disque.style.backgroundImage = `url('${song.cover}')`; 
  
  currentTime.innerHTML = '00:00';
  temps.max = audio.duration;
  console.log(audio.duration);
}

setAudio(0);

//gerer la temps
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if(min < 10){
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10){
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
}
setInterval (() => {
  temps.value = audio.currentTime;
  currentTime.innerHTML = formatTime(audio.currentTime);
}, 500)

temps.addEventListener('change', () => {
  audio.currentTime = temps.value;
})
// bouton prev and back

precedentBtn.addEventListener ('click', () => {
  if(currentAudio >= musics.length - 1){
    currentAudio = 0;
  }else{
    currentAudio++;
  }
  setAudio(currentAudio);
  playBtn.click();
})

suivantBtn.addEventListener ('click', () => {
  if(currentAudio <= 0){
    currentAudio = musics.length - 1;
  }else{
    currentAudio--;
  }
  setAudio(currentAudio);
  playBtn.click();
})

