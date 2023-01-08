'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
//The main task 

let debug = document.getElementById('debug')
debug.addEventListener("click", ()=>{
  respModal.innerHTML  = "Hello Fetching the best possible solution for you.."
  let input = document.getElementById('question').value 
  let url = `/data?query=${input}`
            let r = fetch(url)
            r.then((response)=>{
                return response.json()
            }).then((resp)=>{
                console.log(resp)
                // document.querySelector('.hero-text').innerHTML = resp
              
                respModal.innerHTML  = resp
                // setTimeout(() => {
                  

            })
            const modal = document.querySelector(".modal");
                  const trigger = document.querySelector(".trigger");
                  const closeButton = document.querySelector(".close-button");
                
                  function toggleModal() {
                    modal.classList.toggle("show-modal");
                    // document.querySelector('.blur').classList.toggle('opacity')
                  }
                  function windowOnClick(event) {
                    if (event.target === modal) {
                      toggleModal();
                      // alert("hi")
                    }
                  }
                  toggleModal()
                  closeButton.addEventListener("click", toggleModal);
                  window.addEventListener("click", windowOnClick);
                // }, 1000)
                return resp
      // container.innerHTML = resp
      // let container = document.querySelector('#topics .container')
})
