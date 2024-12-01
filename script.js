function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btnLearnM a");
    const whySection = document.querySelector(".why");

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the "why" section smoothly
        whySection.scrollIntoView({ behavior: "smooth" });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});