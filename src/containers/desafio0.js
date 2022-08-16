var cont=0

while (cont < 100){
    cont+=1
    if (cont%3==0 && cont%5==0)
        console.log("fizzbuzz")
    else if (cont%3==0)
        console.log("fizz")   
    else if (cont%5==0)    
        console.log("buzz")  
    else
        console.log("", cont)
}