/*Enunciado: Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 - Debe detectar automáticamente de qué tipo se trata y realizar la conversión. 
- En morse se soporta raya '—', punto '.', un espacio ' ' entre letras o símbolos y dos espacios entre palabras ' '. -*/

class decodMorse{
    constructor(texto,codigo){
        var {encode,decode} = require('morsee');
        this.mostrarMorse = encode(texto);
        this.mostrarPalabra = decode(codigo);
        this.texto = texto;
        this.codigo = codigo;
    }
    postMorse(){
        return console.log("Lo que usted Ingreso ´"+ this.texto + "´ - en codigo morse es: " + this.mostrarMorse)
        
    }
    postPalabra(){
        return console.log("Lo que usted Ingreso ´"+ this.codigo + "´ - en texto : " + this.mostrarPalabra)
    }

}

let Decof = new decodMorse("Luciano",".-.. ..- -.-. .. .- -. --- ")
Decof.postMorse();
