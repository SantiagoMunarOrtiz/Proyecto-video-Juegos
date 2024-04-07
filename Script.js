const Hogo = document.getElementById("Hogo");
const jugador = document.getElementById("jugador");
const jugadorSaltar = document.getElementById("jugadorSaltar");
const Murcielago = document.getElementById("Murcielago");
const fondo = document.getElementById("fondo");

document.addEventListener("DOMContentLoaded", function() {
    jugadorSaltar.addEventListener("click", function(){
        jugador.classList.add("jugadorSaltar");
        setTimeout(function(){
            jugador.classList.remove("jugadorSaltar");
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

function Perder(jugador, obstaculo) {
  var Perder=false;
  if(obstaculo.x + obstaculo.width >= jugador.x && obstaculo.x < jugador.x + jugador.width){
    if(obstaculo.y + obstaculo.height >= jugador.y && obstaculo.y < jugador.y + jugador.height){
        Perder=true;
     }
  }

  if(obstaculo.x <= jugador.x && obstaculo.x + obstaculo.width >= jugador.x + jugador.width){
    if(obstaculo.y <= jugador.y && obstaculo.y + obstaculo.height >= jugador.y + jugador.height){
        Perder=true;
}
  }

  if(jugador.x <= obstaculo.x && jugador.x + jugador.width >= obstaculo.x + obstaculo.width){
    if(jugador.y<= obstaculo.y && jugador.y + jugador.height >= obstaculo.y + obstaculo.height){
        Perder=true;
}
  }
return Perder;
}
function VerificarPerder() {
    if (Perder(jugador, Hogo)) {
        console.log("¡Perdiste!");
        alert("Perdiste");
    } else {
        console.log("¡Sigue jugando!");
    }
}
VerificarPerder() ;

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

function CerrarSesion() {
    window.location.href = "CerrarS";
}
function InciarSesion() {
    window.location.href = "IniciarSesion.html";
}
/*/MENÚ NIVELES*/
function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
}
