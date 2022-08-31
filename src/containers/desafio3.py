#Escribe un programa que se encargue de 
#comprobar si un número es o no primo. Hecho esto, imprime los números primos entre 1 y 100.

#1. hacer la funcion que me retorne si es numero primo o no
#2. aparte realizar un contador para que se realice del 1 al 100


def numPrimo(numero1,divisor=2):
    if divisor >= numero1:
        return print("",numero1)
    elif numero1 % divisor != 0:
        return numPrimo(numero1, (divisor+1))

contador=1
while contador<100:
    numPrimo(contador)
    contador=contador+1
