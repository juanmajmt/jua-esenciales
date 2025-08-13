let pedido = [];
let total = 0;

function agregarPedido(nombre, colorId, cantidadId, precio) {
  const color = document.getElementById(colorId).value;
  const cantidad = parseInt(document.getElementById(cantidadId).value);

  if (cantidad <= 0) {
    alert("La cantidad debe ser al menos 1");
    return;
  }

  const subtotal = precio * cantidad;

  pedido.push({ nombre, color, cantidad, subtotal });
  total += subtotal;
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("lista-pedido");
  lista.innerHTML = "";

  pedido.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.cantidad}x ${item.nombre} (${item.color}) - $${item.subtotal}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total;

  const mensaje = pedido.map(item => 
    `${item.cantidad}x ${item.nombre} (${item.color}) - $${item.subtotal}`
  ).join("\n");

  const numero = "542994278279"; 
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje + "\nTotal: $" + total)}`;
  document.getElementById("btn-whatsapp").href = url;
}
