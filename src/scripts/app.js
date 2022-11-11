const box = document.querySelector('.box');
let scrollLine =  document.querySelector('.scroll');

box.addEventListener('wheel', (e)=> {
      e.preventDefault();
      box.scrollLeft += e.deltaY;
      scrollLinr.style.width = box.scrollLeft / 2 + 'px';
})
