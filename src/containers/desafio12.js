//Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos. 
//Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda. 
//NO se tienen en cuenta los espacios, signos de puntuación y tildes. Ejemplo: Ana lleva al oso la avellana.

class palindromo{
    constructor(texto){
        this.texto = texto;
    }
    
    eliminarsignos(texto){
        this.texto2= this.texto.replace(".", "").replace("-", "").replace(" ", "").replace(",", "");
        return this.texto2
    }

    acentos(){
        this.eliminarsignos()
        this.texto3= this.texto2.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        return this.texto3
    }

    miniscula(){
        this.acentos()
        this.txtMinus = this.texto3.toLowerCase();
        return this.txtMinus
    }
    invertir(){
        this.miniscula()
        this.separartxt= this.txtMinus.split("");
        this.txtInvertir = this.separartxt.reverse();
        this.txtInvertido = this.txtInvertir.join("")
        return this.txtInvertido
    }

    comparar(){
        this.miniscula()
        this.invertir()
        if (this.txtMinus == this.txtInvertido){
            return "Es un Palíndromo"
        }
        else{
            return "No es Palíndromo"
        }
    }
}

a= new palindromo("ola.,, álo")
b= new palindromo("hola como ,,, Estas")
console.log(a.comparar())
console.log(b.comparar())
