const os = require("node:os")
//console.log(os)

const systemInfo = {
    nombre: os.hostname(),
    tipo: os.type(),
    versión: os.release(),
    arquitectura: os.arch(),
    CPUs: os.cpus().map(cpu => cpu.model),
    totalMemoria: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    memoriaLibre: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
};

console.log('Información del Sistema:');
console.log(systemInfo);