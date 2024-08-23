  let header = document.querySelector('header');
  let menu = document.querySelector('menu-icon');
  let navbar = document.querySelector('.navbar');

  window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrolly > 0);
  });
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
    
  var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

// //swiper
var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0:{
      slidesperview: 2,
    },
    568: {
      slidesperview: 3,
    },
    768: {
      slidesperview: 4,
    },
    968: {
      slidesperview: 5,
    },
    },
});
