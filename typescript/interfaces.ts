(()=>{
 
  interface Xmen{
    nombre: string,
    edad: number,
    poder?:string
  }

  const enviarMision = (xmen:Xmen) =>{
    console.log(`Enviando a ${xmen.nombre} a la mision`);

  }

  const takebackMision = (xmen:Xmen) =>{    
    console.log(`Regresando a ${xmen.nombre} a la mision con ${xmen.poder}`);

  }

  const wolverine:Xmen ={
    nombre: 'logan',
    edad: 92,
    //poder: 'garras'
  }
  
  enviarMision(wolverine);
  takebackMision(wolverine);
})();