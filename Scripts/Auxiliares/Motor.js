class Motor{
    constructor(){
        this.voz = window.speechSynthesis;
    }
    hablar(mensaje){
        if(this.voz.speaking || this.voz.pending){
            console.log("ya se está leyendo algo");
        }else{
            var msg = new SpeechSynthesisUtterance(mensaje);
            msg.voice = speechSynthesis.getVoices().filter(function(voice) {
                return voice.name == 'Google español'; 
            })[0];
            voz.speak(msg);
        }
    }
    saludo(){
        var saludo = "Bienvenido A Laberinto Musical. "
        +"Presione. I para oir instrucciones."
        +"F para iniciar."
        +"S para salir";
        this.hablar(saludo);
    }
}