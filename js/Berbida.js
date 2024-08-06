// Función para mostrar u ocultar las opciones de bebida
function mostrarBebida(idBebida) {
    var bebida = document.getElementById(idBebida);
    bebida.style.display = bebida.style.display === "block" ? "none" : "block";
  }
  
  // Función para actualizar los tamaños según el tipo de bebida seleccionado (compacta)
  function actualizarTamaños(selectTipo, idSelectTamaño) {
    var tipo = selectTipo.value;
    var selectTamaño = document.getElementById(idSelectTamaño);
    var opciones = [];
  
    // Verifica si es bebida alcohólica o sin alcohol y obtiene las opciones de tamaños y precios
    if (opcionesTamañosAlcohol(tipo).length > 0) {
        opciones = opcionesTamañosAlcohol(tipo);
    } else {
        opciones = opcionesTamañosSinAlcohol(tipo);
    }
  
    // Actualiza el select de tamaños con las opciones obtenidas
    selectTamaño.innerHTML = '<option value="">Seleccione tamaño</option>';
    opciones.forEach(function(opcion) {
        var opt = document.createElement('option');
        opt.value = opcion.nombre;
        opt.textContent = opcion.nombre + ' - $' + opcion.precio + ' ARS';
        opt.dataset.price = opcion.precio;
        selectTamaño.appendChild(opt);
    });
  
    selectTamaño.disabled = opciones.length === 0;
    actualizarPrecio(selectTamaño);
  }
  
  // Función para actualizar el precio
  function actualizarPrecio(tamanioSelect) {
    var precio = 0;
    var opcionSeleccionada = tamanioSelect.options[tamanioSelect.selectedIndex];
    if (opcionSeleccionada) {
        precio = parseInt(opcionSeleccionada.dataset.price) || 0;
    }
    var contenedor = tamanioSelect.closest('div');
    var precioElement = contenedor.querySelector('.precio');
    precioElement.textContent = precio;
    var boton = contenedor.querySelector('.botonDeMenu');
    boton.disabled = precio === 0;
    boton.dataset.price = precio;
  }
  
  // Función para deshabilitar opciones de bebidas sin alcohol
  function deshabilitarSinAlcohol(select) {
    var bebidasSinAlcohol = document.querySelectorAll('#bebidasSinAlcohol select, #bebidasSinAlcohol button');
    bebidasSinAlcohol.forEach(function(element) {
        element.disabled = select.value !== '';
    });
  }
  
  // Función para deshabilitar opciones de bebidas con alcohol
  function deshabilitarConAlcohol(select) {
    var bebidasConAlcohol = document.querySelectorAll('#bebidasConAlcohol select, #bebidasConAlcohol button');
    bebidasConAlcohol.forEach(function(element) {
        element.disabled = select.value !== '';
    });
  }
  
  // Función para mostrar u ocultar nota
  function toggleVisibility() {
    var notas = document.querySelectorAll('.ParrafoDeNota');
    notas.forEach(function(nota) {
        nota.style.display = nota.style.display === 'block' ? 'none' : 'block';
    });
  }
  
// Función para manejar las opciones de tamaños y precios para bebidas alcohólicas
function opcionesTamañosAlcohol(tipo) {
    switch (tipo) {
      case "Vino Tinto":
      case "Vino Blanco":
      case "Vino Rosado":
        return [
          { nombre: "Botella 750ml", precio: 8000 },
          { nombre: "Botella 1L", precio: 9500 },
        ];
      case "Lager":
      case "IPA":
      case "Stout":
      case "Pilsner":
      case "Porter":
      case "Wheat":
        return [
          { nombre: "Lata 355ml", precio: 4000 },
          { nombre: "Botella 500ml", precio: 4500 },
          { nombre: "Botella 1L", precio: 5500 },
        ];
      case "Fernet con Coca":
      case "Caipirinha":
      case "Mojito":
      case "Negroni":
      case "Margarita":
      case "Piña Colada":
      case "Campari con Naranja":
      case "Vermú":
      case "Gancia con Limón":
      case "Gin Tonic":
      case "Whisky Soda":
      case "Caipiroska":
      case "Moscow Mule":
      case "Daiquiri":
      case "Sour":
      case "Aperol Spritz":
      case "Americano":
      case "Sbagliato":
      case "Bellini":
      case "Mimosa":
        return [
          { nombre: "Vaso 300ml", precio: 4000 },
          { nombre: "Vaso 500ml", precio: 4850 },
        ];
      case "Brut":
      case "Demi-Sec":
      case "Rosé":
        return [
          { nombre: "Botella 750ml", precio: 10000 },
          { nombre: "Botella 1L", precio: 15000 },
        ];
      default:
        return [];
    }
}
// Función para manejar las opciones de tamaños y precios para bebidas sin alcohol
function opcionesTamañosSinAlcohol(tipo) {
    switch (tipo) {
      case "Coca-Cola Zero":
      case "Coca-Cola Light":
      case "Coca-Cola Común":
        return [
          { nombre: "Lata 355ml", precio: 4500 },
          { nombre: "Botella 500ml", precio: 7200 },
          { nombre: "Botella 1L", precio: 10800 },
        ];
  
      case "Spray Zero":
      case "Spray Común":
        return [
          { nombre: "Lata 355ml", precio: 4000 },
          { nombre: "Botella 500ml", precio: 7000 },
          { nombre: "Botella 1L", precio: 11000 },
        ];
  
      case "Manzana":
      case "Naranja":
      case "Pera":
      case "Limonada":
      case "Pomelo":
      case "Pomelo rosado":
      case "Uva":
      case "Multifruta":
        return [
          { nombre: "Botella 500ml", precio: 9000 },
          { nombre: "Botella 1L", precio: 16200 },
        ];
  
      case "Agua con Gas":
      case "Agua sin Gas":
        return {
          "Agua con Gas": [
            { nombre: "Botella 500ml", precio: 9000 },
            { nombre: "Botella 1L", precio: 16000 },
          ],
        };
      default:
        return [];
    }
  }
  
  