//Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva

class factorial{
    constructor(numero){
        this.numero = numero;
    }
    calculo(numero){
        if (this.numero < 0){ 
          return -1;
        }  
        else if (this.numero == 0){ 
            return 1;
        }    
        else {
            return (this.numero * this.calculo(this.numero - 1));
        }
    }
}          
a= new factorial(5)
console.log(a.calculo())

function calculo(numero){
    if (numero < 0){ 
      return -1;
    }  
    else if (numero == 0){ 
        return 1;
    }    
    else {
        return (numero * calculo(numero - 1));
    }
}
       