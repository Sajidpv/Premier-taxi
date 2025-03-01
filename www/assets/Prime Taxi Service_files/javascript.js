document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    const menuDrawer = mobileMenu.querySelector("div"); // The drawer inside
    const navLinks = mobileMenu.querySelectorAll(".nav-link"); // All nav links inside the drawer

    function closeDrawer() {
        menuDrawer.classList.add("translate-x-full");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300); // Delay hiding for smooth effect
    }

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        menuDrawer.classList.remove("translate-x-full");
    });

    closeMenu.addEventListener("click", closeDrawer);

    // Close menu when clicking outside the drawer
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            closeDrawer();
        }
    });

    // Close menu when clicking any navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", closeDrawer);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
