document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. HAMBURGER MENU (Για τα κινητά)
    // ==========================================
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-links a");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });

        links.forEach(link => {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
            });
        });
    }

    // ==========================================
    // 2. COOKIE BANNER (Μήνυμα GDPR)
    // ==========================================
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (cookieBanner && acceptBtn) {
        // Ελέγχει αν ο χρήστης το έχει ήδη πατήσει στο παρελθόν
        if (!localStorage.getItem("cookiesAccepted")) {
            setTimeout(() => {
                cookieBanner.classList.add("show");
            }, 1000);
        }

        // Όταν πατήσει το κουμπί "Κατανοητό"
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.classList.remove("show");
        });
    }
});

// ==========================================
// 3. ΕΝΑΛΛΑΓΗ ΜΕΝΟΥ (Tabs Φαγητού / Ποτών)
// ==========================================
function openMenu(menuName, event) {
    const foodMenu = document.getElementById('food');
    const drinksMenu = document.getElementById('drinks');

    if (foodMenu && drinksMenu) {
        // Κρύβει όλα τα μενού
        foodMenu.style.display = "none";
        drinksMenu.style.display = "none";

        // Αφαιρεί το χρώμα από τα κουμπιά
        let buttons = document.getElementsByClassName('tab-btn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }

        // Εμφανίζει το σωστό μενού και χρωματίζει το κουμπί
        document.getElementById(menuName).style.display = "block";
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
    }
}
