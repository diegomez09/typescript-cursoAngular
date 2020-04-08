(()=>{
    //comentar seleccion ctrl+k+c
    //seleccionar varias lineas ctrl+alt+up/down
    const sumar = (a:number,b:number): number =>{
        let total = a+b;
        return total;     
    }    

    const nombre = ():string => 'Hola Diego';

    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve,reject) =>{
            resolve('Diego');
        });
    }

    obtenerSalario().then(a => console.log(a.toLocaleLowerCase()));
})();