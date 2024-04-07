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
    BotonPausa.addEventListener("click", ()=>{
        Pausa(); 
    })
    function Pausa(){
        Hogo.style.animationPlayState="paused";
        Murcielago.style.animationPlayState="paused";
        jugador.style.animationPlayState="paused";
        fondo.style.animationPlayState="paused";
        clearInterval(intervaloContador);
    }
    BotonPlay.addEventListener("click", ()=>{
        Play(); 
    })
    
    function Play(){
        Hogo.style.animationPlayState="running";
        Murcielago.style.animationPlayState="running";
        jugador.style.animationPlayState="running";
        fondo.style.animationPlayState="running";

        intervaloContador = setInterval(()=>{
            contador++;
            document.getElementById("contador").innerText=contador;
        }, 100);
    }
 intervaloContador = setInterval(()=>{
    contador++;
    document.getElementById("contador").innerText=contador;
}, 100);

BotonPlay.addEventListener("click", ()=>{
    Play(); 
})
BotonReanudar.addEventListener("click", ()=>{
    BotonReanudar();
})

function BotonReanudar(){
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
 
