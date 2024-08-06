// Función para actualizar el precio mostrado y el precio almacenado en el botón
function actualizarPrecio(selectElemento) {
    var precio = parseFloat(selectElemento.options[selectElemento.selectedIndex].dataset.price) || 0;
    var contenedor = selectElemento.parentElement;
    contenedor.querySelector('.precio').innerText = precio.toFixed(2);
    var boton = contenedor.querySelector('.botonDeMenu');
    boton.dataset.price = precio.toFixed(2);
    boton.disabled = precio === 0;
}

// Event listener para los botones de agregar al carrito
document.querySelectorAll('.botonDeMenu').forEach(function(boton) {
    boton.addEventListener('click', function() {
        var nombre = boton.getAttribute('data-name');
        var precio = parseFloat(boton.getAttribute('data-price'));
        agregarAlCarrito(nombre, precio);
    });
});

// Event listener para cargar al inicio del documento
document.addEventListener('DOMContentLoaded', function () {
    const botonesDeMenu = document.querySelectorAll('.botonDeMenu');
    let total = 0;
    const totalElemento = document.getElementById('total');

    botonesDeMenu.forEach(boton => {
        boton.addEventListener('click', function () {
            const cantidad = parseInt(this.previousElementSibling.value);
            const precio = parseInt(this.dataset.price);

            if (!isNaN(cantidad) && cantidad > 0) {
                total += precio * cantidad;
                totalElemento.textContent = total.toFixed(2);
            }
        });
    });
});
