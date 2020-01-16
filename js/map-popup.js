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
