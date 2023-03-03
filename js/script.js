const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 40);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

// -------------------- Slider -------------------------

const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

// ----------------

const slideImageb = document.querySelectorAll(".slide-imageb");
const slidesContainerb = document.querySelector(".slides-containerb");
const nextBtnb = document.querySelector(".next-btnb");
const prevBtnb = document.querySelector(".prev-btnb");
const navigationDotsb = document.querySelector(".navigation-dotsb");

let numberOfImagesb = slideImageb.length;
let slideWidthb = slideImageb[0].clientWidth;
let currentSlideb = 0;

// Set up the slider

function initb() {
  slideImageb.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImageb[0].classList.add("activeb");

  createNavigationDotsb();
}

initb();

// Create navigation dots

function createNavigationDotsb() {
  for (let i = 0; i < numberOfImagesb; i++) {
    const dotb = document.createElement("div");
    dotb.classList.add("single-dotb");
    navigationDotsb.appendChild(dotb);

    dotb.addEventListener("click", () => {
      goToSlideb(i);
    });
  }

  navigationDotsb.children[0].classList.add("activeb");
}

// Next Button

nextBtnb.addEventListener("click", () => {
  if (currentSlideb >= numberOfImagesb - 1) {
    goToSlideb(0);
    return;
  }

  currentSlideb++;
  goToSlideb(currentSlideb);
});

// Previous Button

prevBtnb.addEventListener("click", () => {
  if (currentSlideb <= 0) {
    goToSlideb(numberOfImagesb - 1);
    return;
  }

  currentSlideb--;
  goToSlideb(currentSlideb);
});

// Go To Slide

function goToSlideb(slideNumber) {
  slidesContainerb.style.transform =
    "translateX(-" + slideWidthb * slideNumber + "px)";

  currentSlideb = slideNumber;

  setActiveClassb();
}

// Set Active Class

function setActiveClassb() {
  // Set active class for Slide Image

  let currentActiveb = document.querySelector(".slide-imageb.active");
  currentActiveb.classList.remove("activeb");
  slideImageb[currentSlideb].classList.add("activeb");

  //   set active class for navigation dots

  let currentDotb = document.querySelector(".single-dotb.active");
  currentDotb.classList.remove("activeb");
  navigationDotsb.children[currentSlideb].classList.add("activeb");
}


