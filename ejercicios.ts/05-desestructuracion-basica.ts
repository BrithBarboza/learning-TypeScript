/* interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}
const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015,
  },
}; */

// Opción 1 de desestructuración de datos
/* const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles; */

// Opción 2 de desestructuración de datos
/* const { volumen, segundo, cancion, detalles: { autor } } = reproductor;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor actual de: ', autor); */

// Opción 3 de desestructuración de datos
/* const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor actual de: ', autorDetalle); */

// Desestructuración de array: Importa el orden
/* const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3); */
