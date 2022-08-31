function areaPol(base,altura,poligono){
    if (poligono == "Triángulo" || poligono == "triángulo"){
        return console.log("el área del triángulo es:",(base*altura)/2);
        
    }    
    else {
        return console.log("el área del ${poligono} es:",(base*altura));
        
    }
}
areaPol(2,2,"triángulo");
areaPol(18,4,"rectangulo");
areaPol(77,32,"cuadrado");