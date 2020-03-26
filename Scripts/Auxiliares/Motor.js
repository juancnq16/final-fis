class Motor{
    constructor(){
        this.voz = window.speechSynthesis;
        this.pop = new Audio('Recursos/pop.mp3');
    }
    
    /**
     *todas las funciones que quieran hacer uso del  
     * altavoz deberán comprobar si el este está en uso 
     * con la función this.enUso()
     */
     
    hablar(mensaje){
        if(this.enUso()){
            console.log("Altavoz en uso");
        }else{
            var msg = new SpeechSynthesisUtterance(mensaje);
            msg.voice = speechSynthesis.getVoices().filter(function(voice) {
                return voice.name == 'Google español'; 
            })[0];
            this.voz.speak(msg);
        }
    }
    // el sonido de un movimiento no valido
    crash(){
        if(this.enUso()){
            console.log("Altavoz en uso");
        }else{
            this.pop.play();
        }
    }
    saludo(){
        var saludo = "Bienvenido A Laberinto Musical. "
        +"Presione. I para oir instrucciones."
        +"F para iniciar."
        +"S para salir";
        this.hablar(saludo);
    }
    //returna true si el altavoz está en uso, false de otra forma
    enUso(){
        return this.voz.speaking || this.voz.pending;
    }
}