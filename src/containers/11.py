class Palabra():
    def _init_(self,palabra1,palabra2) :
        self.palabra1 = palabra1
        self.palabra2 = palabra2
    def fn_interc(self):
        lst=[]
        lst2=[]
        var_guion="-"
        
        for i in self.palabra1:
            if i not in self.palabra2:
                lst.append(i)
                out1= var_guion.join(lst)
        print(f"el out 1 es {out1}")
        for i in self.palabra2:
            if i not in self.palabra1:
                lst2.append(i)
                out2= var_guion.join(lst2)
        print(f"el out 2 es {out2}")
samuel = Palabra()

print(samuel.fn_interc(" ","samuel", "dientes"))