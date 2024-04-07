const Hogo = document.getElementById("Hogo");
const jugador = document.getElementById("jugador");
const jugadorSaltar = document.getElementById("jugadorSaltar");
const Murcielago = document.getElementById("Murcielago");
const fondo = document.getElementById("fondo");

let contador = 0;
let intervaloContador;

document.addEventListener("DOMContentLoaded", function() {
    jugadorSaltar.addEventListener("click", function(){
        jugador.classList.add("jugadorSaltar");
        setTimeout(function(){
            jugador.classList.remove("jugadorSaltar");
        }, 1000); 
    });
});
function PararInterContador(){
    clearInterval(intervaloContador);
}
    BotonPausa.addEventListener("click", ()=>{
        Pausa(); 
    })

    function Pausa(){
        Hogo.style.animationPlayState="paused";
        Murcielago.style.animationPlayState="paused";
        jugador.style.animationPlayState="paused";
        fondo.style.animationPlayState="paused";
        PararInterContador();
    }
    BotonPlay.addEventListener("click", ()=>{
        Play(); 
    })
    interContador();

    function Play(){
        Hogo.style.animationPlayState="running";
        Murcielago.style.animationPlayState="running";
        jugador.style.animationPlayState="running";
        fondo.style.animationPlayState="running";
        interContador();
       
    }
   
    function interContador(){
    intervaloContador = setInterval(()=>{
    contador++;
    document.getElementById("contador").innerText=contador;
}, 100);
    }

BotonReanudar.addEventListener("click", ()=>{
    
    Reanudar(); 
    
})

function Reanudar(){
    Play();
    contador=0;
    
    Hogo.classList.remove("HogoReinicio");
    Hogo.classList.add("HogoReinicio");

    alert("Se va a reiniciar el juego .-.")
}


function Perder() {
    var jugadorLeft = parseInt(jugador.style.left);
    var jugadorTop = parseInt(jugador.style.top);
    var hogoLeft = parseInt(Hogo.style.left);
    var hogoTop = parseInt(Hogo.style.top);

    if (jugadorLeft === hogoLeft && jugadorTop === hogoTop) {
        alert("¡Perdiste!");
        console.log("¡Perdiste!");

    }
}
function irANiveles() {
    window.location.href = "Niveles.html";
}
 

/*/MENÚ NIVELES*/
function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
}
