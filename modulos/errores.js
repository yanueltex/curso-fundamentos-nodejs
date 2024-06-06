function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3+z;
}

function seRompeAsincrono(cb) {
    setTimeout(() => {
        try {
            return 3+z;
        } catch (error) {
            cb(error);
            console.error('Error en funcion asíncrona');
        }
    });
}

try {
    // otraFuncion();
    seRompeAsincrono((err) => {
        console.log(err.message);
    });
} catch (error) {
    console.error('Algo se ha roto...');
    console.error(error.message);
    console.log('Pero no pasanada, lo hemos capturado');
}

console.log('Final');