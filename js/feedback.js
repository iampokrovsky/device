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
