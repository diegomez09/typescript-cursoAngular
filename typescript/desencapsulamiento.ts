(()=>{

 const avenger = {
   nombre: 'steve',
   clave: 'america',
   poder: 'escudo'
 }

 
 const extraer = ({nombre, poder}:any) => {
  //let {nombre,clave,poder} = avenger;
  console.log(nombre);
 }
 //extraer(avenger);

 const avengers:string[] = [
   'iron','thor','spidey'
 ]

 const [,,spidey] = avengers;
 const extraerArreglo = ([hulk,ironman,spidey]:string[]) => {
  console.log(hulk);
 } 
extraerArreglo(avengers);
})();