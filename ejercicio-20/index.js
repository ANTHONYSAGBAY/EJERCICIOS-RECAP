const calcularIVA = () => {
    let precio = parseFloat(prompt("Ingresa el precio:"));
    const iva = precio * 0.12;
    const precioFinal = precio + iva;
    alert(`El precio total con IVA es: ${precioFinal}`);
}
calcularIVA();
