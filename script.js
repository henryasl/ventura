document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de "Fade-In" al cargar la página
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((element, index) => {
        // Aplica un retraso (delay) diferente a cada elemento
        // para un efecto de "entrada escalonada" (Staggered Effect)
        element.style.animationDelay = `${index * 0.1}s`; 
        // El 'forwards' en CSS asegura que el estilo final de la animación se mantenga
        // (que la opacidad sea 1)
    });

    // 2. Observer para animar elementos al hacer scroll (opcional, pero mejora la UX)
    // Esto es útil si el usuario no ve el elemento al cargar la página.
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, lo animamos
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejamos de observarlo
            }
        });
    }, {
        rootMargin: '0px', // Por defecto
        threshold: 0.1 // Activarse cuando el 10% del elemento es visible
    });

    // Añade la clase 'visible' cuando el elemento entre en el viewport
    // (Añadirías esta clase 'visible' a los estilos CSS si quieres un efecto distinto,
    // pero para este ejemplo, ya usamos .fade-in con el delay de arriba).
    // Si quieres un *segundo* efecto de scroll:
    // fadeElements.forEach(element => {
    //     observer.observe(element);
    // });
    
    // NOTA: Para este diseño, el código CSS del `fade-in` y el `animationDelay`
    // en JS ya generan un buen efecto de entrada al cargar.
});