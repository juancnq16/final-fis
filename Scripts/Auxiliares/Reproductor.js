class Reproductor{
    constructor(){
        this.ida = new Audio('Recursos/ida.mp3');
        this.vuelta = new Audio('Recursos/vuelta.mp3');
        this.ida.loop=true;
        this.led = false;
    }
    vamos(){
        this.ida.play();
        this.vuelta.pause();
        this.led = true;
    }
    volvemos(){
        this.vuelta.play();
        this.ida.pause();
        this.led=true;
    }
    check(){
        console.log("el led ",this.led);
        return this.led;
    }
}