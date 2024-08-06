document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('opinionForm');
  const fechaInput = document.getElementById('fecha');

  // Establecer la fecha actual automáticamente
  const hoy = new Date().toISOString().split('T')[0];
  fechaInput.value = hoy;

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const comentario = document.getElementById('comentario').value;
      const valoracion = document.getElementById('valoracion').value;
      const fecha = fechaInput.value;

      fetch('http://localhost:5000/comentarios', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              nombre,
              comentario,
              valoracion,
              fecha,
          }),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          alert(data.message);
          form.reset();
          fechaInput.value = hoy; // Restablecer la fecha actual
      })
      .catch(error => console.error('Error:', error));
  });
});
