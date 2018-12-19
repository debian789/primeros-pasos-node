function suma(numero_uno,numero_dos,callback){
   setTimeout(() => {
      var resultado = numero_uno + numero_dos;
      callback(resultado);
   }, 1000);
}

suma(2,5, (resultado) => {
   console.log(resultado);
})