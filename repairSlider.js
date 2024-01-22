let repairSwiper;
let repairContainerElement = document.querySelector('.repair-list');
let buttonElement = document.querySelector('.button');
let screenWidth = document.querySelector('.page-container');

if (screenWidth.clientWidth < 768) {
   
    repairSwiper = new Swiper('.swiper', {
       
       spacebetween: '16',

       slidesPerView: '1.13',
       
       pagination: {
          el: '.swiper-pagination',
          clickable: true, 
       } 
    });
 };

 let resizeWindow = function () {

    if (screenWidth.clientWidth < 768 && !repairSwiper) {
       repairSwiper = new Swiper('.swiper', {
          slidesPerView: '1.2',
          
          pagination: {
             el: '.swiper-pagination',
             clickable: true, 
          }
       }); 
    } else if (screenWidth.clientWidth>=768 && repairSwiper) {
       repairSwiper.disable();
       repairSwiper.destroy(false, true);
       repairSwiper = null;
    }

 }

let openRepairMenu = function () {

    if (repairContainerElement.classList.contains('repair-list--hidden')) {

        repairContainerElement.classList.remove('repair-list--hidden');
        repairContainerElement.classList.add('repair-list--unhidden');

        let buttonText = buttonElement.querySelector('.button__text');
        buttonText.textContent = 'Скрыть';
       
        let buttonImg = buttonElement.querySelector('.button__img');
        buttonImg.src = '/images/up.png';

    } else if (repairContainerElement.classList.contains('repair-list--unhidden')) {

        repairContainerElement.classList.remove('repair-list--unhidden');
        repairContainerElement.classList.add('repair-list--hidden');
        
        let buttonText = buttonElement.querySelector('.button__text');
        buttonText.textContent = 'Показать все';
       
        let buttonImg = buttonElement.querySelector('.button__img');
        buttonImg.src = '/images/expand.png';

    }

}

 window.addEventListener ('resize', resizeWindow);
 buttonElement.addEventListener('click', openRepairMenu);