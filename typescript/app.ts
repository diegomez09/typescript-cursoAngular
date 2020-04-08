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
   'hulk','thor','spidey'
 ]

 const [,,spidey] = avengers;
 //cont extraerArreglo =
 console.log(spidey);

})();