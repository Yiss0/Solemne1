let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  const totalPago = document.getElementById("total-pago");
  listaCarrito.innerHTML = "";
  let suma = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio.toLocaleString()} 
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
    suma += item.precio;
  });

  total.textContent = suma.toLocaleString();
  totalPago.textContent = suma.toLocaleString();
}

function confirmarPago() {
  alert("✅ ¡Pago realizado exitosamente! Gracias por tu compra.");
  carrito = [];
  actualizarCarrito();
  return false; // Previene recarga del formulario
}