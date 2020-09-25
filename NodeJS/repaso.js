const PI = 3.14;
const nombre = "Mario";
let edad = 81;

function sumar(a, b) {
    return a + b;
}

const sumarV2 = function (a, b) {
    return a + b;
}

const sumarV3 = (a, b) => {
    return a + b;
}

const res1 = sumar(3, 4);
const res2 = sumarV2(4, 5);
const res3 = sumarV3(8, 9);

console.log(res1, res2, res3);

// CALLBACK
const sumaRetardo = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 3000);
};

// addEventListener('click', ()=>{
//
// })
const res4 = sumaRetardo(3, 8, (resultado) => {
    console.log('Termina la suma ' + resultado);
});

console.log(__dirname);
console.log(__filename);

console.log(process.argv);