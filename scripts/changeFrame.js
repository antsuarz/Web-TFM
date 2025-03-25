
function cambiarContenido(nuevaPagina) { 
    document.getElementById("main-frame").src = nuevaPagina;
    if(document.getElementById("instructions") && document.getElementById("main-header")){
        document.getElementById("instructions").remove();
        document.getElementById("main-header").remove();
    } 
     
} 

