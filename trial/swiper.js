var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
  // document.querySelector('.move').addEventListener('click', function(event){
  //   event.preventDefault();
  //   const activeSlide=swiper.slides[swiper.activeIndex].innerHtml;
  //   printarea=document.querySelector('.sed-all');
  //   printarea.innerHtml='current slide: ${activeSlide}'
  // })

