function suma(numero_uno,numero_dos){
   setTimeout(() => {
      var resultado = numero_uno + numero_dos;
      return resultado;
   }, 500);
}

var resultado = suma(2,5)
console.log(resultado);