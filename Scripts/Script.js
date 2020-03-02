$(document).keydown(controlador)
$(document).ready(prueba)
$(document).click(saludo)
var voz = window.speechSynthesis;
var jugador;
var jugando = false;
var laberinto;
var x = 0;
var y = 0;
function prueba(){
    laberinto = new Laberinto(5,5);
    laberinto.generar();
    console.log(laberinto);
    console.log("su puta madre :",x,y);
    console.log(laberinto.getCasilla(x,y))
}
function controlador(evento){
    if(evento.which == 73){//Instruciiones
        var instrucciones = "usa las flechas para navegar dentro del laberinto";
        hablar(instrucciones);
    }
    if(evento.which == 70){//Iniciar
        hablar("juego en fase beta");
        if(!jugando){
            jugando = true;
            setTimeout('init()', 3000);
        }else{
            console.log("juego activo, por favor espere");
        }
    }
    if(evento.which == 83){//salir
        var salir = "Gracias por jugar"
        hablar(salir);
        jugando = false;
    }
    if (evento.which == 37){//Izquierda
        /*
        if (jugador.sentido == 'derecha'){
            //jugador.cambiaSentido();
        }else{
            //jugador.mover()
        }
        */
       x -=1;
       console.log("su puta madre :",x,y);
       console.log(laberinto.getCasilla(x,y));
    }
    if(evento.which == 38){//Arriba
        /*
        if (jugador.sentido == 'abajo'){
            //jugador.cambiaSentido('arriba');
        }else{
            //jugador.mover()
        }
        jugador.avanzar(new Casilla("Do","Mayor"));
        */
       y += 1;
       console.log("su puta madre :",x,y);
       console.log(laberinto.getCasilla(x,y));
    }
    if(evento.which == 39){//Derecha
        /*
        if (jugador.sentido == 'derecha'){
            //jugador.cambiaSentido();
        }else{
            //jugador.mover()
        }
        */
       x+=1;
       console.log("su puta madre :",x,y);
       console.log(laberinto.getCasilla(x,y));
    }
    if(evento.which==40){//Abajo
        /*
        if (jugador.sentido == 'derecha'){
            //jugador.cambiaSentido();
        }else{
            //jugador.mover()
        }
        //jugador.avanzar(new Casilla("Do", "Menor"));
        */
       y -= 1;
       console.log("su puta madre :",x,y);
       console.log(laberinto.getCasilla(x,y));
    }
}
function init(){
    var initCasilla = new Casilla2("Do","Menor");
    laberinto = new Laberinto(4,4);
    laberinto.generar();
    console.log(laberinto);
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