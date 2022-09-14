class Vehiculo{
    constructor(tipo, modelo, año, color){
        this.tipo = tipo;
        this.modelo= modelo;
        this.año = año;
        this.color = color;
    }
    tipo1(){
        return ("este vehiculo es " + this.tipo)
    }
    modelo(){
        return ("este vihiculo es modelo " + this.modelo);
    }

    año(){
        return ("este vehiculo es del año " + this.año)
    }

    color(){
        return ("este vehiculo es color " + this.color)
    }

}

class Auto extends Vehiculo{
    constructor(tipo, modelo, año, color,puertas){
        super(tipo, modelo, año, color);
        this.puertas= puertas;
    }
    puerta(){
        return ("este auto tiene " + this.puertas + " puertas")
    }
}

class Moto extends Vehiculo{
    constructor(tipo, modelo, año, color,colorLuz){
        super(tipo, modelo, año, color);
        this.colorLuz= colorLuz
    }
    luz(){
        return ("la luz es de color " + this.colorLuz)
    }
}

class Bici extends Vehiculo{
    constructor(tipo, modelo, año, color,tamaño){
        super(tipo, modelo, año, color);ñhj0
        this.tamaño= tamaño;
    }
    tamaño(){
        return ("esta bici es de tamaño" + this.tamaño);
    }
}

let a = new Moto("auto","Logan", 2017, "Negro",)
console.log(a.puerta())