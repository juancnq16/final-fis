class Casilla2{
    constructor(escala, tono){
        this.escala=escala;
        this.tono=tono;
        this.sonido =  new Audio('Recursos/'+escala+tono+'.mp3');
    }
    reproducir(){
        this.sonido.play();
    }
    detener(){
        this.sonido.pause();
    }
}