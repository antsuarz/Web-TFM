function cambiarContenido(nuevaPagina) { 
    document.getElementById("main-frame").src = nuevaPagina;
    if(document.getElementById("instructions")){
        document.getElementById("instructions").remove();
    }
 
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            console.log("Cámara activada"); 
            const videoElement = document.createElement("video");
            videoElement.srcObject = stream;
            videoElement.autoplay = true; 
        })
        .catch((error) => {
            console.error("Error al acceder a la cámara:", error);
        });
}
