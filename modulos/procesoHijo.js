const { exec, spawn } = require('child_process');
// El equivalente es:
// const exec = require('child_process').exec;

// exec('dir', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) =>{
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', () => {
    console.log('El proceso terminó');
})