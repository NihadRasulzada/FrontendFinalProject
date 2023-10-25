let cartitems_contaier = document.getElementById("cartitems_contaier");

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

async function processData(e) {
  //e.preventDefault();
  try {
    const apiUrl = 'http://localhost:3001/products';
    const responseData = await fetchData(apiUrl);

    const dataArray = responseData;
    
    dataArray.forEach(item => {
      if(item.cartQuantity > 0){
        isCartEmpty = false;
        cartitems_contaier.innerHTML += `
          <div class="py-6 flex justify-between items-center border-b border-[#92929270]">
            <div class="flex items-center">
              <button onclick="UpdateProductCount(${item.id} , 0)" class="mr-3 p-1 text-[#929292] transition-all hover:text-[#080808]">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <img class="w-[92px] hidden md:block h-[112px] object-cover" src="${item.img}" alt="">
              <h5 class="text-[#080808] uppercase tracking-wide text-xs md:text-base  md:ml-6">${item.title}</h5>
            </div>
            <p class="font-montserrat text-xs md:text-base text-[#929292]">$${item.price}</p>
            <div class="flex items-center gap-4">
              <div class="flex items-center justify-between p-4  w-[150px] md:w-[194px] border border-[#92929270]">
                <span class="text-[#929292] text-sm uppercase">QUANTITY</span>
                <div class="flex items-center gap-3 text-[#929292]">
                  <button onclick="UpdateProductCount(${item.id} ,${item.cartQuantity - 1})">
                    <i class="fa-solid fa-caret-left"></i>
                  </button>
                  <span>${item.cartQuantity}</span>
                  <button onclick="UpdateProductCount(${item.id} ,${item.cartQuantity + 1})">
                    <i class="fa-solid fa-caret-right"></i>
                  </button>
                </div>
              </div>
              <p class="font-montserrat text-xs md:text-base text-[#929292]">$${item.cartQuantity * item.price}</p>
            </div>
          </div>
          `
      } 
    });
  } catch (error) {
    console.error('Error:', error);
  }
}


  processData();