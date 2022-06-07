const menu = document.querySelector(".menu-items")
const hamburger = document.querySelector(".hamburger")
const openMenu = document.querySelector(".openMenu")
const closeMenu = document.querySelector(".closeMenu")

function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu")
        openMenu.style.display = "block"
        closeMenu.style.display = "none"
    } else {
        menu.classList.add("showMenu")
        openMenu.style.display = "none"
        closeMenu.style.display = "block"
    }
}

hamburger.addEventListener("click", toggleMenu)