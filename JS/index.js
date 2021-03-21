/*****************************************************************************/
/****************************** Back to Top Button ***************************/
/*****************************************************************************/

//Get the button
const mybutton = document.getElementById("myBtn");

const mediaQueryScrollButton = window.matchMedia("(min-width: 769px)");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  // Check if the media query is true
  if (mediaQueryScrollButton.matches) {
    // Then trigger an alert
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*****************************************************************************/
/******************************* SPLASH SCREEN *******************************/
/*****************************************************************************/

const sliderContainer = document.querySelector(".slide-container"),
  slideRight = document.querySelector(".right-slide"),
  slideLeft = document.querySelector(".left-slide"),
  upButton = document.querySelector(".up-button"),
  downButton = document.querySelector(".down-button"),
  slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  // const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
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

$("#myCarousel").on("slide.bs.carousel", function(e) {
  var id = parseInt($(e.relatedTarget).attr("data-bs-slide-number"));
  $("[id^=carousel-selector-]").removeClass("selected");
  $("[id=carousel-selector-" + id + "]").addClass("selected");
});

/*****************************************************************************/
/********************************** F.A.Q ************************************/
/*****************************************************************************/

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
