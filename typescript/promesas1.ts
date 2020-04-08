(()=>{

  console.log('inico');
  const prom1 = new Promise( (resolve, reject) =>{
    
    setTimeout(() => {
      reject('Termin+o timeout');
    },1500);
  } );

  prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err))
  console.log('fin');
})();