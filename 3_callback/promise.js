function sumar(numero_uno, numero_dos) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(numero_uno + numero_dos);
    }, 1000);
  });
}
sumar(2,5).then((resultado) => {
  console.log(resultado)
})
  