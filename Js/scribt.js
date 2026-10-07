// $(document).ready(function(){
//   $('.slider_box').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   fade: true,
//   cssEase: 'linear',
//   });
// })

$('.my-news-ticker').AcmeTicker({
  direction: 'fade', // مخصوص RTL
  type: 'horizontal',
  autoplay: 2000,
  speed: 500,
  pauseOnFocus: true,
  pauseOnHover: true,
  controls: {
    prev: $('.acme-news-ticker-prev'),
    toggle: $('.acme-news-ticker-pause'),
    next: $('.acme-news-ticker-next')
  }
});
 // گرفتن همه اسلایدها
  const slides = document.querySelectorAll('.slider_box .slide_item');
  let current = 0; // شماره اسلاید فعلی

  function showNextSlide() {
    // اسلاید فعلی را مخفی کن
    slides[current].classList.remove('active');

    // شماره اسلاید بعدی
    current = (current + 1) % slides.length;

    // اسلاید بعدی را نمایش بده
    slides[current].classList.add('active');
  }

  // تغییر اسلاید هر 3 ثانیه
  setInterval(showNextSlide, 3000);