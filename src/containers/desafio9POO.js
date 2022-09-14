//crea un programa que compruebe si los parentesis, llaves y corchetes de una expresión estan equilibrados
//equilibrado significa que estos delimitados se abren y cierran en orden y de forma correcta
//parentesis, llaves y corchetes son igual de prioritarios. no hay uno mas importante que otro.
//expresión balanceada: {[a*(c+d)-5]} 
//expresion no balanceada {a*(c+d)]-5}


class Equilibador{
    constructor(expresion){
        this.expresion = expresion;
        this.contador = 0;
    }
    validacion(){
        for(var i in this.expresion){
            if(this.expresion[i] == "(" ||this.expresion[i] == "[" || this.expresion[i] == "{" ){
                this.contador++
            }
            else if(this.expresion[i] == ")" || this.expresion[i] == "]" || this.expresion[i] == "}"){
                this.contador--
            }
        }
        if (this.contador == 0){
            console.log("Expresion Balanceada")
        }
        else if(this.contador != 0 ){
            console.log("Expresion No Balanceada")
        } 
    }
}


let operacion=new Equilibador("({[3+2 (4-3)-2 (6-8)-5}")

operacion.validacion()