let mediaRecorder;
let recordedChunks = [];
let isDownloading = false;
let recordingId = ""; 

function generateRecordingId() {
    return `${Math.random().toString(36).substr(2, 9).toUpperCase()}`; 
}

function startRecording() {
    recordingId = generateRecordingId();
    sessionStorage.setItem("recordingId", recordingId);
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
        isDownloading = true;

        mediaRecorder.onstop = () => {
 
            const url = URL.createObjectURL(new Blob(recordedChunks, { type: "video/webm" }));
            const a = document.createElement("a");

            a.href = url;
            a.download = `${recordingId}.webm`;
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

document.addEventListener("DOMContentLoaded", function () {
    startRecording();
});

