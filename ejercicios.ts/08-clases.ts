/* class Heroe {
  alterEgo: string;
  edad: number;
  nombreReal: string;

  constructor(public alterEgo: string, public edad: number, public nombreReal: string) {
    this.alterEgo = alterEgo;
      this.edad = edad;
      this.nombreReal = nombreReal; }
} */

//Forma correcta de escribirlo
/* class Heroe {
      
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
    ) { }
}

const ironman = new Heroe('Ironman', 30, 'Tony Stark');
console.log(ironman); */

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York, USA');
  }
}

const ironman = new Heroe('Ironman', 30, 'Tony Stark');
/* console.log(ironman); */
