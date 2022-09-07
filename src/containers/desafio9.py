#crea un programa que compruebe si los parentesis, llaves y corchetes de una expresión estan equilibrados
#equilibrado significa que estos delimitados se abren y cierran en orden y de forma correcta
#parentesis, llaves y corchetes son igual de prioritarios. no hay uno mas importante que otro.
#expresión balanceada: {[a*(c+d)-5]} 
#expresion no balanceada {a*(c+d)]-5}

parentesis=0
llave=0
corchete=0
expresion= str(input("Ingrese la expresion"))


for unaletra in expresion:
    if unaletra=="(":
        parentesis+=1
    if unaletra==")":
        parentesis-=1
    if unaletra=="{":
        llave+=1
    if unaletra=="}":
        llave-=1
    if unaletra=="[":
        corchete+=1
    if unaletra=="]":
        corchete-=1


if parentesis==0 and llave==0 and corchete==0:
    print("Expresion equilibrada")
if parentesis<0 and llave<0 and corchete<0:
    print("Expresion no equilibrada")

