class Jugador{
    constructor(casilla){
        this.casilla=casilla;
        this.puntaje=0;
        this.jugando=true;
        //this.casilla.reproducir();
        this.posX = 0;
        this.posY = 0;
        this.sentido = null;
        this.avanza = false;
        this.opuesto=null;
        this.reproductor = new Reproductor();
    }
    avanzar(casilla, sentido){
        this.casilla = casilla;
        this.sentido=sentido;
        if(this.sentido==null){
            this.avanza=true;
            this.sentido=sentido;
            this.opuesto = this.getOpuesto();
            this.swap();

        }else if(this.sentido==this.opuesto){
            //this.sentido=sentido;
            this.opuesto = this.getOpuesto();
            this.avanza=!this.avanza;
            this.swap();
        }
        this.opuesto = this.getOpuesto();
        this.swap();
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
    getCasilla(){
        return this.casilla;
    }
    getOpuesto(){
        if(this.sentido=="arriba"){
            return "abajo";
        }
        if(this.sentido=="derecha"){
            return "izquierda";
        }
        if(this.sentido=="izquierda"){
            return "derecha";
        }
        if(this.sentido=="abajo"){
            return "arriba";
        }
        return 0;
    }
    swap(){
        if (!this.avanza){
            this.reproductor.vamos();
        }else{
            this.reproductor.volvemos();
        }
    }
    silence(){
        this.reproductor.pause();
    }
}