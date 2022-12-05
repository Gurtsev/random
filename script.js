let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
let clear = document.getElementById('Clear');
console.log(stop);
let time;
let slider=[];
let slides = document.querySelectorAll('.slide');
let step = 0; // шаг контроль состояния слайдера
let offset = 0; // смещение

function init () {
  for(let i = 0; i<slides.length; i++) { // получение src  всех изображений в массив и удаление изображений.
    slider[i] = slides[i].src;
    slides[i].remove();
  }
}

function draw() { // создание картинок
  let img = document.createElement('img'); //создаю элемент img
  img.src = slider[step]; // присвоение ссылки img
  img.classList.add('slide'); //  присвоение класса
  img.style.top = - offset*200 + 'px'; // смещение картинки вверх
  document.querySelector('.slides').appendChild(img); // добавление картинки в слайдер
  if(step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset;
}

function changeS() { //замена слайда
  
  let slides2 = document.querySelectorAll('.slide'); //получение коллекции из присутствующих элементов
  let offset2 = 0;
  
  for(let i=0; i < slides2.length; i++) {
    slides2[i].style.top =  (offset2*200) - 200 + 'px';
    offset2++;
  }
  setTimeout(function() {
    slides2[0].remove();
    draw();
    
  }, 300);
  
}

function pc () { //запуск функций
  draw();draw();
  changeS();
}


start.addEventListener('click', () => { // запуск слайдера
  init();
  time = setInterval(pc, 100);
    
});
stop.addEventListener('click', () => { //отсановка слайдера
  clearInterval(time);
});
clear.addEventListener('click', () => { // реализовать сброс после остановки слайдера
  
});
console.log(time);
// На данный момент слайдер перелистывается, все ок. Но, при переходах изображение останавливается и далее происходит переход. Необходимо реализовать плавное пролистывание.
// Попробывать сделать слайдер из div-ов