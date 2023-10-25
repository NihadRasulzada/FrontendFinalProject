let nav_menu = document.getElementById("nav_menu");
let nav_sidebar_menu = document.getElementById("nav_sidebar_menu");

let isNavSidebarMenuOpen = false;

function ToggleSidebarMenu () {

  if (isNavSidebarMenuOpen) {
    CloseSidebarMenu();
    isNavSidebarMenuOpen = false;
  } else {
    OpenSidebarMenu();
    isNavSidebarMenuOpen = true;
  }
}

function OpenSidebarMenu() {
  nav_sidebar_menu.classList.remove("right-[-500px]");
  nav_sidebar_menu.classList.add("right-0");
}

function CloseSidebarMenu() {
  nav_sidebar_menu.classList.add("right-[-500px]");
  nav_sidebar_menu.classList.remove("right-0");

}