var open=document.querySelector(".write-us"),feedback=document.querySelector(".feedback"),overlay=document.querySelector(".overlay"),close=document.querySelector(".feedback-close"),form=feedback.querySelector(".feedback-form"),username=feedback.querySelector(".feedback-name input"),email=feedback.querySelector(".feedback-email input"),text=feedback.querySelector(".feedback-text textarea"),submitButton=feedback.querySelector(".feedback-form button"),isStorageSupport=!0,storageUsername="",storageEmail="";try{storageUsername=localStorage.getItem("username"),storageEmail=localStorage.getItem("email")}catch(e){isStorageSupport=!1}open.addEventListener("click",function(e){e.preventDefault(),overlay.classList.contains("display-block")||feedback.classList.contains("modal-show")||(overlay.classList.add("display-block"),feedback.classList.add("modal-show"),username.focus()),username.addEventListener("keydown",function(e){13===e.keyCode&&email.focus()}),email.addEventListener("keydown",function(e){13===e.keyCode&&text.focus()}),isStorageSupport&&(storageUsername&&(username.value=storageUsername),storageEmail&&(email.value=storageEmail)),username.value&&!email.value&&email.focus(),email.value&&!username.value&&username.focus(),username.value&&email.value&&text.focus()}),form.addEventListener("submit",function(e){username.value&&!email.invalid&&text.value||(e.preventDefault(),feedback.classList.add("feedback-error")),username.value||username.classList.add("feedback-invalid"),email.value&&!email.invalid||email.classList.add("feedback-invalid"),text.value||text.classList.add("feedback-invalid"),isStorageSupport&&(localStorage.setItem("username",username.value),localStorage.setItem("email",email.value))}),submitButton.addEventListener("click",function(){feedback.classList.contains("feedback-error")&&feedback.classList.remove("feedback-error")}),username.addEventListener("keydown",function(){username.value&&username.classList.contains("feedback-invalid")&&username.classList.remove("feedback-invalid")}),email.addEventListener("keydown",function(){email.value&&email.classList.contains("feedback-invalid")&&email.classList.remove("feedback-invalid")}),text.addEventListener("keydown",function(){text.value&&text.classList.contains("feedback-invalid")&&text.classList.remove("feedback-invalid")}),close.addEventListener("click",function(e){e.preventDefault(),overlay.classList.contains("display-block")&&feedback.classList.contains("modal-show")&&(overlay.classList.remove("display-block"),feedback.classList.remove("modal-show")),feedback.classList.contains("feedback-error")&&feedback.classList.remove("feedback-error"),username.classList.contains("feedback-invalid")&&username.classList.remove("feedback-invalid"),email.classList.contains("feedback-invalid")&&email.classList.remove("feedback-invalid"),text.classList.contains("feedback-invalid")&&text.classList.remove("feedback-invalid")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),overlay.classList.contains("display-block")&&feedback.classList.contains("modal-show")&&(overlay.classList.remove("display-block"),feedback.classList.remove("modal-show")),feedback.classList.contains("feedback-error")&&feedback.classList.remove("feedback-error"),username.classList.contains("feedback-invalid")&&username.classList.remove("feedback-invalid"),email.classList.contains("feedback-invalid")&&email.classList.remove("feedback-invalid"),text.classList.contains("feedback-invalid")&&text.classList.remove("feedback-invalid"))});var mapOpen=document.querySelector(".map"),mapPopup=document.querySelector(".map-popup"),mapOverlay=document.querySelector(".overlay"),mapClose=document.querySelector(".map-close");mapOpen.addEventListener("click",function(e){e.preventDefault(),mapOverlay.classList.contains("display-block")||mapPopup.classList.contains("modal-show")||(mapOverlay.classList.add("display-block"),mapPopup.classList.add("modal-show"))}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapOverlay.classList.contains("display-block")&&mapPopup.classList.contains("modal-show")&&(mapOverlay.classList.remove("display-block"),mapPopup.classList.remove("modal-show"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapOverlay.classList.contains("display-block")&&mapPopup.classList.contains("modal-show")&&(mapOverlay.classList.remove("display-block"),mapPopup.classList.remove("modal-show")))});var mainSlides=document.querySelector(".main-slides"),slider=mainSlides.querySelector(".slides-list"),button1=mainSlides.querySelector(".slides-btn-1"),button2=mainSlides.querySelector(".slides-btn-2"),button3=mainSlides.querySelector(".slides-btn-3");button1.addEventListener("click",function(e){e.preventDefault(),button1.classList.contains("slides-btn-active")||button1.classList.add("slides-btn-active"),button2.classList.contains("slides-btn-active")&&button2.classList.remove("slides-btn-active"),button3.classList.contains("slides-btn-active")&&button3.classList.remove("slides-btn-active"),slider.classList.contains("slide-1")||slider.classList.add("slide-1"),slider.classList.contains("slide-2")&&slider.classList.remove("slide-2"),slider.classList.contains("slide-3")&&slider.classList.remove("slide-3")}),button2.addEventListener("click",function(e){e.preventDefault(),button2.classList.contains("slides-btn-active")||button2.classList.add("slides-btn-active"),button1.classList.contains("slides-btn-active")&&button1.classList.remove("slides-btn-active"),button3.classList.contains("slides-btn-active")&&button3.classList.remove("slides-btn-active"),slider.classList.contains("slide-2")||slider.classList.add("slide-2"),slider.classList.contains("slide-1")&&slider.classList.remove("slide-1"),slider.classList.contains("slide-3")&&slider.classList.remove("slide-3")}),button3.addEventListener("click",function(e){e.preventDefault(),button3.classList.contains("slides-btn-active")||button3.classList.add("slides-btn-active"),button1.classList.contains("slides-btn-active")&&button1.classList.remove("slides-btn-active"),button2.classList.contains("slides-btn-active")&&button2.classList.remove("slides-btn-active"),slider.classList.contains("slide-3")||slider.classList.add("slide-3"),slider.classList.contains("slide-1")&&slider.classList.remove("slide-1"),slider.classList.contains("slide-2")&&slider.classList.remove("slide-2")});var services=document.querySelector(".services"),servicesButton1=services.querySelector(".services-btn-1"),servicesButton2=services.querySelector(".services-btn-2"),servicesButton3=services.querySelector(".services-btn-3"),delivery=services.querySelector(".delivery"),warranty=services.querySelector(".warranty"),credit=services.querySelector(".credit");servicesButton1.addEventListener("click",function(e){e.preventDefault(),servicesButton1.classList.contains("services-btn-active")||servicesButton1.classList.add("services-btn-active"),servicesButton2.classList.contains("services-btn-active")&&servicesButton2.classList.remove("services-btn-active"),servicesButton3.classList.contains("services-btn-active")&&servicesButton3.classList.remove("services-btn-active"),delivery.classList.contains("services-active")||delivery.classList.add("services-active"),warranty.classList.contains("services-active")&&warranty.classList.remove("services-active"),credit.classList.contains("services-active")&&credit.classList.remove("services-active")}),servicesButton2.addEventListener("click",function(e){e.preventDefault(),servicesButton2.classList.contains("services-btn-active")||servicesButton2.classList.add("services-btn-active"),servicesButton1.classList.contains("services-btn-active")&&servicesButton1.classList.remove("services-btn-active"),servicesButton3.classList.contains("services-btn-active")&&servicesButton3.classList.remove("services-btn-active"),warranty.classList.contains("services-active")||warranty.classList.add("services-active"),delivery.classList.contains("services-active")&&delivery.classList.remove("services-active"),credit.classList.contains("services-active")&&credit.classList.remove("services-active")}),servicesButton3.addEventListener("click",function(e){e.preventDefault(),servicesButton3.classList.contains("services-btn-active")||servicesButton3.classList.add("services-btn-active"),servicesButton1.classList.contains("services-btn-active")&&servicesButton1.classList.remove("services-btn-active"),servicesButton2.classList.contains("services-btn-active")&&servicesButton2.classList.remove("services-btn-active"),credit.classList.contains("services-active")||credit.classList.add("services-active"),delivery.classList.contains("services-active")&&delivery.classList.remove("services-active"),warranty.classList.contains("services-active")&&warranty.classList.remove("services-active")});