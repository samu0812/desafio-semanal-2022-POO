#crea una funcion que reciba dos cadenas como parametro (str1, str2)
#e imprima otras dos cadenas como salida (out1, out2). out1 contendra todos los caracteres
#presentes en la str1 pero no esten presentes en str2. out2 contendra todos los caracteres presentes
#en la str2 pero no esten presentes en str1 



str1= "felicidades"
str2= "programacion"

lst1=[]
lst2=[]

def cadenas(str1, str2):
    for letra1 in str1:
        if letra1 in str2:
            return False
        else:
            lst1.append(letra1)
        
    for letra2 in str2:
        if letra2 in str1:
            return False
        else:
            lst2.append(letra2)  
    print("".join(lst1))        
    print("".join(lst2))   


cadenas(str1, str2)