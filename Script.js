document.addEventListener("DOMContentLoaded", function() {
    const jugador = document.getElementById("jugador");
    const jugadorSaltar = document.getElementById("jugadorSaltar");

    jugadorSaltar.addEventListener("click", function(){
        jugador.classList.add("jugadorSaltar");
        setTimeout(function(){
            jugador.classList.remove("jugadorSaltar");
        }, 1000); // Duración de la animación en milisegundos
    });
});
