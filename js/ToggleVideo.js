function toggleVideo() {
    var imagen = document.getElementById("fondo");
    var video = document.getElementById("video1");
    
    // Ocultar la imagen
    imagen.style.display = "none";
    
    // Asegurar que el video sea visible y esté en primer plano
    video.style.display = "block";
    video.style.zIndex = "10";
    
    // Reproducir el video y manejar errores
    video.play().catch(function(error) {
        console.log("Error al reproducir el video:", error);
    });
}