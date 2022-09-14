//crea una funcion que reciba dos cadenas como parametro (str1, str2)
// e imprima otras dos cadenas como salida (out1, out2). out1 contendra todos los caracteres
//presentes en la str1 pero no esten presentes en str2. out2 contendra todos los caracteres presentes
// en la str2 pero no esten presentes en str1 
class Palabra{
    constructor(str1,str2){
        this.str1=str1;
        this.str2=str2;
    }
    cadena1(){
        lst1=[]
        for(let letra in this.str1){
            if (letra in this.str2){
                return false;
            }
            else {
                lst1.push(this.letra)
            }
        }
        console.log(lst1.join(" "))
    }
}
cadena= new Palabra("felicidades", "programacion")
console.log(cadena.cadena1())