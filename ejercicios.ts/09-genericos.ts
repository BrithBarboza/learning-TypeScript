function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(30);
let soyNArr = queTipoSoy([1, 2, 3]);

let soyExplicito = queTipoSoy<number>(100);
