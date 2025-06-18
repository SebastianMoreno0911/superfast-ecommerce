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

function cargarProductos() {
  productos.forEach((productos) => {
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
}

cargarProductos();
