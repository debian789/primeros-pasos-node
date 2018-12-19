function sumar(numero_uno, numero_dos) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(numero_uno + numero_dos);
    }, 1000);
  });
}
async function asyncCall() {
  var resultado = await sumar(2,5);
  console.log(resultado);
}
asyncCall();
  