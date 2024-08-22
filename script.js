const parrafoTamaño = document.getElementById("tamañoVentana");

//Funcion para actualizar el tamaño de la ventana en el parrafo
function actualizarTamañoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    parrafoTamaño.textContent = "Tamaño de la ventana: ${ancho}px x ${alto}px";
}

//Evento para detectar el cambio de tamaño de la ventana
window.addEventListener("resize", actualizarTamañoVentana);

actualizarTamañoVentana();
