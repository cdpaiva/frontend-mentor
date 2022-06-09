const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")

function toggleMenu() {
    if(menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu")
        openMenu.style.display = "block"
        closeMenu.style.display = "none"
    } else {
        menu.classList.add("show-menu")
        openMenu.style.display = "none"
        closeMenu.style.display = "block"
    }
}

hamburger.addEventListener("click", toggleMenu)