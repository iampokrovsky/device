var mainSlides = document.querySelector(".main-slides");
var slider = mainSlides.querySelector(".slides-list");
var button1 = mainSlides.querySelector(".slides-btn-1");
var button2 = mainSlides.querySelector(".slides-btn-2");
var button3 = mainSlides.querySelector(".slides-btn-3");

button1.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!button1.classList.contains("slides-btn-active")) {
    button1.classList.add("slides-btn-active");
  }

  if (button2.classList.contains("slides-btn-active")) {
    button2.classList.remove("slides-btn-active");
  }

  if (button3.classList.contains("slides-btn-active")) {
    button3.classList.remove("slides-btn-active");
  }

  if (!slider.classList.contains("slide-1")) {
    slider.classList.add("slide-1");
  }

  if (slider.classList.contains("slide-2")) {
    slider.classList.remove("slide-2");
  }

  if (slider.classList.contains("slide-3")) {
    slider.classList.remove("slide-3");
  }
})

button2.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!button2.classList.contains("slides-btn-active")) {
    button2.classList.add("slides-btn-active");
  }

  if (button1.classList.contains("slides-btn-active")) {
    button1.classList.remove("slides-btn-active");
  }

  if (button3.classList.contains("slides-btn-active")) {
    button3.classList.remove("slides-btn-active");
  }

  if (!slider.classList.contains("slide-2")) {
    slider.classList.add("slide-2");
  }

  if (slider.classList.contains("slide-1")) {
    slider.classList.remove("slide-1");
  }

  if (slider.classList.contains("slide-3")) {
    slider.classList.remove("slide-3");
  }
})

button3.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!button3.classList.contains("slides-btn-active")) {
    button3.classList.add("slides-btn-active");
  }

  if (button1.classList.contains("slides-btn-active")) {
    button1.classList.remove("slides-btn-active");
  }

  if (button2.classList.contains("slides-btn-active")) {
    button2.classList.remove("slides-btn-active");
  }

  if (!slider.classList.contains("slide-3")) {
    slider.classList.add("slide-3");
  }

  if (slider.classList.contains("slide-1")) {
    slider.classList.remove("slide-1");
  }

  if (slider.classList.contains("slide-2")) {
    slider.classList.remove("slide-2");
  }
})
