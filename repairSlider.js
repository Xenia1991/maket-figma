let repairSwiper;
let screenWidth = document.querySelector('.page-container');

if (screenWidth.clientWidth < 768) {
   
    swiperPage = new Swiper('.swiper', {
       
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

 window.addEventListener ('resize', resizeWindow);