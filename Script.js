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


const canvas = document.createElement('canvas')
canvas.width  = innerWidth
canvas.height= innerHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

class Sprite {
    constructor({animations = [,data]}){
        this.animations = animations
        this.animations = "walk"
        this.frame = {}
        this.frameIndex = -1 
        this.data = data

    }
    advance(){
      if(frames % 8 ===0){
        this.frameNames = this.animations[this.animation].frames
      }
      if(this.frameIndex + 1 >= this.frameNames.length){
        this.frameIndex = 0
      }else {
        this.frameIndex++
      }
      this.frame = this.data 
    }
}
