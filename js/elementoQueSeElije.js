document.addEventListener("DOMContentLoaded", function () {
    const botonesAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');

    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener("click", function () {
            const nombreHamburguesa = this.getAttribute("data-name");
            const precioBase = parseInt(this.getAttribute("data-price"));
            const cantidad = parseInt(this.closest('.MenuDeTexto').querySelector('.cantidad').value);
            const guarnicionSeleccionada = this.closest('.MenuDeTexto').querySelector('.guarnicionDeMilaYHambu').value;
            
            // Calcular precio total con la guarnición
            let precioGuarnicion = 0;
            switch (guarnicionSeleccionada) {
                case 'papa frita':
                    precioGuarnicion = 0;
                    break;
                case 'puré mixto':
                    precioGuarnicion = 0;
                    break;
                case 'papa':
                    precioGuarnicion = 0;
                    break;
                case 'papa al horno':
                    precioGuarnicion = 0;
                    break;
                case 'ensalada de tomate y lechuga':
                    precioGuarnicion = 0;
                    break;
                default:
                    break;
            }

            const precioTotal = precioBase + precioGuarnicion;

            // Agregar al carrito
            agregarAlCarrito(nombreHamburguesa, precioTotal, cantidad);
        });
    });

});
