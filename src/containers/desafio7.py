#Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el 
#recuento final de todas ellas. - Los signos de puntuación no forman parte de la palabra. - 
#Una palabra es la misma aunque aparezca en mayúsculas y minúsculas. - 
#No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.

texto= "hola mundo hola hola programacion orientada a objetos programacion HOLA"
texto = texto.lower()
texto = texto.split(" ")
diccionario= {}

for palabra in texto:
    if palabra in diccionario:
        diccionario[palabra] += 1
    else:
        diccionario[palabra] = 1

for palabra in diccionario:
    frecuencia = diccionario[palabra]
    print(f"La palabra '{palabra}' se repite {frecuencia} veces")
