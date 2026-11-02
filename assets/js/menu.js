 document.addEventListener('DOMContentLoaded', () => {
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');

        if (navContainer && navLinks) {
            // Crea il bottone e disegna le 3 linee (i 3 span) in automatico
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'menu-toggle';
            toggleBtn.setAttribute('aria-label', 'Menu');
            toggleBtn.innerHTML = '<span></span><span></span><span></span>';
            
            navContainer.appendChild(toggleBtn);

            // Al click apre/chiude il menu e trasforma le linee in "X"
            toggleBtn.addEventListener('click', () => {
                toggleBtn.classList.toggle('is-active');
                navLinks.classList.toggle('is-open');
            });
        }
 

    const counters = document.querySelectorAll(".stat-number");
    const speed = 50;

    const runCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        
        const updateCount = () => {
            const inc = target / speed;
            count += inc;

            if (count < target) {
                counter.innerText = Math.ceil(count) + "+";
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});