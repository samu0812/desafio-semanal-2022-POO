/*Enunciado: Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta. 
 - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 - Expresión balanceada: { [ a * ( c + d ) ] - 5 } - Expresión no balanceada: { a * ( c + d ) ] - 5 }*/

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

let expEqual = new Equilibador("{{{{(  a  *  c )+ d - 5}} ");

expEqual.validacion();
 

 
 