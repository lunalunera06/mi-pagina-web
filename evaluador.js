function evaluarCategoria(precio) {
    if (precio >= 50) {
        return "Premium";
    }
    return "Estándar";
}

module.exports = evaluarCategoria;
