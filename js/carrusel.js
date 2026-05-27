// Molde para estructurar de forma idéntica cada universidad
class Universidad {
    constructor(nombre, ubicacion, ranking, estudiantes, puntaje, imagen) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.ranking = ranking;
        this.estudiantes = estudiantes;
        this.puntaje = puntaje;
        this.imagen = imagen;
    }
}

// Molde maestro para la lógica y comportamiento del carrusel
class ControladorCarrusel {
    constructor(listaDatos) {
        this.universidades = listaDatos;
        this.indiceActual = 0;
        this.intervalo = null;
        this.enReproduccion = false;

        // Mapeo interno de nodos del DOM
        this.imgNodo = document.getElementById('universidad-imagen');
        this.nombreNodo = document.getElementById('universidad-nombre');
        this.ubicacionNodo = document.getElementById('universidad-ubicacion');
        this.rankingNodo = document.getElementById('universidad-ranking');
        this.estudiantesNodo = document.getElementById('universidad-estudiantes');
        this.puntajeNodo = document.getElementById('universidad-puntaje');
        this.btnAuto = document.getElementById('btn-auto');
    }

    // Método flecha para pintar los datos del objeto actual en la pantalla
    actualizarInterfaz = () => {
        const u = this.universidades[this.indiceActual];
        if (this.imgNodo) this.imgNodo.src = u.imagen;
        if (this.nombreNodo) this.nombreNodo.textContent = u.nombre;
        if (this.ubicacionNodo) this.ubicacionNodo.textContent = u.ubicacion;
        if (this.rankingNodo) this.rankingNodo.textContent = u.ranking;
        if (this.estudiantesNodo) this.estudiantesNodo.textContent = u.estudiantes;
        if (this.puntajeNodo) this.puntajeNodo.textContent = u.puntaje;
    };

    // Método flecha para controlar el carrusel automático (Play / Pause)
    alternarAutomatico = () => {
        if (!this.enReproduccion) {
            this.intervalo = setInterval(() => {
                this.indiceActual = (this.indiceActual + 1) % this.universidades.length;
                this.actualizarInterfaz();
            }, 3000); 
            if (this.btnAuto) {
                this.btnAuto.textContent = " ⏸ ";
                this.btnAuto.className = "px-3 py-1 text-2xl sm:text-3xl text-red-600 hover:text-red-500 transition-colors focus:outline-none cursor-pointer active:scale-95";
            }
            this.enReproduccion = true;
        } else {
            clearInterval(this.intervalo);
            if (this.btnAuto) {
                this.btnAuto.textContent = " ▶ ";
                this.btnAuto.className = "px-3 py-1 text-2xl sm:text-3xl text-green-700 hover:text-green-500 transition-colors focus:outline-none cursor-pointer active:scale-95";
            }
            this.enReproduccion = false;
        }
    };
}
