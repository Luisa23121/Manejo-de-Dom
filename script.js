
/*ejercicio 1 */

const input = document.getElementById("input1");
const boton = document.getElementById("boton1");
const lista = document.getElementById("lista1");
const error = document.getElementById("error");


boton.addEventListener("click", () => {
  const texto = input.value.trim(); 


  if (texto === "") {
    error.textContent = "Por favor escribe una tarea.";
    return; 
  }

  
  error.textContent = "";

  
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = texto;

  
  lista.appendChild(nuevaTarea);

  
  input.value = "";
});


/* ejercicio 2 */

const botonMas = document.getElementById("botonMas");
const botonMenos = document.getElementById("botonMenos");
const borrar = document.getElementById("borrar");
const contador = document.getElementById("contador");

let valor = 0;

botonMas.addEventListener("click", () => {
  valor++;
  contador.textContent = valor;
});

botonMenos.addEventListener("click", () => {
  valor--;
  contador.textContent = valor;
});

borrar.addEventListener("click", () => {
  valor = 0;
  contador.textContent = valor;
});


/* ejercicio 3 */


const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Gorra", precio: 15 },
  { nombre: "Bufanda", precio: 10 }
];


const input2 = document.getElementById("input2");
const productosContenedor = document.getElementById("productosContenedor");
const noCoincide = document.getElementById("noCoincide");
const carritoContar = document.getElementById("carritoContar");

let contadorCarrito = 0; 


function mostrarProductos(lista) {
  
  productosContenedor.innerHTML = "";

  
  if (lista.length === 0) {
    noCoincide.style.display = "block";
  } else {
    noCoincide.style.display = "none";
  }

  
  lista.forEach(p => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto"); 

    
    
    tarjeta.innerHTML = `
      <h4>${p.nombre}</h4>
      <p>Precio: $${p.precio}</p>
      <button>Agregar</button>
    `;

    
    const botonAgregar = tarjeta.querySelector("button");
    botonAgregar.addEventListener("click", () => {
      contadorCarrito++;
      carritoContar.textContent = contadorCarrito;
    });

    
    productosContenedor.appendChild(tarjeta);
  });
}


mostrarProductos(productos);


input2.addEventListener("input", () => {
  const texto = input2.value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
});

