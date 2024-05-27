const Hogo = document.getElementById("Hogo");
const jugador = document.getElementById("jugador");
const jugadorSaltar = document.getElementById("jugadorSaltar");
const Murcielago = document.getElementById("Murcielago");
const fondo = document.getElementById("fondo");
// Función para mover a Hogo utilizando un bucle de animación
function moverHogo() {
    // Obtener las coordenadas actuales de Hogo
    var hogoRect = Hogo.getBoundingClientRect();
    var hogoX = hogoRect.left;
    var hogoY = hogoRect.top;

    // Mover a Hogo
    Hogo.style.left = (hogoX + 1) + "px"; // Cambia la velocidad de movimiento ajustando este valor
    Hogo.style.top = (hogoY + 1) + "px"; // Cambia la velocidad de movimiento ajustando este valor

    // Verificar colisión con el jugador
    verificarColision();

    // Solicitar el siguiente fotograma de animación
    requestAnimationFrame(moverHogo);
}

// Función para verificar colisión
function verificarColision() {
    // Obtener las coordenadas del jugador
    var jugadorRect = jugador.getBoundingClientRect();

    // Obtener las coordenadas actuales de Hogo
    var hogoRect = Hogo.getBoundingClientRect();

    // Verificar si hay colisión
    if (
        jugadorRect.left < hogoRect.right &&
        jugadorRect.right > hogoRect.left &&
        jugadorRect.top < hogoRect.bottom &&
        jugadorRect.bottom > hogoRect.top
    ) {
        // Si hay colisión, mostrar la ventana emergente
        alert("¡Perdiste! :(");
    }
}

// Iniciar el movimiento de Hogo
moverHogo();


document.addEventListener("DOMContentLoaded", function() {
    jugadorSaltar.addEventListener("click", function(){
        jugador.classList.add("jugadorSaltar");
        setTimeout(function(){
            jugador.classList.remove("jugadorSaltar");
            verificarColision(); // Verificar colisión después de mover al jugador
        }, 1000); 
    });
});

    BotonPausa.addEventListener("click", ()=>{
        Pausa(); 
    })
    function Pausa(){
        Hogo.style.animationPlayState="paused";
        Murcielago.style.animationPlayState="paused";
        jugador.style.animationPlayState="paused";
        fondo.style.animationPlayState="paused";
    }
    BotonPlay.addEventListener("click", ()=>{
        Play(); 
    })
    function Play(){
        Hogo.style.animationPlayState="running";
        Murcielago.style.animationPlayState="running";
        jugador.style.animationPlayState="running";
        fondo.style.animationPlayState="running";
       
    }
BotonReanudar.addEventListener("click", ()=>{
    Pausa(); 
    Reanudar(); 
})
function Reanudar(){
    Hogo.classList.remove("Reinicio_Obstaculos");
    alert("Se va a reiniciar el juego .-.")
    Hogo.classList.add("Reinicio_Obstaculos");  
    Play();  
}
function irANiveles() {
    window.location.href = "Niveles.html";
}
function continuarNivel() {
    window.location.href = "Juego.html";
}
function Comentario() {
    window.location.href = "Comentarios.html";
}
function Home() {
    window.location.href = "Home.html";
}
function Registro() {
    window.location.href = "Registro.html";
}
function InciarSesion() {
    window.location.href = "IniciarSesion.html";
}
function Sumas() {
    window.location.href = "Sumas.html";
}
function Restas() {
    window.location.href = "Restas.html";
}
function Multiplicaciones() {
    window.location.href = "Multiplicaciones.html";
}
function Divisiones() {
    window.location.href = "Division.html";
}
function paginaIncio() {
    window.location.href = "PaginaDeInicio.html ";
}

/*/MENÚ NIVELES*/
function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
}
