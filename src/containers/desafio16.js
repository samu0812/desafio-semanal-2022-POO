//Enunciado: Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue 
//de poner en mayúscula la primera letra de cada palabra. 
//- No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.


class Mayuscula{
    constructor(frase){
    this.frase=frase;
    }
    convertir(frase){
        if (typeof this.frase != 'string') {
            throw TypeError('El argumento debe ser una cadena de caracteres (texto).');
        }
    
        this.palabras = this.frase.split(' ');
    
        return this.palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');

    }


}

a = new Mayuscula("hola como estas")
console.log(a.convertir(a));