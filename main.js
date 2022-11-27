// clase producto

class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// creamos nuestros productos

const producto1 = new Producto(
  1,
  "Iphone14",
  700,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto2 = new Producto(
  2,
  "Moto G20",
  200,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto3 = new Producto(
  3,
  "Samsung Galaxy",
  800,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto4 = new Producto(
  4,
  "Parlante portatil",
  500,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto5 = new Producto(
  5,
  "Auriculares Soudcore",
  100,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto6 = new Producto(
  6,
  "Notebook lenovo",
  1700,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto7 = new Producto(
  7,
  "Notebook HP",
  900,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);

// creamos array

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
];

// implementamos el dom

const divProductos = document.getElementById("divProductos");
productos.forEach((producto) => {
  divProductos.innerHTML += `
    <div id="$${producto.id}" class="card-cardProd">
    <div class="card-body">
    <h4 class="card-title">${producto.nombre}</h4>
    <img src="${producto.imagen}" alt="">
    <p class="card-text">${producto.precio}</p>
    <button id=${producto.id} class="btn btn-primary">Agregar</button>
    </div>
    </div>  
    `;
});

// carrito de compras
const carrito =JSON.parse(localStorage("carrito")) || [];
const botonesAgregar = document.querySelectorAll(".btn-primary");


botonesAgregar.forEach((btn) => {
  btn.onclick = () => {
    const productoSeleccionado = productos.find(
      (prod) => prod.id === parseInt(btn.id)
    );
    const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
    // console.log(productoSeleccionado, productoCarrito);

    const indexCarrito = carrito.findIndex(
      (prod) => prod.id === productoCarrito.id
    );

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    }else{
      carrito[indexCarrito].cantidad ++;
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));
    console.log(carrito);
  };
});

const botonFinalizar = document.querySelector('#concretar');
botonFinalizar.onclick = ()=>{
  // const valores = carrito.map((prod)=>prod.precio *prod.cantidad);
  // let totalCompra = 0;
  // valores.forEach((valor)=>{
  //   totalCompra += valor;

  // })
  const totalCompra = carrito
  .map((prod)=>prod.precio*prod.cantidad)
  .reduce((element1, element2)=> element1 +element2);
  console.log(totalCompra)

};
