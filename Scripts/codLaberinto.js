function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
class Casilla{

    constructor(numero){
        this.numero=numero;
        this.vecinoSup=false;
        this.vecinoInf=false;
        this.vecinoIzq=false;
        this.vecinoDer=false;
        this.sonido="N";   
    }


    getNumero() {
            return this.numero;
    }
    getSonido() {
            return this.sonido;
    }

    setSonido(sonido) {
            this.sonido = sonido;
    }

    setNumero(numero) {
            this.numero = numero;
    }

    tieneVecinoSup() {
            return this.vecinoSup;
    }

    setVecinoSup(vecinoSup) {
            this.vecinoSup = vecinoSup;
    }

    tieneVecinoInf() {
            return vecinoInf;
    }

    setVecinoInf(vecinoInf) {
            this.vecinoInf = vecinoInf;
    }

    tieneVecinoIzq() {
            return vecinoIzq;
    }

    setVecinoIzq(vecinoIzq) {
            this.vecinoIzq = vecinoIzq;
    }

    tieneVecinoDer() {
            return vecinoDer;
    }

    setVecinoDer( vecinoDer) {
            this.vecinoDer = vecinoDer;
    }

    toString(){
            return this.numero+"";
    }

}

class Laberinto{

    constructor(filas, columnas){
        this.ARRIBA = 1;
        this.ABAJO = 2;
        this.IZQUIERDA = 3;
        this.DERECHA = 4;
    
        this.filas = filas;
        this.columnas = columnas;
        this.casillas = new Array(filas);
        
    

        for (var i = 0; i < filas; i++) {
            this.casillas[i] = new Array(columnas);
            for (var j = 0; j < columnas; j++) {
                this.casillas[i][j] = new Casilla(i * columnas + j);
            }
        }
    }

    generar(){

        var visitados = [];
        var porVisitar = [];
        porVisitar[0] = this.casillas[0][0];
        var filaActual = 0;
        var columnaActual = 0;
        var vecino;

        var direcciones = new Array(this.filas * this.columnas);

        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                var numero = i * this.columnas + j;
                direcciones[numero] = [];

                if (i != 0) {
                    direcciones[numero].unshift(this.ARRIBA);
                }
                if (i != this.filas - 1) {
                    direcciones[numero].unshift(this.ABAJO);
                }
                if (j != 0) {
                    direcciones[numero].unshift(this.IZQUIERDA);
                }
                if (j != this.columnas - 1) {
                    direcciones[numero].unshift(this.DERECHA);
                }
                shuffle(direcciones[numero]);
            }
        }

        while (porVisitar.length != 0) {
            var actual = porVisitar[0];
            visitados.unshift(actual);

            var numero = actual.getNumero();
            filaActual = parseInt(numero / this.columnas);
            columnaActual = numero % this.columnas;

            vecino = actual;
            while (visitados.includes(vecino) && direcciones[numero].length != 0) {
                var direccionElegida = direcciones[numero][0];
                direcciones[numero].shift();
                switch (direccionElegida) {
                    case this.ARRIBA:
                        vecino = this.casillas[filaActual - 1][columnaActual];
                        if (!visitados.includes(vecino)) {
                            actual.setVecinoSup(true);
                            vecino.setVecinoInf(true);
                            porVisitar.unshift(vecino);
                        }
                        break;
                    case this.ABAJO:
                        vecino = this.casillas[filaActual + 1][columnaActual];
                        if (!visitados.includes(vecino)) {
                            actual.setVecinoInf(true);
                            vecino.setVecinoSup(true);
                            porVisitar.unshift(vecino);
                        }
                        break;
                    case this.IZQUIERDA:
                        vecino = this.casillas[filaActual][columnaActual - 1];
                        if (!visitados.includes(vecino)) {
                            actual.setVecinoIzq(true);
                            vecino.setVecinoDer(true);
                            porVisitar.unshift(vecino);
                        }
                        break;
                    case this.DERECHA:
                        vecino = this.casillas[filaActual][columnaActual + 1];
                        if (!visitados.includes(vecino)) {
                            actual.setVecinoDer(true);
                            vecino.setVecinoIzq(true);
                            porVisitar.unshift(vecino);
                        }
                        break;
                }
            }


            if (direcciones[actual.getNumero()].length == 0) {
                var x = direcciones.indexOf(actual);
                porVisitar.splice(x, 1);
            }
        }


    }
}