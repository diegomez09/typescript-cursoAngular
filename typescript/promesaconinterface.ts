(()=>{
   interface alumno{
     nombre:string,
     apellido:string,
     tipodesangre?:string
   }

  const accion = (alumno:alumno) =>{
    return new Promise((resolve,reject)=>{
      if(alumno.tipodesangre){
        resolve(`Se conoce su tipo de sangre: ${alumno.tipodesangre}`);
      }else{
        reject(`No se conoce su tipo de sangre`);
      }
    }
  );
}

const alumnoUno:alumno={
  nombre: 'wera',
  apellido: 'panelas',
  tipodesangre:'a+'
}
accion(alumnoUno).then(console.log);
})();