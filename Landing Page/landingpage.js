var swiper = new Swiper(".container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var wrap = document.querySelectorAll('.comic-box');
var btn = document.querySelector('.loadbtn');
currentimg = 5;
btn.addEventListener('click', function () {
  for (var i = currentimg; i < currentimg + 5; i++) {
    if (wrap[i]) {
      wrap[i].style.display = 'block';
    }
  }
  currentimg += 5;
  if (currentimg >= wrap.length) {
    Event.target.style.display = 'none';
  }
})

