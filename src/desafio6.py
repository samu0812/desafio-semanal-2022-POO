#Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje 
# que lo hagan de forma automática. - Si le pasamos 'Hola mundo' nos retornaría 'odnum aloH'

def invertirCadena(palabra):
    cadena=[]
    invertida=""
    for letra in palabra:
        cadena.append(letra)
    cadena.reverse()
    for letra in cadena:
        invertida+=letra
    print(invertida)
    
#contador para la cadena



def invertirCadena2(palabra):
    cadena=[]
    for letra in palabra:
        cadena.append(letra)
    for i in range(len(cadena)-1,-1,-1):
        print(cadena[i])

invertirCadena2("hola mundo")

