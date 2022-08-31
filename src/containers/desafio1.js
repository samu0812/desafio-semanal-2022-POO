var palabra1 = "mora"
var palabra2 = "roma"

function anagrama(palabra1, palabra2){
    palabra1 = palabra1.toLowerCase().split("").sort().join("")
    palabra2 = palabra2.toLowerCase().split("").sort().join("")
    if (palabra1 == palabra2)
        console.log("True")
    else
        console.log("False")
}

anagrama(palabra1, palabra2)