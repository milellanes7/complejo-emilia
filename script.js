document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".info-section");

    function handleScroll() {
        const sectionTop = section.getBoundingClientRect().top; 
        const screenBottom = window.innerHeight; 

        if (sectionTop < screenBottom) {
            section.classList.add("visible"); 
            window.removeEventListener("scroll", handleScroll); // Elimina el listener una vez animado
        }
    }

    window.addEventListener("scroll", handleScroll); 
});