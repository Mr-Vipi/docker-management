const sliderContainer = document.querySelector('.slide-container'),
  slideRight = document.querySelector('.right-slide'),
  slideLeft = document.querySelector('.left-slide'),
  upButton = document.querySelector('.up-button'),
  downButton = document.querySelector('.down-button'),
  slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 50}vh`;

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
  slideRight.style.transform = `translateY(-${activeSlideIndex * 50}vh)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 50}vh)`;
};
