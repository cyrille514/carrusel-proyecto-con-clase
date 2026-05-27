// Escuchador maestro para iniciar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    
    // Instanciamos el controlador inyectándole el array de objetos de datos.js
    const miCarrusel = new ControladorCarrusel(listaUniversidades);

    // Primera operación: Pintar la interfaz inicial
    miCarrusel.actualizarInterfaz();

    

    // Botón Flecha Doble Izquierda (<<) -> Salta 2 hacia atrás
    document.getElementById('btn-anterior').addEventListener('click', () => {
        if (!miCarrusel.enReproduccion) miCarrusel.alternarAutomatico(); 
        miCarrusel.indiceActual = (miCarrusel.indiceActual - 2 + miCarrusel.universidades.length) % miCarrusel.universidades.length;
        miCarrusel.actualizarInterfaz();
    });

    // Botón Flecha Simple Izquierda (<) -> Retrocede 1 y pausa el automático
    document.getElementById('btn-anterior-simple').addEventListener('click', () => {
        if (miCarrusel.enReproduccion) miCarrusel.alternarAutomatico(); 
        miCarrusel.indiceActual = (miCarrusel.indiceActual - 1 + miCarrusel.universidades.length) % miCarrusel.universidades.length;
        miCarrusel.actualizarInterfaz();
    });

    // Botón Flecha Simple Derecha (>) -> Avanza 1 y pausa el automático
    document.getElementById('btn-siguiente-simple').addEventListener('click', () => {
        if (miCarrusel.enReproduccion) miCarrusel.alternarAutomatico(); 
        miCarrusel.indiceActual = (miCarrusel.indiceActual + 1) % miCarrusel.universidades.length;
        miCarrusel.actualizarInterfaz();
    });

    // Botón Flecha Doble Derecha (>>) -> Salta 2 hacia adelante
    document.getElementById('btn-siguiente').addEventListener('click', () => {
        if (!miCarrusel.enReproduccion) miCarrusel.alternarAutomatico(); 
        miCarrusel.indiceActual = (miCarrusel.indiceActual + 2) % miCarrusel.universidades.length;
        miCarrusel.actualizarInterfaz();
    });

    // Botón central de Play / Pause
    if (miCarrusel.btnAuto) {
        miCarrusel.btnAuto.addEventListener('click', () => miCarrusel.alternarAutomatico());
    }
});
