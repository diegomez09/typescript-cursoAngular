(()=>{
  //creo un metodo que recibe un numero
  const retirarDinero = (monto:number): Promise<string> =>{
    //mi salgo total actual
    let dinero = 10000;
  //retorno una promesa con sus dos parametros si funca y si no
    return new Promise( (resolve, reject) =>{
      //condicion de promesa
      if(monto > dinero){
        reject('No hay suficiente fondo');
      }else{
        dinero = dinero - monto;
        resolve(`Su saldo es de ${dinero}`);
      }
    });

  }
//invoco el metodo con su valor que recibe
  retirarDinero(150)
  //si todo sale bien
    .then(montoActual => console.log(`${montoActual}`))
    //si todo vale kk
    .catch(console.warn)
  
})();