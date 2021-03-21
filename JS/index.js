/*****************************************************************************/
/******************************* SPLASH SCREEN *******************************/
/*****************************************************************************/

const sliderContainer = document.querySelector('.slide-container'),
  slideRight = document.querySelector('.right-slide'),
  slideLeft = document.querySelector('.left-slide'),
  upButton = document.querySelector('.up-button'),
  downButton = document.querySelector('.down-button'),
  slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  // const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // slideRight.style.transform = `translateY(-${
  //   activeSlideIndex * sliderHeight
  // }px)`;
  // slideLeft.style.transform = `translateY(${
  //   activeSlideIndex * sliderHeight
  // }px)`;
  slideRight.style.transform = `translateY(-${activeSlideIndex * 90}vh)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 90}vh)`;
};

/*****************************************************************************/
/******************************** Gallery ************************************/
/*****************************************************************************/

const myCarousel = document.querySelector("#myCarousel")
const primaryCarousel = new bootstrap.Carousel(myCarousel, {
  interval: false
});
const carouselThumbs = document.querySelector("#carousel-thumbs")
const secondaryCarousel = new bootstrap.Carousel(carouselThumbs, {
  interval: false
});

/*****************************************************************************/
/********************************** F.A.Q ************************************/
/*****************************************************************************/

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
