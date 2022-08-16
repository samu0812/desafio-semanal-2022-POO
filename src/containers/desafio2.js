function fibonacci(n){
    if (n<2)
        return n
    else
        return fibonacci(n-1) + fibonacci(n-2);
}

for (i=0; i<=52; i++){
    console.log(fibonacci(i));
}
