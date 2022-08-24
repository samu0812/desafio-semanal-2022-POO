<?php
function areaPol($base,$altura,$poligono)
{
    if ($poligono == "Triangulo" || $poligono == "triangulo"){
        $area= ($base*$altura)/2;
        echo("el área del $poligono es: $area");
        
    }    
    else {
        $area= ($base*$altura);
        echo("el área del $poligono es: $area" );
        
    }
}
echo areaPol(2,2,"triangulo");
echo areaPol(18,4,"rectangulo");
echo areaPol(77,32,"cuadrado");
?>
