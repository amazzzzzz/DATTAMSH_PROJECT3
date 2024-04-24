const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".order__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event__content", {
    duration: 1000,
});

const bookButton = document.querySelector(".price button");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");

bookButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};