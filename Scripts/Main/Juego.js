/**
 * coordenadas del jugador (x,y), variables globales 
 * y definición de controladores
 * 
 */
$(document).keydown(controlador);
var voz = new Motor();
var jugador;
var jugando = false;
var laberinto;
var x = 0;
var y = 0;
/*
function prueba(){
    laberinto = new Laberinto(5,5);
    laberinto.generar();
    console.log(laberinto);
    console.log(" :",x,y);
    console.log(laberinto.getCasilla(x,y))
}
*/
function controlador(evento){
    console.log(evento.which);
    if(evento.which == 13 && !jugando){//el saludo
        console.log(voz);
        voz.saludo();
        console.log("hope");
    }
    if(evento.which == 73 && !jugando){//Instruciiones
        var instrucciones = "usa las flechas para navegar dentro del laberinto. "
        +"iniciará en la esquina superior izquierda del laberinto";

        voz.hablar(instrucciones);
    }
    if(evento.which == 70){//Iniciar
        voz.hablar("juego en fase beta");
        if(!jugando){
            jugando = true;
            setTimeout('init()', 3000);
        }else{
            console.log("juego activo, por favor espere");
        }
    }
    if(evento.which == 83){//salir
        var salir = "Gracias por jugar"
        voz.hablar(salir);
        jugando = false;
    }else{
        if (evento.which == 37){//Izquierda
            if (x>0){
                if(laberinto.getCasilla(x,y).tieneVecinoIzq()){
                    x -=1;
                    console.log("Coordenadas : X : ",x,", Y : ",y);
                    var casilla = laberinto.getCasilla(x,y);
                    var sentido = 'izquierda';
                    jugador.avanzar(casilla, sentido);
                    console.log("el sentido: ",jugador.sentido,"el opuesto: ", jugador.opuesto);

                }else{    
                    voz.crash();
                }
            }else{
                voz.crash();
            }

        }
        if(evento.which == 38){//Arriba
            if(y>0){
                if(laberinto.getCasilla(x,y).tieneVecinoSup()){
                    y -= 1;
                    console.log("Coordenadas : X : ",x,", Y : ",y);
                    var casilla = laberinto.getCasilla(x,y);
                    var sentido = 'arriba';
                    jugador.avanzar(casilla, sentido);
                    console.log("el sentido: ",jugador.sentido,"el opuesto: ", jugador.opuesto) ;
                }else{
                    voz.crash();
                }
            }else{
                voz.crash();
            }

        }
        if(evento.which == 39){//Derecha
               if(x<3){
                   if (laberinto.getCasilla(x,y).tieneVecinoDer()){
                        x+=1;
                        console.log("Coordenadas : X : ",x,", Y : ",y);
                        //console.log(laberinto.getCasilla(x,y));
                        var casilla = laberinto.getCasilla(x,y);
                        var sentido = 'derecha';
                        jugador.avanzar(casilla, sentido);
                        console.log("el sentido: ",jugador.sentido,"el opuesto: ", jugador.opuesto);
                        //console.log(jugador.getCasilla());
                   }else{
                        voz.crash();
                   }
               }else{
                    voz.crash();
               }
        }
        if(evento.which==40){//Abajo
               if(y<3){
                   console.log(laberinto.getCasilla(x,y).tieneVecinoInf());
                   if(laberinto.getCasilla(x,y).tieneVecinoInf()){
                        y += 1;
                        console.log("Coordenadas : X : ",x,", Y : ",y);
                        //console.log(laberinto.getCasilla(x,y));
                        var casilla = laberinto.getCasilla(x,y);
                        var sentido = 'abajo';
                        jugador.avanzar(casilla, sentido);
                        console.log("el sentido: ",jugador.sentido,"el opuesto: ", jugador.opuesto);
                        //console.log(jugador.getCasilla());
                   }else{
                        voz.crash();
                   }     
               }else{
                    voz.crash();
               }
            
        }
    }
}
function init(){
    laberinto = new Laberinto(4,4);
    laberinto.generar();
    console.log(laberinto);
    jugador = new Jugador(null);
}
