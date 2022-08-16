interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Brith',
};

const pasajero2: Pasajero = {
  nombre: 'Giancarlos',
  hijos: ['Gianfranco', 'Gianluca', 'Jheremmy'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  /* console.log(cuantosHijos); */
}

imprimeHijos(pasajero1);
