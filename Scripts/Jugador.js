class Jugador{
    constructor(casilla){
        this.casilla=casilla;
        this.puntaje=0;
        this.jugando=true;
        this.casilla.reproducir();
        this.posX = 0;
        this.posY = 0;
        this.sentido = '';
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
    avanzaX(){
        this.posX +=1;
    }
    avanzaY(){
        this.posY +=1;
    }
    retroX(){
        this.getX -=1;
    }
    retroY(){
        this.posX -=1;
    }
    getX(){
        return this.posX;
    }
    getY(){
        return this.posY;
    }
}