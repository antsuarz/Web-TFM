function cambiarContenido(nuevaPagina) { 
    document.getElementById("main-frame").src = nuevaPagina;
    if(document.getElementById("instructions") && document.getElementById("main-header")){
        document.getElementById("instructions").remove();
        document.getElementById("main-header").remove();
    }
 
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            console.log("La camara esta encendida"); 
            const videoElement = document.createElement("video");
            videoElement.srcObject = stream;
            videoElement.autoplay = true; 
        })
        .catch((error) => {
            console.error("Problema al encender la camara", error);
        });
}
