document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".micro-project-section");
    const navItems = document.querySelectorAll(".project-nav-menu .nav-item");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === "#" + current) {
                item.classList.add("active");
            }
        });
    });
});