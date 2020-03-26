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
            return this.vecinoInf;
    }
    setVecinoInf(vecinoInf) {
            this.vecinoInf = vecinoInf;
    }

    tieneVecinoIzq() {
            return this.vecinoIzq;
    }

    setVecinoIzq(vecinoIzq) {
            this.vecinoIzq = vecinoIzq;
    }

    tieneVecinoDer() {
            return this.vecinoDer;
    }

    setVecinoDer( vecinoDer) {
            this.vecinoDer = vecinoDer;
    }

    toString(){
            return this.numero+"";
    }

}