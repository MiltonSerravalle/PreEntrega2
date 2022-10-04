const listaProductos = document.getElementById("container")

class indumentaria {
    constructor(id, imagen, nombre, precio ){
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
}
}

const productos = [
    {
        id: 1,
        imagen: "./multimedia/Britney.jpg",
        nombre: "Remera Britney",
        precio: 3000
    },
    {
        id: 2,
        imagen: "./multimedia/Pibes.jpg",
        nombre: "Remera Pibes Chorros",
        precio: 3000
    },
    {
        id: 3,
        imagen: "./multimedia/buzo2.jpg",
        nombre: "Buzo Gorillaz",
        precio: 4500
    }
]

let carroCompras = [];

productos.forEach((item) => {
let card = document.createElement("div")
card.innerHTML = `
<img class="imgProduct" src=${item.imagen}>
<h3 class="titleProduct">${item.nombre}</h3>
<p class="priceProduct">$${item.precio}</p>
<button class="btn" id=${item.id}>Comprar</button>
`
container.append(card);

const button = document.getElementById(item.id);
button.addEventListener("click", () => agregaCarrito(item));
});

const comprarProducto = (item) => {
    carroCompras.push(item)
  }

  const agregaCarrito = (item) => {
    let productoStock = carroCompras.find((producto) => productos.id === item.id);
    if (productoStock !== undefined) {
      productoStock.precio = productoStock.precio + item.precio;
      productoStock.cantidad = productoStock.cantidad + 1;
    } else {
      carroCompras.push({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: 1,
      });
    }
  };
  
  let carrito = document.getElementById("numberCart");
  carrito.innerHTML = `${carroCompras.length}`;
  


