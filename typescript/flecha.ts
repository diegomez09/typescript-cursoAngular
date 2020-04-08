(function(){

  let miFuncion = function(a : string){
    return a.toUpperCase();
  }

  let miFuncionFlecha = (a:string)=> a.toUpperCase();

  console.log(miFuncion("Normal"));
  console.log(miFuncionFlecha("Flecha"));     

  let sumaF = (a:number,b:number) => a+b;
  console.log(sumaF(5,5));

  const hulk = {
    nombre: 'Hulk',
    smah(){
      setTimeout( ()=>{
        console.log(`${this.nombre} smash!!`);
      },1500);      
    }
  }

  hulk.smah();

})();