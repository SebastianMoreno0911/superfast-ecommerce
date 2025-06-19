//Productos
const productos = [
  //motos
  {
    id: "moto-1",
    titulo: "BMW S1000RR",
    imagen: "/img/motos/bmw s1000rr.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 22000,
  },
  {
    id: "moto-2",
    titulo: "GSX-R1000 GT",
    imagen: "/img/motos/GSX S1000GT.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 14500,
  },
  {
    id: "moto-3",
    titulo: "Yamaha MT-09",
    imagen: "/img/motos/mt09.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 10500,
  },
  {
    id: "moto-4",
    titulo: "Yamaha MT-10",
    imagen: "/img/motos/mt10.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 15500,
  },
  {
    id: "moto-5",
    titulo: "Yamaha R1",
    imagen: "/img/motos/r1.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 18500,
  },
  {
    id: "moto-6",
    titulo: "Kawasaki Z900",
    imagen: "/img/motos/z900.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 9500,
  },
  {
    id: "moto-7",
    titulo: "Yamaha Tracer 9 GT+",
    imagen: "/img/motos/tracer.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 15500,
  },
  {
    id: "moto-8",
    titulo: "Ducati Superleggera V4",
    imagen: "/img/motos/Superleggera V4.png",
    categoria: {
      nombre: "Motos",
      id: "motos",
    },
    precio: "USD $" + 100000,
  },
  //carros
  {
    id: "carro-1",
    titulo: "Honda NSX (2ª gen)",
    imagen: "/img/carros/Honda NSX (2ª gen).png",
    categoria: {
      nombre: "Carros",
      id: "carros",
    },
    precio: "USD $" + 175000,
  },
  {
    id: "carro-2",
    titulo: "Nissan GT-R R35",
    imagen: "/img/carros/Nissan GT-R R35.png",
    categoria: {
      nombre: "Carros",
      id: "carros",
    },
    precio: "USD $" + 220000,
  },
  {
    id: "carro-3",
    titulo: "Toyota GR Supra GT4 EVO",
    imagen: "/img/carros/TOYOTA GR SUPRA GT4 EVO.png",
    categoria: {
      nombre: "Carros",
      id: "carros",
    },
    precio: "USD $" + 250000,
  },
  {
    id: "carro-4",
    titulo: "Chevrolet Corvette ZR1",
    imagen: "/img/carros/Chevrolet Corvette ZR1.png",
    categoria: {
      nombre: "Carros",
      id: "carros",
    },
    precio: "USD $" + 174995,
  },
  //electricos
  {
    id: "electrico-1",
    titulo: "Energica Ego+",
    imagen: "/img/Electricos/Energica Ego+.png",
    categoria: {
      nombre: "Electricos",
      id: "electricos",
    },
    precio: "USD $" + 30000,
  },
  {
    id: "electrico-2",
    titulo: "Tesla Cybertruck",
    imagen: "/img/Electricos/tesla cybertruck.png",
    categoria: {
      nombre: "Electricos",
      id: "electricos",
    },
    precio: "USD $" + 99900,
  },
  {
    id: "electrico-3",
    titulo: "Tesla Model 3",
    imagen: "/img/Electricos/Tesla Model 3.png",
    categoria: {
      nombre: "Electricos",
      id: "electricos",
    },
    precio: "USD $" + 55000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos productos

  productosElegidos.forEach((productos) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${productos.imagen}" alt="${productos.titulo}">
      <div class="producto-detalles">
          <h3 class="producto-titulo">${productos.titulo}</h3>
          <p class="producto-precio">${productos.precio}</p>
          <button class="producto-agregar" id="${productos.id}">Agregar</button>
      </div>
    `;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategoria.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerHTML = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++; // Incrementar la cantidad del producto si ya está en el carrito
  } else {
    productoAgregado.cantidad = 1; // Asignar una cantidad inicial de 1
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  numerito.innerText = nuevoNumerito;
}
