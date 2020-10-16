let activo: boolean = true;

let cadena: string = 'Hola Mundo';
let nombre: string = 'Mario';
let apellido: string = 'Girón';
let nombre_completo: string = `${nombre} ${apellido}`;

let numero: number = 21;

let numeros: number[] = [2, 3, 4, 5, 6, 7, 8];
let numeros2: Array<string> = ['uno', 'casa', 'rojo'];

enum Estado {
    offline = -1,
    desconocido = 0,
    online = 1
};

let isOnline: Estado = Estado.desconocido;
console.log(isOnline);

let sinTipo: any = 'Hola';
sinTipo = 12;
sinTipo = true;
sinTipo = [1, 2, 3, 4, 5, 'hola'];

// Funciones
// function sumar(a, b) {
//     return a + b;
// }

const sumar = (a: number, b: number): number => {
    return a + b;
}

sumar(32, 12);

// Interfaces
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Rocío', apellido: 'Marín', edad: 12 })