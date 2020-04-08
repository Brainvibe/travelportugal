/*
//Fadein when page loads
document.body.className = 'fade';

document.addEventListener("DOMContentLoaded", function (e) {
  document.body.className = '';
});

document.addEventListener("DOMContentLoaded", function (e) {
  document.body.classList.remove('fade');
});

//services dropdown slide animation

*/

$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


