const fs = require('fs');
const evaluarCategoria = require('./evaluador');

const nombreProducto = 'Café Orgánico Tueste Especial (1kg)';
const precioProducto = 55.00;
const categoriaProducto = evaluarCategoria(precioProducto);

const contenido = `Producto: ${nombreProducto}
• Precio: $${precioProducto.toFixed(2)}
• Categoría: ${categoriaProducto}`;

try {
  fs.writeFileSync('info.txt', contenido, 'utf8');
  console.log('¡Éxito! El archivo info.txt ha sido creado correctamente.');
  console.log('\nContenido generado:\n');
  console.log(contenido);
} catch (error) {
  console.error('Error al escribir el archivo:', error);
}
