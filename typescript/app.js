(function () {
    var avenger = {
        nombre: 'steve',
        clave: 'america',
        poder: 'escudo'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        //let {nombre,clave,poder} = avenger;
        console.log(nombre);
    };
    //extraer(avenger);
    var avengers = [
        'hulk', 'thor', 'spidey'
    ];
    var spidey = avengers[2];
    //cont extraerArreglo =
    console.log(spidey);
})();
