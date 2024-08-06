   // Detectar el ancho de pantalla inicialmente
   const viewportWidth = window.innerWidth;

   // Función para habilitar el desplazamiento horizontal en .GrupoDeProducto si es necesario
   function habilitarDesplazamientoHorizontal() {
       const GrupoDeProducto = document.querySelector('.GrupoDeProducto');

       // Verificar si el ancho de la pantalla es menor o igual a 480px
       if (viewportWidth <= 480) {
           GrupoDeProducto.classList.add('scroll-horizontally');
       } else {
           GrupoDeProducto.classList.remove('scroll-horizontally');
       }
   }

   // Ejecutar la función al cargar la página y cuando cambie el tamaño de la ventana
   document.addEventListener('DOMContentLoaded', habilitarDesplazamientoHorizontal);
   window.addEventListener('resize', habilitarDesplazamientoHorizontal);