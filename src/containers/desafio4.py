#Crea una única función 
#(importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono. 
#- La función recibirá por parámetro sólo UN polígono a la vez.
#- Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
#- Imprime el cálculo del área de un polígono de cada tipo.

#Triangulo: (base*altura)/2
#cuadrado: base*altura
#rectangulo: base*altura




def areaPol(base,altura,poligono):
    if poligono == "Triángulo" or poligono == "triángulo":
        print(f"el área del {poligono} es:")
        return (base*altura)/2
    else:
        print(f"el área del {poligono} es:")
        return base*altura
    
print("",areaPol(2,2,"triángulo"))
print("",areaPol(18,4,"rectangulo"))
print("",areaPol(77,32,"cuadrado"))