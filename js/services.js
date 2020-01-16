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
