// PORTFOLIO ----- CARRUSEL 
const slider = document.querySelector('.carrusel-slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Función para desplazar el carrusel
const slide = (direction) => {
    const slideWidth = slider.clientWidth;
    if (direction === 'next') {
        slider.scrollLeft += slideWidth;
    } else {
        slider.scrollLeft -= slideWidth;
    }
}

// Eventos para las flechas
next.addEventListener('click', (e) => {
    e.preventDefault();
    slide('next');
});

prev.addEventListener('click', (e) => {
    e.preventDefault();
    slide('prev');
});


// PORTFOLIO ----- FOTOS VIDEOJUEGO
const modal = document.getElementById("modalImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".captura img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        imagenAmpliada.src = this.src; 
        document.body.style.overflow = "hidden";
    });
});

cerrar.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";  // Aquí agregamos la restauración del scroll
    }
});