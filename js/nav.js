// JavaScript para cerrar el menú desplegable al hacer clic fuera de él
document.addEventListener('click', function (event) {
    var dropdowns = document.getElementsByClassName('Menu');
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && !openDropdown.parentElement.contains(event.target)) {
            openDropdown.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const botonesDeMenu = document.querySelectorAll('.botonDeMenu');
    botonesDeMenu.forEach(boton => {
        boton.addEventListener('click', function () {
            const nombreSeccion = this.getAttribute('data-name');
            const seccion = document.getElementById(nombreSeccion);
            seccion.scrollIntoView({ behavior: 'smooth' });
        });
    });
});