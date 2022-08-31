def decimal_a_binario(num):
    binario = 0
    multiplicador = 1

    while num != 0:
        binario = binario + num % 2 * multiplicador
        num = num // 2
        multiplicador = multiplicador * 10

    return binario

print("El número 5 en binario es: ", decimal_a_binario(5))
print("El número 35 en binario es: ", decimal_a_binario(35))
print("El número 22301 en binario es: ", decimal_a_binario(22301))
