class cadenas:
    def __init__(self,str1,str2):
        self.str1= str1
        self.str2= str2
        self.lst1=[]
        self.lst2=[]
    def cadena1(self,str1, str2):
        for letra in self.str1:
            if letra not in self.str2:
                self.lst1.append(letra)
        print("".join(self.lst1)) 
    
    def cadena2(self,str1,str2):
        for letra in self.str2:
            if letra not in self.str1:
                self.lst2.append(letra)            
        print("".join(self.lst2))   

caden= cadenas("felicidades","programacion")
print(caden.cadena1("felicidades","programacion"))
print(caden.cadena2("felicidades","programacion"))
