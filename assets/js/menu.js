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
    });