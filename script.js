
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

  
  nuevaTarea.addEventListener("click", () => {
    nuevaTarea.classList.toggle("completada");
  });

  
  nuevaTarea.addEventListener("dblclick", () => {
    nuevaTarea.remove();
  });

  
  lista.appendChild(nuevaTarea);

  
  input.value = "";
});





/* ejercicio 2 */


const botonMas = document.getElementById("botonMas");
const botonMenos = document.getElementById("botonMenos");
const borrar = document.getElementById("borrar");
const contador = document.getElementById("contador");

let valor = 0;


function actualizarContador() {
  contador.textContent = valor;

  if (valor > 0) {
    contador.style.color = "green";   
  } else if (valor < 0) {
    contador.style.color = "red";     
  } else {
    contador.style.color = "black";  
}

}

botonMas.addEventListener("click", () => {
  valor++;
  actualizarContador();
});

botonMenos.addEventListener("click", () => {
  valor--;
  actualizarContador();
});

borrar.addEventListener("click", () => {
  valor = 0;
  actualizarContador();
});


actualizarContador();



/* ejercicio 3 */


const productos = [
  {
    nombre: "Camisa",
    precio: 25,
    imagen: "assets/Camisa.png"
  },
  {
    nombre: "Blusa",
    precio: 30,
    imagen: "assets/Blusa.png"
  },
  {
    nombre: "Vestido",
    precio: 50,
    imagen: "assets/vestido.png"
  },
  {
    nombre: "Chaqueta",
    precio: 45,
    imagen: "assets/Chaqueta.png"
  }
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
    <img src="${p.imagen}" alt="${p.nombre}">
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

  