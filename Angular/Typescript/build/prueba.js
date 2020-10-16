let activo = true;
let cadena = 'Hola Mundo';
let nombre = 'Mario';
let apellido = 'Girón';
let nombre_completo = `${nombre} ${apellido}`;
let numero = 21;
let numeros = [2, 3, 4, 5, 6, 7, 8];
let numeros2 = ['uno', 'casa', 'rojo'];
var Estado;
(function (Estado) {
    Estado[Estado["offline"] = -1] = "offline";
    Estado[Estado["desconocido"] = 0] = "desconocido";
    Estado[Estado["online"] = 1] = "online";
})(Estado || (Estado = {}));
;
let isOnline = Estado.desconocido;
console.log(isOnline);
let sinTipo = 'Hola';
sinTipo = 12;
sinTipo = true;
sinTipo = [1, 2, 3, 4, 5, 'hola'];
// Funciones
// function sumar(a, b) {
//     return a + b;
// }
const sumar = (a, b) => {
    return a + b;
};
sumar(32, 12);
function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rocío', apellido: 'Marín', edad: 12 });
