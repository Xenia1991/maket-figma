let buttonElement = document.querySelector('.button');
let sliderElement = document.querySelector('.brand-list');
let screenWidth = document.querySelector('.page-container');
let swiperPage;

let openBrandMenu = function () {

   if (sliderElement.classList.contains('brand-list--hidden')) {

       sliderElement.classList.remove('brand-list--hidden');
       sliderElement.classList.add('brand-list--unhidden'); 
       
       let buttonText = buttonElement.querySelector('.button__text');
       buttonText.textContent = 'Скрыть';
       
       let buttonImg = buttonElement.querySelector('.button__img');
       buttonImg.src = '/images/up.png';

   } else if (sliderElement.classList.contains('brand-list--unhidden')) {
       
       sliderElement.classList.remove('brand-list--unhidden');
       sliderElement.classList.add('brand-list--hidden');
       
       let buttonText = buttonElement.querySelector('.button__text');
       buttonText.textContent = 'Показать все';
       
       let buttonImg = buttonElement.querySelector('.button__img');
       buttonImg.src = '/images/expand.png';

   }
}

let resizeWindow = function () {

   if (screenWidth.clientWidth < 768 && !swiperPage) {
      swiperPage = new Swiper('.slider-list', {
         slidesPerView: '1.2',
         
         pagination: {
            el: '.swiper-pagination',
            clickable: true, 
         }
      }); 
   } else if (screenWidth.clientWidth>=768 && swiperPage) {
      swiperPage.disable();
      swiperPage.destroy(false, true);
      swiperPage = null;
   }
   
}

if (screenWidth.clientWidth < 768) {
   
   swiperPage = new Swiper('.slider-list', {
      
      slidesPerView: '1.2',
      
      pagination: {
         el: '.swiper-pagination',
         clickable: true, 
      }
      
   });
};

buttonElement.addEventListener('click', openBrandMenu);
window.addEventListener ('resize', resizeWindow);
