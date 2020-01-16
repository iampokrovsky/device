var open = document.querySelector(".write-us");
var feedback = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close");
var form = feedback.querySelector(".feedback-form");
var username = feedback.querySelector(".feedback-name input");
var email = feedback.querySelector(".feedback-email input");
var text = feedback.querySelector(".feedback-text textarea");
var submitButton = feedback.querySelector(".feedback-form button");

var isStorageSupport = true;
var storageUsername = "";
var storageEmail = "";

try {
  storageUsername = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

open.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!overlay.classList.contains("display-block") && !feedback.classList.contains("modal-show")) {
    overlay.classList.add("display-block");
    feedback.classList.add("modal-show");
    username.focus();
  }

  username.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      email.focus();
    }
  });

  email.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      text.focus();
    }
  });

  if (isStorageSupport) {
    if (storageUsername) {
      username.value = storageUsername;
    }

    if (storageEmail) {
      email.value = storageEmail;
    }
  }

  if (username.value && !email.value) {
    email.focus();
  }

  if (email.value && !username.value) {
    username.focus();
  }

  if (username.value && email.value) {
    text.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!username.value || email.invalid || !text.value) {
    evt.preventDefault();
    feedback.classList.add("feedback-error");
  }

  if (!username.value) {
    username.classList.add("feedback-invalid");
  }

  if (!email.value || email.invalid) {
    email.classList.add("feedback-invalid")
  }

  if (!text.value) {
    text.classList.add("feedback-invalid")
  }

  if (isStorageSupport) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
  }
});

submitButton.addEventListener("click", function() {
  if (feedback.classList.contains("feedback-error")) {
    feedback.classList.remove("feedback-error");
  }
});

username.addEventListener("keydown", function () {
  if (username.value && username.classList.contains("feedback-invalid")) {
    username.classList.remove("feedback-invalid");
  }
});

email.addEventListener("keydown", function () {
  if (email.value && email.classList.contains("feedback-invalid")) {
    email.classList.remove("feedback-invalid");
  }
});

text.addEventListener("keydown", function () {
  if (text.value && text.classList.contains("feedback-invalid")) {
    text.classList.remove("feedback-invalid");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (overlay.classList.contains("display-block") && feedback.classList.contains("modal-show")) {
    overlay.classList.remove("display-block");
    feedback.classList.remove("modal-show");
  }

  if (feedback.classList.contains("feedback-error")) {
    feedback.classList.remove("feedback-error");
  }

  if (username.classList.contains("feedback-invalid")) {
    username.classList.remove("feedback-invalid");
  }

  if (email.classList.contains("feedback-invalid")) {
    email.classList.remove("feedback-invalid");
  }

  if (text.classList.contains("feedback-invalid")) {
    text.classList.remove("feedback-invalid");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (overlay.classList.contains("display-block") && feedback.classList.contains("modal-show")) {
      overlay.classList.remove("display-block");
      feedback.classList.remove("modal-show");
    }

    if (feedback.classList.contains("feedback-error")) {
      feedback.classList.remove("feedback-error");
    }

    if (username.classList.contains("feedback-invalid")) {
      username.classList.remove("feedback-invalid");
    }

    if (email.classList.contains("feedback-invalid")) {
      email.classList.remove("feedback-invalid");
    }

    if (text.classList.contains("feedback-invalid")) {
      text.classList.remove("feedback-invalid");
    }
  }
});

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var mapOverlay = document.querySelector(".overlay");
var mapClose = document.querySelector(".map-close");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!mapOverlay.classList.contains("display-block") && !mapPopup.classList.contains("modal-show")) {
    mapOverlay.classList.add("display-block");
    mapPopup.classList.add("modal-show");
  }
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (mapOverlay.classList.contains("display-block") && mapPopup.classList.contains("modal-show")) {
    mapOverlay.classList.remove("display-block");
    mapPopup.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (mapOverlay.classList.contains("display-block") && mapPopup.classList.contains("modal-show")) {
      mapOverlay.classList.remove("display-block");
      mapPopup.classList.remove("modal-show");
    }
  }
});

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

var services = document.querySelector(".services");
var servicesButton1 = services.querySelector(".services-btn-1");
var servicesButton2 = services.querySelector(".services-btn-2");
var servicesButton3 = services.querySelector(".services-btn-3");
var delivery = services.querySelector(".delivery");
var warranty = services.querySelector(".warranty");
var credit = services.querySelector(".credit");

servicesButton1.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!servicesButton1.classList.contains("services-btn-active")) {
    servicesButton1.classList.add("services-btn-active");
  }

  if (servicesButton2.classList.contains("services-btn-active")) {
    servicesButton2.classList.remove("services-btn-active");
  }

  if (servicesButton3.classList.contains("services-btn-active")) {
    servicesButton3.classList.remove("services-btn-active");
  }

  if (!delivery.classList.contains("services-active")) {
    delivery.classList.add("services-active");
  }

  if (warranty.classList.contains("services-active")) {
    warranty.classList.remove("services-active");
  }

  if (credit.classList.contains("services-active")) {
    credit.classList.remove("services-active");
  }
});

servicesButton2.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!servicesButton2.classList.contains("services-btn-active")) {
    servicesButton2.classList.add("services-btn-active");
  }

  if (servicesButton1.classList.contains("services-btn-active")) {
    servicesButton1.classList.remove("services-btn-active");
  }

  if (servicesButton3.classList.contains("services-btn-active")) {
    servicesButton3.classList.remove("services-btn-active");
  }

  if (!warranty.classList.contains("services-active")) {
    warranty.classList.add("services-active");
  }

  if (delivery.classList.contains("services-active")) {
    delivery.classList.remove("services-active");
  }

  if (credit.classList.contains("services-active")) {
    credit.classList.remove("services-active");
  }
});

servicesButton3.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!servicesButton3.classList.contains("services-btn-active")) {
    servicesButton3.classList.add("services-btn-active");
  }

  if (servicesButton1.classList.contains("services-btn-active")) {
    servicesButton1.classList.remove("services-btn-active");
  }

  if (servicesButton2.classList.contains("services-btn-active")) {
    servicesButton2.classList.remove("services-btn-active");
  }

  if (!credit.classList.contains("services-active")) {
    credit.classList.add("services-active");
  }

  if (delivery.classList.contains("services-active")) {
    delivery.classList.remove("services-active");
  }

  if (warranty.classList.contains("services-active")) {
    warranty.classList.remove("services-active");
  }
});
