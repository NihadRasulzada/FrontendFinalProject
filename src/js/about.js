let about_tab_button1 = document.getElementById("about_tab_button1");
let about_tab_button2 = document.getElementById("about_tab_button2");
let about_tab_button3 = document.getElementById("about_tab_button3");

let about_tab_text1 = document.getElementById("about_tab_text1");
let about_tab_text2 = document.getElementById("about_tab_text2");
let about_tab_text3 = document.getElementById("about_tab_text3");


function About_tab_button1_func() {
  if (!about_tab_button1.classList.contains("about_tab_button_active")) {
    about_tab_button1.classList.add('about_tab_button_active')
  }
  about_tab_button2.classList.remove("about_tab_button_active");
  about_tab_button3.classList.remove("about_tab_button_active");
  about_tab_text1.classList.remove("hidden")
  if (!about_tab_text2.classList.contains("hidden")) {
    about_tab_text2.classList.add("hidden")
  }
  if (!about_tab_text3.classList.contains("hidden")) {
    about_tab_text3.classList.add("hidden")
  }
}
function About_tab_button2_func() {
  if (!about_tab_button2.classList.contains("about_tab_button_active")) {
    about_tab_button2.classList.add('about_tab_button_active')
  }
  about_tab_button1.classList.remove("about_tab_button_active");
  about_tab_button3.classList.remove("about_tab_button_active");
  about_tab_text2.classList.remove("hidden")
  if (!about_tab_text1.classList.contains("hidden")) {
    about_tab_text1.classList.add("hidden")
  }
  if (!about_tab_text3.classList.contains("hidden")) {
    about_tab_text3.classList.add("hidden")
  }
}
function About_tab_button3_func() {
  if (!about_tab_button3.classList.contains("about_tab_button_active")) {
    about_tab_button3.classList.add('about_tab_button_active')
  }
  about_tab_button2.classList.remove("about_tab_button_active");
  about_tab_button1.classList.remove("about_tab_button_active");
  about_tab_text3.classList.remove("hidden")
  if (!about_tab_text2.classList.contains("hidden")) {
    about_tab_text2.classList.add("hidden")
  }
  if (!about_tab_text1.classList.contains("hidden")) {
    about_tab_text1.classList.add("hidden")
  }
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});