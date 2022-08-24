<?php
function numprimo($numero1, $divisor=2){
    if ($divisor>= $numero1) {
        echo($numero1);
    }    
elseif ($numero1 % $divisor != 0){
        $divisor2= $divisor+1;
        numprimo($numero1,$divisor2);
    }
}

$contador=1;
while ($contador<100){
    numprimo($contador);
    $contador++;
    }

?>