palabra1 = "mora"
palabra2 = "roma"

function Anagrama(palabra1, palabra2){
    palabra1 = palabra1.toLowerCase().split("").sort().join("")
    palabra2 = palabra2.toLowerCase().split("").sort().join("")
    if (palabra1 == palabra2)
        console.log("True")
    else
        console.log("False")
}

Anagrama(palabra1, palabra2)