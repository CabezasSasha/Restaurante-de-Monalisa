document.addEventListener('DOMContentLoaded', function() {
    var formularioComentario = document.getElementById('formularioComentario');
    formularioComentario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario
        
        // Obtener los datos del formulario
        var nombre = document.getElementById('nombre').value;
        var comentario = document.getElementById('comentario').value;
        var valoracion = document.getElementById('valoracion').value;
        var fecha = document.getElementById('fecha').value;
        
        // Crear un objeto con los datos del formulario
        var comentarioData = {
            nombre: nombre,
            comentario: comentario,
            valoracion: valoracion,
            fecha: fecha
        };
        
        // Simulación de envío AJAX (en este caso a Formspree)
        fetch('https://formspree.io/f/mdobaybw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentarioData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta recibida:', data);
            
            // Agregar la nueva opinión al contenedor de opiniones
            var contenedorOpiniones = document.querySelector('.contenedorOpiniones');
            var nuevaOpinion = document.createElement('div');
            nuevaOpinion.classList.add('opinion');
            nuevaOpinion.innerHTML = `
                <h3 class="nombreCliente">${nombre}</h3>
                <p class="comentarioCliente">${comentario}</p>
                <p class="valoracionCliente">${generarIconos(valoracion)}</p>
                <p class="fechaCliente">Fecha: ${fecha}</p>
            `;
            contenedorOpiniones.prepend(nuevaOpinion);
            
            // Limpiar el formulario después de enviar la opinión
            formularioComentario.reset();
        })
        .catch(error => console.error('Error al enviar el formulario:', error));
    });
    
    // Función auxiliar para generar los iconos de valoración
    function generarIconos(valoracion) {
        var iconos = '';
        for (var i = 0; i < valoracion; i++) {
            iconos += '⭐';
        }
        return iconos;
    }
});
