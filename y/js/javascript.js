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


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        let pickup = document.querySelector('input[placeholder="Enter pickup address"]').value;
        let dropoff = document.querySelector('input[placeholder="Enter destination"]').value;
        let date = document.querySelector('input[type="date"]').value;
        let time = document.querySelector('input[type="time"]').value;
        let vehicle = document.getElementById("vehicle").value;

        // Format message
        let message = `🚖 *New Taxi Booking* 🚖\n\n📍 Pickup: ${pickup}\n📍 Drop-off: ${dropoff}\n📅 Date: ${date}\n⏰ Time: ${time}\n🚗 Vehicle: ${vehicle}\n\n📲 *Book Now!*`;

        // Replace with your WhatsApp number (including country code)
        let whatsappNumber = "+919809016464"; // Example: +91 9809016464

        // Encode message for URL
        let encodedMessage = encodeURIComponent(message);

        // Redirect to WhatsApp
        window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendButton").addEventListener("click", function () {
      var name = document.getElementById("name").value;
      var mobile = document.getElementById("mobile").value;
      var message = document.getElementById("message").value;
  
      if (name === "" || mobile === "" || message === "") {
        alert("Please fill in all fields");
        return;
      }
      let whatsappNumber = "+919809016464"; // Example: +91 9809016464

      var whatsappMessage = `Hello, my name is ${name}. \nIam looking for a ride. Please contact via ${mobile}, Let\'s connect.\nMessage: ${message}`;
      var whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  
      window.open(whatsappURL, "_blank");
    });
  });
  
