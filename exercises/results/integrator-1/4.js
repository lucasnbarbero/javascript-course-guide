const venta = {
  precioUnitario: 50,
  cantidad: 12,
};

function calcularTotal(venta) {
  let total = venta.precioUnitario * venta.cantidad;
  if (venta.cantidad > 10) {
    total *= 0.9; // Aplicar un 10% de descuento
  }
  return total;
}

console.log('Total de la venta:', calcularTotal(venta));
