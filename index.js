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

let cart = [];

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
button.addEventListener("click", () => addCart(item));
});


const addCart = (item) => {
let productInCart = cart.find(product => product.id === item.id)
if(productInCart !== undefined){
    productInCart.precio = productInCart.precio + item.precio
    productInCart.cantidad = productInCart.cantidad + 1
}else{
    cart.push ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        imagen: productos.imagen,
        cantidad: 1
    }) 
}
}

viewCart.addEventListener("click", () => console.log(cart))

let cartNumber = document.getElementById("numberCart")
cartNumber.innerHTML = `${cart.length}`
