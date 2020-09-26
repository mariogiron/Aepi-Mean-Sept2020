function sumaRetardo(a, b, done) {
    setTimeout(() => {
        done(a + b);
    });
}

sumaRetardo(4, 5, (resultado) => {
    console.log(resultado);
});

function sumaPromesa(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        });
    });
}

// Sintaxis THEN, CATCH
sumaPromesa(4, 5)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

// Sintaxis async await
async function main() {
    let resultado = await sumaPromesa(5, 6);
    console.log('Final');
}