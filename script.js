/*======menu======= */
let toggle =document.getElementById('nav');
let main_menu = document.getElementById('main_menu')

document.onclick = function(e){
  if(e.target.id !=='main_menu' && e.target.id !=='nav' ){
    nav.classList.remove('active');
    main_menu.classList.remove('active')
  }
}

    toggle.onclick = function(){
      nav.classList.toggle('active');
      main_menu.classList.toggle('active')

    }









/*======main Slider =========*/
let sliderIndex = 0;
const sliderImages = document.querySelectorAll('.slider img');
const sliderContainer = document.querySelector('.slider-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function nextSlide() {
  sliderIndex++;
  if (sliderIndex >= sliderImages.length) {
    sliderIndex = 0;
  }
  updateSlide();
}

function prevSlide() {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = sliderImages.length - 1;
  }
  updateSlide();
}

function updateSlide() {
  sliderImages.forEach((image) => {
    image.style.transform = `translateX(-${sliderIndex * 100}%)`;
  });
}

let autoplayInterval = setInterval(() => {
  nextSlide();
}, 5000);

sliderContainer.addEventListener('mouseover', () => {
  clearInterval(autoplayInterval);
});

sliderContainer.addEventListener('mouseout', () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

leftArrow.addEventListener('click', () => {
  prevSlide();
});

rightArrow.addEventListener('click', () => {
  nextSlide();
});



/*=========== slider ================*/
const cardsContainer = document.querySelector('.cards-container');
const card = document.querySelector('.card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let counter = 0;
const size = card.offsetWidth + -94;

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  cardsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextButton.addEventListener('click', () => {
  if (counter >= cardsContainer.children.length - 1) return;
  counter++;
  cardsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

/*===== card slider  */
