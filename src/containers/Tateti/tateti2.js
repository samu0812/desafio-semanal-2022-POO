let turno=0;
let txtGanador= document.getElementById("txtGanador")
const btnPulsado = (e) => {
    
    const btn = e.target;
    if (turno % 2!=0 && btn.innerHTML == ""){
        btn.innerHTML= "X";
        turno++;
    }
    else if(turno % 2==0 && btn.innerHTML == ""){
        btn.innerHTML="O";
        turno++;
    }
}
document.querySelectorAll('button').forEach(
    obj =>obj.addEventListener('click', btnPulsado));

function definirGanador(){
    ganador= 0;

    function mismaPosicion(...args){
        valores= args.map(x=>x.innerHTML);
        if (valore[0] != "" && valores.every((x,i,arr)=> x===arr[0])){
            args.forEach(x => x.style.backgroundColor = "Blue")
            turno++;
            return true;
        }
        else{
            return false;
        }
    }
    if (turno % 2!=0 && btn.innerHTML == ""){
        btn.innerHTML= "X";
        tablero[pos]="X";
         ganador();
    }
    else if(turno % 2==0 && btn.innerHTML == ""){
        btn.innerHTML="O";  
        tablero[pos]="O";
        ganador();    
    }

    if (mismaPosicion(botones[0],botones[1],botones[2])){
        ganador=1
    }  
    else if (mismaPosicion(botones[3],botones[4],botones[5])){
        ganador=1
    }  
    else if (mismaPosicion(botones[6],botones[7],botones[8])){
        ganador=1
    }  
    else if (mismaPosicion(botones[0],botones[3],botones[6])){
        ganador=1
    }  
    else if (mismaPosicion(botones[1],botones[4],botones[7])){
        ganador=1
    }   
    else if (mismaPosicion(botones[2],botones[5],botones[8])){
        ganador=1
    }   
    else if (mismaPosicion(botones[0],botones[4],botones[8])){
        ganador=1
    }  
    else if (mismaPosicion(botones[2],botones[4],botones[6])){
        ganador=1
    }  

    if (ganador>0 && turno % 2!=0){
        txtGanador= "EL GANADOR ES JUGADOR 1"
        txtGanador.style.visibility = "visible"
    }
    else if (ganador>0 && turno % 2==0){
        txtGanador= "EL GANADOR ES JUGADOR 2"
        txtGanador.style.visibility = "visible"
    }
    else{
        txtGanador= "EMPATE"
        txtGanador.style.visibility = "visible"
    }
}
const btnPulsado = (e, posicion) => {
    turno++;
    const btn = e.target;
    const valor= turno % 2 ? 'X':'O';
    btn.innerHTML=valor;
    tablero[pos]= valor;
    ganador()

}
function aGanado () {
    if (tablero[0]==tablero[1] && tablero[0]==tablero[2]){
        const ganador=1
        return (msjGanador(ganador))
    }  
    else if (tablero[3]==tablero[4] && tablero[3]==tablero[5]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[6]==tablero[7] && tablero[6]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[0]==tablero[3] && tablero[0]==tablero[6]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[1]==tablero[4] && tablero[1]==tablero[7]){
        const ganador=1
        return msjGanador(ganador)
    }   
    else if (tablero[2]==tablero[5] && tablero[2]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }   
    else if (tablero[0]==tablero[4] && tablero[0]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[2]==tablero[4] && tablero[2]==tablero[6]){
        const ganador=1
        return msjGanador(ganador)
    }  

}
function msjGanador(ganador){
    if (ganador>0 && turno % 2!=0){
        return alert("JUGADOR 1 GANA")
    }
    else if (ganador>0 && turno % 2==0){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA"    
    }
    else{
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = " EMPATE"
    }
}

/**/
let turno=0;
ganador=0
let txtGanador= document.getElementById("txtGanador")
const tablero= []


const btnPulsado = (e, posicion) => {
    turno++;
    const btn = e.target;
    const valor= turno % 2 ? 'X':'O'
    btn.innerHTML=valor;
    tablero[posicion]= valor;
    aGanado()

}
document.querySelectorAll('button').forEach(
    (obj, i) =>obj.addEventListener('click',(e) => btnPulsado(e,i)));

function aGanado () {
    if (tablero[0]==tablero[1] && tablero[0]==tablero[2]){
        const ganador=1
        return (msjGanador(ganador))
    }  
    else if (tablero[3]==tablero[4] && tablero[3]==tablero[5]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[6]==tablero[7] && tablero[6]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[0]==tablero[3] && tablero[0]==tablero[6]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[1]==tablero[4] && tablero[1]==tablero[7]){
        const ganador=1
        return msjGanador(ganador)
    }   
    else if (tablero[2]==tablero[5] && tablero[2]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }   
    else if (tablero[0]==tablero[4] && tablero[0]==tablero[8]){
        const ganador=1
        return msjGanador(ganador)
    }  
    else if (tablero[2]==tablero[4] && tablero[2]==tablero[6]){
        const ganador=1
        return msjGanador(ganador)
    }  

}
function msjGanador(ganador){
    if (ganador>0 && turno % 2!=0){
        return alert("JUGADOR 1 GANA")
    }
    else if (ganador>0 && turno % 2==0){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA"    
    }
    else{
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = " EMPATE"
    }
}

let turno=0;

let txtGanador= document.getElementById("txtGanador")
let botones= Array.from(document.getElementsByTagName("button"))

document.querySelectorAll('button').forEach(
    obj =>obj.addEventListener('click', btnPulsado));

const btnPulsado = (e) => { 
    const btn = e.target;
    if (turno % 2!=0 && btn.innerHTML == ""){
        btn.innerHTML= "X";
        turno++;
    }
    else if(turno % 2==0 && btn.innerHTML == ""){
        btn.innerHTML="O";
        turno++;
    }
    definirGanador()
}


function definirGanador(){
    ganador= 0;

    function mismaPosicion(...args){
        valores= args.map(x=>x.innerHTML);
        if (valores[0] != "" && valores.every((x,i,arr)=> x===arr[0])){
            args.forEach(x => x.style.backgroundColor = "Blue")
            turno++;
            return true;
        }
        else{
            return false;
        }
    }

    if (mismaPosicion(botones[0],botones[1],botones[2])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[3],botones[4],botones[5])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[6],botones[7],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[0],botones[3],botones[6])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[1],botones[4],botones[7])){
        ganador=1
        return msjGanador(ganador);
    }   
    else if (mismaPosicion(botones[2],botones[5],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }   
    else if (mismaPosicion(botones[0],botones[4],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[2],botones[4],botones[6])){
        ganador=1
        return msjGanador(ganador);
    }
    else{
        return ganador=0;
    }
}
function msjGanador(ganador){
    if (ganador>0 && turno % 2!=0){
        return alert("JUGADOR 1 GANA")
    }
    else if (ganador>0 && turno % 2==0){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA"    
    }
    else{
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = " EMPATE"
    }
}  
let turno=0;

let txtGanador= document.getElementById("txtGanador")
let botones= Array.from(document.getElementsByTagName("button"))

document.querySelectorAll('button').forEach(
    obj =>obj.addEventListener('click', btnPulsado));

const btnPulsado = (e) => { 
    const btn = e.target;
    if (turno % 2!=0 && btn.innerHTML == ""){
        btn.innerHTML= "X";
        turno++;
    }
    else if(turno % 2==0 && btn.innerHTML == ""){
        btn.innerHTML="O";
        turno++;
    }
    definirGanador()
}


function definirGanador(){
    ganador= 0;

    function mismaPosicion(...args){
        valores= args.map(x=>x.innerHTML);
        if (valores[0] != "" && valores.every((x,i,arr)=> x===arr[0])){
            args.forEach(x => x.style.backgroundColor = "Blue")
            turno++;
            return true;
        }
        else{
            return false;
        }
    }

    if (mismaPosicion(botones[0],botones[1],botones[2])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[3],botones[4],botones[5])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[6],botones[7],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[0],botones[3],botones[6])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[1],botones[4],botones[7])){
        ganador=1
        return msjGanador(ganador);
    }   
    else if (mismaPosicion(botones[2],botones[5],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }   
    else if (mismaPosicion(botones[0],botones[4],botones[8])){
        ganador=1
        return msjGanador(ganador);
    }  
    else if (mismaPosicion(botones[2],botones[4],botones[6])){
        ganador=1
        return msjGanador(ganador);
    }
}
function msjGanador(ganador){
    if (ganador>0 && turno % 2!=0){
        return alert("JUGADOR 1 GANA")
    }
    else if (ganador>0 && turno % 2==0){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA"    
    }
    else{
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = " EMPATE"
    }
}  

let turno=0;
let partidaAcabada=0;
let txtGanador= document.getElementById("txtGanador")
let botones= Array.from(document.getElementById("button"))

document.querySelectorAll('button').forEach(
    obj =>obj.addEventListener('click', btnPulsado));

const btnPulsado = (e) => {
    turno++;
    const btn = e.target;
    if (turno % 2!=0 && btn.innerHTML == ""){
        btn.innerHTML= "X";
        
    }
    else if(turno % 2==0 && btn.innerHTML == ""){
        btn.innerHTML="O";

    }
    partidaAcabada=definirGanador()
    if (partidaAcabada==0){
        cambiarTurno()
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 1 GANA" 
    }
    if (partidaAcabada==1){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "JUGADOR 2 GANA" 
    }
    if (partidaAcabada==1){
        txtGanador.style.visibility = "visible"
        document.getElementById("txtGanador").innerHTML = "EMPATE" 
    }
}



function definirGanador(){
    ganador= 0;
    nEstado=0;


    function mismaPosicion (...args){
        valores= args.map(x=>x.innerHTML);
        if (valores[0] != "" && valores.every((x,i,arr)=> x===arr[0])){
            args.forEach(x => x.style.backgroundColor = "Blue")
            return true;
        }
        else{
            return false;
        }
    }


    if (mismaPosicion(botones[0],botones[1],botones[2])){
        ganador=1;
    }  
    else if (mismaPosicion(botones[3],botones[4],botones[5])){
        ganador=1;
    }  
    else if (mismaPosicion(botones[6],botones[7],botones[8])){
        ganador=1;
    }  
    else if (mismaPosicion(botones[0],botones[3],botones[6])){
        ganador=1;
    }  
    else if (mismaPosicion(botones[1],botones[4],botones[7])){
        ganador=1;
    }   
    else if (mismaPosicion(botones[2],botones[5],botones[8])){
        ganador=1;
    }   
    else if (mismaPosicion(botones[0],botones[4],botones[8])){
        ganador=1;
    }  
    else if (mismaPosicion(botones[2],botones[4],botones[6])){
        ganador=1;
    }  

    if (ganador>0){
        if(nEstado==1){
            nEstado==1;
        }
        else{
            nEstado=-1;
        }
    }
    return nEstado;

   


}

function cambiarTurno(){
    if(turno==1){
        turno=0;
    }
    else{
        turno=1
    }
}