const listaProductos = document.getElementById("container")

class indumentaria {
    constructor(id, imagen, producto, precio ){
    this.id = id;
    this.imagen = imagen;
    this.producto = producto;
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

productos.forEach((item) => {
let card = document.createElement("div")
card.innerHTML = `
<img class="imgProduct" src=${item.imagen}>
<h3 class="titleProduct">${item.nombre}</h3>
<p class="priceProduct">$${item.precio}</p>
<button class="btn" id=${item.id}>Comprar</button>
`
container.append(card);

})


