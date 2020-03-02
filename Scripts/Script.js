$(document).keydown(controlador)
$(document).ready(prueba)
$(document).click(saludo)
var voz = window.speechSynthesis;
var jugador;
var jugando = false;
function prueba(){
    var laberinto = new Laberinto(3,3);
    laberinto.generar();
    console.log(laberinto);
}
function controlador(evento){
    console.log(evento.which);
    if(evento.which == 73){//Instruciiones
        var instrucciones = "Instrucciones pendientes";
        hablar(instrucciones);
    }
    if(evento.which == 70){//Iniciar
        hablar("juego en fase beta");
        if(!jugando){
            jugando = true;
            setTimeout('init()', 3000);
        }else{

        }
    }
    if(event.which == 83){//salir
        var salir = "Gracias por jugar"
        hablar(salir);
    }
    if (event.which == 37){//Izquierda

    }
    if(evento.which == 38){//Arriba
        jugador.avanzar(new Casilla("Do","Mayor"));
    }
    if(evento.which == 39){//Derecha
    }
    if(evento.which==40){//Abajo
        jugador.avanzar(new Casilla("Do", "Menor"));
    }
}
function init(){
    var initCasilla = new Casilla2("Do","Menor");
    jugador = new Jugador(initCasilla);
}
function saludo(){
    var saludo = "Bienvenido A Laberinto Musical. "
    +"Presione. I para oir instrucciones."
    +"F para iniciar."
    +"S para salir";
    hablar(saludo);
}
function hablar(mensaje){
    if(voz.speaking || voz.pending){
        console.log("paila perrito")
    }else{
        var msg = new SpeechSynthesisUtterance(mensaje);
        msg.voice = speechSynthesis.getVoices().filter(function(voice) {
            return voice.name == 'Google español'; 
        })[0];
    voz.speak(msg);
    }
}