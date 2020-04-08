(function(){

  function activar(quien:string,                  
                  momento?:string,
                  objeto:string = 'qpd raza'){
                    if(momento){
                      console.log(`${quien} activo la ${objeto} en la ${momento}`);
                    }else{
                      console.log(`${quien} activo el ${objeto}`);
                    }    
  }

  activar("yo",'bati','noche');
})();