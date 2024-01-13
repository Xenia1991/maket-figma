let button = document.querySelector('.button');

button.addEventListener ('click', function(evt) {
    
    evt.preventDefault();
    
    let slider = document.querySelector('.brand-list');

    if (slider.classList.contains('brand-list--hidden')) {

       slider.classList.remove('brand-list--hidden');
       slider.classList.add('brand-list--unhidden'); 
       
       let buttonText = button.querySelector('.button__text');
       buttonText.textContent = 'Скрыть';
       
       let buttonImg = button.querySelector('.button__img');
       buttonImg.src = '/images/up.png';

    } else if (slider.classList.contains('brand-list--unhidden')) {
       
       slider.classList.remove('brand-list--unhidden');
       slider.classList.add('brand-list--hidden');
       
       let buttonText = button.querySelector('.button__text');
       buttonText.textContent = 'Показать все';
       
       let buttonImg = button.querySelector('.button__img');
       buttonImg.src = '/images/expand.png';

    };
});

new Swiper('.slider-list', {
   slidesPerView: '1.2',
   
   pagination: {
      el: '.swiper-pagination',
      clickable: true, 
   },
})