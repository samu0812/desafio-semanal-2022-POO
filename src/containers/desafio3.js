function numprimo(numero1, divisor=2){
    if (divisor>= numero1){
        return console.log("", numero1);
    }    
    else if (numero1 % divisor != 0){
        return console.log(numero1, (divisor+1));
    }
}

var contador=1
while (contador<100){
    numprimo(contador);
    contador++;
    }
