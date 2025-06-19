let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      // Extraer el valor numérico del precio
      const precioNumerico = parseFloat(
        producto.precio.toString().replace(/[^\d.]/g, "")
      );
      const subtotal = precioNumerico * producto.cantidad;
      div.innerHTML = `
          <img  class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="carrito-producto-nombre">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
          </div>
          <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
          </div>
          <div class="carrito-producto-precio">
              <small>Precio</small>
              <p>${producto.precio}</p>
          </div>
          <div class="carrito-producto-subtotal">
              <small>SubTotal</small>
              <p>USD $${subtotal}</p>
          </div>
          <button class="carrito-producto-eliminar" id=${producto.id}><i class="bi bi-trash2"></i> </button>
      `;

      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarBotonesEliminar();
  actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito() {
  const idBoton = event.currentTarget.id;

  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );

  productosEnCarrito.splice(index, 1);

  cargarProductosCarrito();
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosCarrito();
}

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => {
    const precioNumerico = parseFloat(
      producto.precio.toString().replace(/[^\d.]/g, "")
    );
    return acc + precioNumerico * producto.cantidad;
  }, 0);

  contenedorTotal.innerText = `USD $${totalCalculado}`;
}
