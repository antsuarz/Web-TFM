let mediaRecorder;
let recordedChunks = [];

function startRecording() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
            mediaRecorder = new MediaRecorder(stream); 

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = saveRecording;
            mediaRecorder.start();
            console.log("Grabación iniciada");
        })
        .catch((error) => {
            console.error("Error al acceder a la cámara/micrófono:", error);
        });
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        console.log("Grabación detenida");
    }
}

function saveRecording() {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "records/video_" + new Date().toISOString().replace(/[:.]/g, "_") + ".webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    console.log("Grabación guardada");
}

document.getElementById("stop-button").addEventListener("click", stopRecording());