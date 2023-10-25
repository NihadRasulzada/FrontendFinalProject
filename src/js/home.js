var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper2", {
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

let home_products_categories = document.getElementById("home_products_categories");
let home_products_categories_button = document.getElementById("home_products_categories_button");

let IsHomeProductsCategoriesDropdownOpen = false;
function HomeProductsCategoriesDropdown() {
  home_products_categories_button.classList.toggle('rotate-90')
  if (!IsHomeProductsCategoriesDropdownOpen) {
    home_products_categories.classList.remove("h-0")
    home_products_categories.classList.add("h-auto");
    IsHomeProductsCategoriesDropdownOpen = true;
  } else {
    home_products_categories.classList.remove("h-auto");
    home_products_categories.classList.add("h-0")
    IsHomeProductsCategoriesDropdownOpen = false;
  }
}

let productDetailModal = document.getElementById("productDetailModal");
function OpenProductModal() {
  productDetailModal.classList.remove("hidden");
  productDetailModal.classList.add("flex")
}
function CloseProductModal() {
  productDetailModal.classList.add("hidden");
  productDetailModal.classList.remove("flex")
}


let home_products_container = document.getElementById("home_products_container");
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function processData() {

  try {
    const apiUrl = 'http://localhost:3001/products';
    const responseData = await fetchData(apiUrl);

    const dataArray = responseData;

    dataArray.forEach(item => {
      home_products_container.innerHTML += `
        <div class="px-[25px] pb-[50px] group w-[287px] overflow-hidden relative">
          ${item.isNew ? `<div class="absolute z-[5] top-4 left-10 uppercase tracking-wide text-[#080808]">NEW</div>` : ""}  
        <div class="absolute ">
          </div>
          <div class="w-[237px] h-[288px] overflow-hidden relative">
            <img src="${item?.img}" class="w-[237px] h-[288px] object-cover" alt="">
            <div class="absolute left-[53px] translate-y-[150px] group-hover:translate-y-[-26px] transition-all  h-[26px] w-[130px] bg-black text-white flex items-center justify-between pl-4">
              <button onclick=OpenProductModal() class="text-xs">QUICK LOOK</button>
              <div class="w-[26px] h-[26px] bg-[#929292] text-white flex justify-center items-center"><i class="fa-solid fa-heart"></i></div>
            </div>
          </div>
          <h3 class="text-sm text-[#080808] text-center font-semibold mt-4 uppercase tracking-wide">${item.title}</h3>
          <div class="h-[24px] relative">
            <p class="w-full text-center absolute group-hover:translate-x-[200px] transition-all duration-300 text-sm text-[#929292]  font-montserrat mt-4">$ ${item.price}</p>
            <button onclick="UpdateProductCount(${item.id} ,${item.cartQuantity + 1})" class="absolute translate-x-[-200px] group-hover:left-1/2 duration-300 group-hover:translate-x-[-50%]  transition-all tracking-wide font-semibold text-xs text-[#929292] font-montserrat mt-4">ADD TO CART</button>
          </div>
        </div>
      `
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();




