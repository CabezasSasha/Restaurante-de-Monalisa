  // Seleccionar el contenedor del carrito y el total
const carrito = document.getElementById('cart');
const totalCarrito = document.getElementById('total');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const botonesAgregar = document.querySelectorAll('.botonDeProducto');
const carritoDetallado = document.getElementById('carrito-detallado');
const openCartBtn = document.getElementById('open-cart-btn');


botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Función para mostrar el carrito detallado
function mostrarCarritoDetallado() {
    const carritoDetallado = document.getElementById('carrito-detallado');
    carritoDetallado.style.display = 'flex'; // Mostrar el carrito detallado
}

// Función para ocultar el carrito detallado
function ocultarCarritoDetallado() {
    const carritoDetallado = document.getElementById('carrito-detallado');
    carritoDetallado.style.display = 'none'; // Ocultar el carrito detallado
}
// Contador inicial de productos en el carrito
let contadorProductos = 0;

// Función para agregar al carrito
function agregarAlCarrito(event) {
    event.preventDefault();

    const nombre = event.target.getAttribute('data-name');
    const precio = parseInt(event.target.getAttribute('data-price'));
    const cantidad = parseInt(event.target.parentElement.querySelector('.cantidad').value);

    // Crear un nuevo elemento de lista para el carrito
    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = `${nombre} x${cantidad} - $${precio * cantidad}`;

    // Agregar el nuevo item al carrito
    carrito.appendChild(nuevoItem);

    // Calcular y actualizar el total
    actualizarTotal(precio * cantidad);

    // Incrementar el contador de productos
    contadorProductos += cantidad;

    // Actualizar la cantidad en el icono de carrito
    cartCount.innerText = contadorProductos;

    // Animación de sacudida del icono de carrito
    cartIcon.classList.add('shake');

    // Remover la clase de sacudida después de 500ms
    setTimeout(() => {
        cartIcon.classList.remove('shake');
    }, 500);
}

// Función para actualizar el total del carrito
function actualizarTotal(precioProducto) {
    // Obtener el total actual
    let totalActual = parseFloat(totalCarrito.innerText);

    // Sumar el precio del producto al total
    totalActual += precioProducto;

    // Actualizar el total en el HTML
    totalCarrito.innerText = totalActual.toFixed(2);
}

// Función para simular la compra (puedes implementar la lógica de compra real aquí)
function comprar() {
    alert('Compra realizada!');

 // Reiniciar el carrito
 carrito.innerHTML = ''; 
 totalCarrito.innerText = '0.00'; 
 contadorProductos = 0; 
 cartCount.innerText = contadorProductos; 
}

// Función para mostrar el carrito detallado
function mostrarCarritoDetallado() {
    carritoDetallado.style.display = 'block'; 
}


// Función para ocultar el carrito detallado
function ocultarCarritoDetallado() {
    carritoDetallado.style.display = 'none'; 
}

