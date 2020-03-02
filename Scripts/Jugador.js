class Jugador{
    constructor(casilla){
        this.casilla=casilla;
        this.puntaje=0;
        this.jugando=true;
        this.casilla.reproducir();
    }
    avanzar(casilla){
        if(this.casilla.escala != casilla.escala){ //si las escalas son distintas
            if(this.casilla.tono != casilla.tono){ //si los tonos son distintos
                this.casilla.detener(); 
                this.casilla = new casilla2(casilla.escala, casilla.tono);
                this.casilla.reproducir();
            }else{
                this.casilla.detener();
                this.casilla = new Casilla2(casilla.escala, this.casilla.tono)
                this.casilla.reproducir();
            }
        }else{
            if(this.casilla.tono != casilla.tono){
                this.casilla.detener();
                this.casilla = new Casilla2(this.casilla.escala, casilla.tono);
                this.casilla.reproducir();
            }
        }
    }
}