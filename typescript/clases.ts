(()=>{
    //comentar seleccion ctrl+k+c
    //seleccionar varias lineas ctrl+alt+up/down
    // class Avenger{
    //     nombre:string;
    //     equipo:string;
    //     real:string;
    //     pelea:boolean;
    //     victorias:number;

    //     constructor(nombre:string,equipo:string,real:string,pelea:boolean,victorias:number){
    //         this.nombre=nombre;
    //         this.equipo=equipo;
    //         this.real=real;
    //         this.pelea=pelea;
    //         this.victorias=victorias;
    //     }
    // }
    class Avenger{
        // nombre:string;
        // equipo:string;
        // real:string;
        // pelea:boolean;
        // victorias:number;

        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal?:string,
                    public puedePelear:boolean=true,
                    public peleasGanadas:number=0,                    
                    ){
        }
    }
    const antman = new Avenger('diego','capi');    
    
    console.log(antman);
})();