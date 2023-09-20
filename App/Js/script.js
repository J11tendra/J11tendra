const hamburger_btn = document.querySelector(".nav__toggle");
const mobile_menu = document.querySelector(".menu-bg");
const body = document.querySelector("body");

hamburger_btn.addEventListener('click', function() {
    if (hamburger_btn.classList.contains("open")) {
        mobile_menu.classList.remove("slide-in");
        mobile_menu.classList.add("slide-out");
        hamburger_btn.classList.add("close");
        hamburger_btn.classList.remove("open");
        body.classList.remove("no-scroll");
    }
    else {
        mobile_menu.classList.remove("slide-out");
        mobile_menu.classList.add("slide-in");
        hamburger_btn.classList.remove("close");
        hamburger_btn.classList.add("open");
        body.classList.add("no-scroll");

    }
})