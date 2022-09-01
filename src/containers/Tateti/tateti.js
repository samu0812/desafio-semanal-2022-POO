var turno = 0; //turno empieza en 0
var partidaAcabada= false;//false:no acabo. true: acabo
var txtGanador = document.getElementById("txtGanador");//por medio del Id del html obtiene el elemento txt
var botones = Array.from(document.getElementsByTagName("button")); //Obtiene todos los elementos del boton
var reiniciar= document.getElementById("reset");
//obtiene elconjunto de datos html
//array.from permite crear arrays de objetos

botones.forEach(pulsar => pulsar.addEventListener("click", jugar));

//recorre el array, cada una de las posiciones
//todos los botones, cuando los pulse que se ejecute la funcion
reiniciar.addEventListener("click", _ => location.reload());//carga de nuevo la URL

//el event hace referencia a los datos del evento que ah invocado el evento jugar. el click sobre el boton
//crea esa interacion entre el usuario y el boton cuando se pulsa el boton, lo cual produce un evento 
function jugar(event){
    var btnPulsado = event.target;//elemento pulsado
    if (partidaAcabada==false && btnPulsado.innerHTML == ""){//verifica que la partida no haya acabado
        turno++;
        if (turno % 2 != 0 && btnPulsado.innerHTML == "" ){//verifica que sea impar y que el boton este null
            btnPulsado.innerHTML= "X";//agrega el simbolo X al boton
        }
        else if(turno % 2==0 && btnPulsado.innerHTML == ""){//verifica que sea par y que el boton este null
            btnPulsado.innerHTML="O"; //agrega el simbolo O al boton
        }
    }

    var finalizar = gano()
    if(finalizar==0 && turno==9){//verifica si la partida finalizo y no hay ganador
        txtGanador.style.visibility = "visible"//el texto html se vuelve visible
        document.getElementById("txtGanador").innerHTML = "EMPATE"
    }
    else if (finalizar==1){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 1 GANA"
    }
    else if (finalizar==2){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA"
    }
    
} 

//funcion para verificar en que filas o culumnas se produce la victoria
function gano(){
    var ganador=0
    partidaAcabada=false
    function igualSimbolo (...valor){//entran n elementos
        valores= valor.map(x=>x.innerHTML);//se crea un nuevo array con los elementos que son iguales
        if (valores[0] != "" && valores.every((x,i,arr)=> x===arr[0])){//el boton no puede estar vacio. 
            //el every determina si los elementos en el array satisfacen una condicion            
            //comprueba que cada elemento que paso, sea igual al primer elemento
            valor.forEach(boton => boton.style.backgroundColor = "Blue")
            return true;
        }
        else{
            return false;
        }
    }

    if (igualSimbolo(botones[0],botones[1],botones[2])){
        partidaAcabada=true;
    }  
    else if (igualSimbolo(botones[3],botones[4],botones[5])){
        partidaAcabada=true;
    }  
    else if (igualSimbolo(botones[6],botones[7],botones[8])){
        partidaAcabada=true;
    }  
    else if (igualSimbolo(botones[0],botones[3],botones[6])){
        partidaAcabada=true;
    }  
    else if (igualSimbolo(botones[1],botones[4],botones[7])){
        partidaAcabada=true;
    }   
    else if (igualSimbolo(botones[2],botones[5],botones[8])){
        partidaAcabada=true;
    }   
    else if (igualSimbolo(botones[0],botones[4],botones[8])){
        partidaAcabada=true;
    }  
    else if (igualSimbolo(botones[2],botones[4],botones[6])){
        partidaAcabada=true;
    }
    
    if (partidaAcabada==true){
        if(turno % 2!=0){// si es impar gana jugador 1
            ganador=1;
        }
        else{// par gana jugador 2
            ganador=2;
        }
    }
    return ganador

}

