// Función para mostrar u ocultar las opciones de té
function mostrarTe(idTe) {
    const te = document.getElementById(idTe);
    if (te) {
        te.classList.toggle('oculto');
    } else {
        console.error(`Elemento con id ${idTe} no encontrado.`);
    }
}

// Función para agregar al carrito según el té seleccionado
function agregarAlCarrito(event) {
    const nombreTe = event.target.getAttribute('data-name');
    if (!nombreTe) {
        console.error('Nombre de té no encontrado.');
        return;
    }

    const cantidadInput = document.querySelector(`#${nombreTe} .cantidad`);
    if (!cantidadInput) {
        console.error(`Cantidad input no encontrado para ${nombreTe}`);
        return;
    }

    const cantidad = parseInt(cantidadInput.value);
    const precioUnitario = obtenerPrecioUnitario(nombreTe);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Selecciona una cantidad válida.');
        return;
    }

    if (precioUnitario <= 0) {
        console.error(`Precio unitario no válido para ${nombreTe}`);
        return;
    }

    const precioTotal = cantidad * precioUnitario;
    // Aquí puedes manejar la lógica para agregar al carrito o realizar alguna acción con el precio total
    console.log(`Se agregó al carrito: ${nombreTe}, Cantidad: ${cantidad}, Precio total: ${precioTotal}`);
}

// Función auxiliar para obtener el precio unitario del té seleccionado
function obtenerPrecioUnitario(nombreTe) {
    const precios = {
        // Tés clásicos
        'Té Negro': 1800,
        'Té Verde': 1800,
        'Té Oolong': 1800,
        'Té Blanco': 1800,
        'Té Prensado': 1800,
        'Té de Japón (Sencha)': 2500, // Tés especiales
        'Té Sweet Vanilla': 2500,
        'Té Rooibos': 2500,
        'Té Pu-erh': 2500,
        'Indian Chai': 2500,
        // Añade más tés especiales aquí
    };

    // Verificar si el té está en la lista de tés clásicos
    if (precios.hasOwnProperty(nombreTe) && Object.keys(precios).indexOf(nombreTe) < 6) {
        return precios[nombreTe]; // Precio para té clásico
    } else {
        return precios[nombreTe] || 0; // Precio para té especial
    }
}

// Añadir eventos a los botones para agregar al carrito
document.querySelectorAll('.botonDeMenu').forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Añadir eventos a los botones para mostrar las opciones de té
document.querySelectorAll('.mostrarTeBoton').forEach(boton => {
    boton.addEventListener('click', event => {
        const idTe = event.target.getAttribute('data-te-id');
        if (idTe) {
            mostrarTe(idTe);
        } else {
            console.error('ID de té no encontrado en el botón.');
        }
    });
});
