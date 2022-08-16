<?php
$cont=0;

while ($cont < 100){
    $cont++;
    if ($cont%3==0 and $cont%5==0){
        print("fizzbuzz");
    } else if ($cont%3==0) {
        print("fizz");   
    } else if ($cont%5==0){    
        print("buzz");  
    } else {
        print($cont);
    }
}

?>