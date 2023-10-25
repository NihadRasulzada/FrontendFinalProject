let detail_tab_button1 = document.getElementById("detail_tab_button1");
let detail_tab_button2 = document.getElementById("detail_tab_button2");
let detail_tab_button3 = document.getElementById("detail_tab_button3");

let detail_tab_div1 = document.getElementById("detail_tab_div1");
let detail_tab_div2 = document.getElementById("detail_tab_div2");
let detail_tab_div3 = document.getElementById("detail_tab_div3");


function Detail_tab_button1_func() {
  if (!detail_tab_button1.classList.contains("about_tab_button_active")) {
    detail_tab_button1.classList.add('about_tab_button_active')
  }
  detail_tab_button2.classList.remove("about_tab_button_active");
  detail_tab_button3.classList.remove("about_tab_button_active");
  detail_tab_div1.classList.remove("hidden")
  if (!detail_tab_div2.classList.contains("hidden")) {
    detail_tab_div2.classList.add("hidden")
  }
  if (!detail_tab_div3.classList.contains("hidden")) {
    detail_tab_div3.classList.add("hidden")
  }
}
function Detail_tab_button2_func() {
  if (!detail_tab_button2.classList.contains("about_tab_button_active")) {
    detail_tab_button2.classList.add('about_tab_button_active')
  }
  detail_tab_button1.classList.remove("about_tab_button_active");
  detail_tab_button3.classList.remove("about_tab_button_active");
  detail_tab_div2.classList.remove("hidden")
  if (!detail_tab_div1.classList.contains("hidden")) {
    detail_tab_div1.classList.add("hidden")
  }
  if (!detail_tab_div3.classList.contains("hidden")) {
    detail_tab_div3.classList.add("hidden")
  }
}
function Detail_tab_button3_func() {
  if (!detail_tab_button3.classList.contains("about_tab_button_active")) {
    detail_tab_button3.classList.add('about_tab_button_active')
  }
  detail_tab_button2.classList.remove("about_tab_button_active");
  detail_tab_button1.classList.remove("about_tab_button_active");
  detail_tab_div3.classList.remove("hidden")
  if (!detail_tab_div2.classList.contains("hidden")) {
    detail_tab_div2.classList.add("hidden")
  }
  if (!detail_tab_div1.classList.contains("hidden")) {
    detail_tab_div1.classList.add("hidden")
  }
}