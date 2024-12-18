const os = require("node:os")

// Obtener las interfaces de red
const networkInterfaces = os.networkInterfaces();

// Recorrer cada interfaz
console.log('Información de Interfaces de Red:');
for (const [nombre, interfaces] of Object.entries(networkInterfaces)) {
    console.log(`Interfaz ${nombre}:`);
    interfaces.forEach(({ family, address, internal }) => {
        console.log(`  Familia: ${family}`);
        console.log(`  Dirección: ${address}`);
        console.log(`  Interno: ${internal}`);
    });
    console.log(); // Línea en blanco entre interfaces
}