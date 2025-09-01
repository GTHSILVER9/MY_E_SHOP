const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");

 menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
 });

 menuCloseButton.addEventListener("click", () => menuOpenButton.click());

 const swiper = new Swiper(" .slider-wrapper ", {
   loop: true,

   pagination : {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
}); 