const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.error(err);
    }
    console.log(files);
});

console.log('FINAL');

try {
    const contenido = fs.readFileSync('./repaso.js', 'utf-8');
    console.log(contenido);
} catch (err) {
    console.log(err);
}

if (fs.existsSync('bin')) {
    console.log('Ya existe el directorio');
} else {
    fs.mkdir('./bin', (err) => {
        console.log('Directorio creado');
    });
}