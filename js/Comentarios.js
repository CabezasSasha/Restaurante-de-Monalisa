document.addEventListener('DOMContentLoaded', function() {
  cargarComentarios();
});

function cargarComentarios() {
  fetch('http://localhost:5001/comentarios')
  .then(response => response.json())
  .then(data => {
      const tbody = document.getElementById('comentariosTableBody');
      tbody.innerHTML = '';
      data.forEach(comentario => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td class='TextoDeTabla'>${comentario.nombre}</td>
              <td class='TextoDeTabla'>${comentario.comentario}</td>
              <td class='TextoDeTabla'>${comentario.valoracion}</td>
              <td class='TextoDeTabla'>${new Date(comentario.fecha).toLocaleDateString()}</td>
          `;
          tbody.appendChild(tr);
      });
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}