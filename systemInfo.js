const getSystemInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

console.log('--- Información del Sistema ---');
const systemInfo = getSystemInfo();
console.log(systemInfo);

console.log('\n--- Información de Interfaces de Red ---');
const networkInfo = getNetworkInfo();
networkInfo.forEach(({ nombre, familia, dirección, interno }) => {
    console.log(`Interfaz ${nombre}:`);
    console.log(`  Familia: ${familia}`);
    console.log(`  Dirección: ${dirección}`);
    console.log(`  Interno: ${interno}`);
    console.log(); // Línea en blanco entre interfaces
});