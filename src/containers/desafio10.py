dicMorse = {
    "a": "·-",
    "b": "-···",
    "c": "-·-·",
    "d": "-··",
    "e": "·",
    "f": "··-·",
    "g": "--·",
    "h": "····",
    "i": "··",
    "j": "·---",
    "k": "-·-",
    "l": "·-··",
    "m": "--",
    "n": "-·",
    "ñ": "--·--",
    "o": "---",
    "p": "·--·",
    "q": "--·-",
    "r": "·-·",
    "s": "···",
    "t": "-",
    "u": "··-",
    "v": "···-",
    "w": "·--",
    "x": "-··-",
    "y": "-·--",
    "z": "--··",
    "0": "-----",
    "1": "·----",
    "2": "··---",
    "3": "···--",
    "4": "····-",
    "5": "·····",
    "6": "-····",
    "7": "--···",
    "8": "---··",
    "9": "----·",
    ".": "·-·-·-",
    ",": "--··--",
    "?": "··--··",
    '"': "·-··-·",
    "/": "-··-·"
}


def traduc_morse(fraseEspañol: str):
    # String a imprimir
    fraseTraducida = ""

    for letra in fraseEspañol.lower():

        # Obtiene la traducción de la letra a través del diccionario Morse, si no existe o no se encuentra retorna None
        letraMorse = dicMorse.get(letra)

        # Si se encuentra un espacio, lo reemplaza con un doble espacio para separar una palabra de otra
        if letra == " ":
            fraseTraducida += "  "

        # Si la letra no existe en el diccionario, se toma como un error de transmisión y se transmite como tal.
        elif letraMorse is None:
            fraseTraducida += "....--.....---..-...-.. "

        # De encontrarse en el diccionario, realiza la traducción directamente
        else:
            fraseTraducida += f"{letraMorse} "

    # Imprime la frase en Código Morse
    print(f"The phrase '{fraseEspañol}' in morse is: '{fraseTraducida}'.")


def traduc_español(fraseMorse: str):
    # String a imprimir
    fraseTraducida = ""

    # Del diccionario de Texto Natural a Código Morse, se crea un nuevo diccionario,
    # que es de Código Morse a Texto Natural
    latin_dict = {value: key for key, value in dicMorse.items()}

    # Separa lo transmitido en morse, en palabras únicas.
    for letraMorse in fraseMorse.split("   "):
        # Cada palabra es separado
        for letra in letraMorse.split():

            # Intenta obtener la letra del diccionario creado
            letraEspañol = latin_dict.get(letra)

            # Si se tiene un error transmitido o no existe la letra, lo marca con un *
            if letra == "....--.....---..-...-.." or letraEspañol is None:
                fraseTraducida += "*"

            # En caso contrario, añade la letra traducida desde
            else:
                fraseTraducida += letraEspañol

        # Añade un espacio al final de la palabra
        fraseTraducida += " "

    # Imprime la frase en Código Morse
    print(f"The Morse Code '{fraseMorse}' in natural text is: '{fraseTraducida}'.")


def morse_translator(frase: str):

    esMorse = False

    # Si alguna de las letras de la frase, está en los Valores del diccionario, lo traducirá a Texto Natural
    # En caso contrario, lo traduce a Morse.
    for letra in frase.lower().split():

        # Si la letra se encuentra en los valores del diccionario de morse, deja la traducción a Morse
        if letra in dicMorse.values():
            esMorse = True

    if esMorse:
        traduc_español(frase)

    else:
        traduc_morse(frase.lower())



morse_translator("hola mundo")
morse_translator("···· --- ·-·· ·-")
        
        
        
        

          
                

