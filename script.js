const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

function fixNav() {
    if(window.scrollY > header.offsetHeight + 150) {
        header.classList.add("toggle");
    }
    else {
        header.classList.remove("toggle");
    }
}

window.addEventListener("scroll", fixNav);

