let mediaRecorder;
let recordedChunks = [];
let isDownloading = false;

function startRecording() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.start();
        })
        .catch(error => console.error("Error al acceder a la camara:", error));
}

function stopRecordingAndDownload() { 

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        console.log("Grabacion parada");
        isDownloading = true;

        mediaRecorder.onstop = () => {
 
            const url = URL.createObjectURL(new Blob(recordedChunks, { type: "video/webm" }));
            const a = document.createElement("a");
            
            const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); 

            a.href = url;
            a.download = `video_${timestamp}.webm`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
 
            isDownloading = false;
        };
    } else {
        console.error("Ha habido un error al descargar la grabacion");
    }
}

window.addEventListener("beforeunload", function (event) {
    if (isDownloading) {
        event.preventDefault();
    }
});

