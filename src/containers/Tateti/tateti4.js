let turno = 0;
let fichas = ["O", "X"];
puestas=0;
let partidaAcabada= false;//false:no acabo. true: acabo
let textoVictoria = document.getElementById("txtGanador");
let botones = Array.from(document.getElementsByTagName("button")); 

botones.forEach(x => x.addEventListener("click", ponerFicha()));

function ponerFicha(event){
    let btnPulsado= event.target;
    turno++;
    if (partidaAcabada==false){
        if (turno % 2!=0 && btnPulsado.innerHTML == "" ){
            btnPulsado.innerHTML= "X";
        }
        else if(turno % 2==0 && btnPulsado.innerHTML == ""){
            btnPulsado.innerHTML="O"; 
        }
    }
}

function gano(){

}

let turno = 0;
let fichas = ["O", "X"];
puestas=0;
let partidaAcabada= false;//false:no acabo. true: acabo
let textoVictoria = document.getElementById("txtGanador");
let botones = Array.from(document.getElementsByTagName("button")); 

botones.forEach(x => x.addEventListener("click", ponerFicha()));


function ponerFicha(event){
    const btnPulsado = event.target;
    turno++;
    if (partidaAcabada==false){
        if (turno % 2 != 0 && btnPulsado.innerHTML == "" ){
            btnPulsado.innerHTML= "X";
        }
        else if(turno % 2==0 && btnPulsado.innerHTML == ""){
            btnPulsado.innerHTML="O"; 
        }
    }
}

function gano(){

}
<section>
            <aside class="sectionAside">
                <h2 class="sectionAsideH2" id="j1titulo">JUGADOR 1</h2>
                <picture class="imagenJ1">
                    <img src="./imagenes/j1.jpg" alt="Inicial" id="imgJ1" class="img1">
                </picture>
                <div class="puntos">
                    <p class="puntuacion">Puntuación:</p>
                    <p class="puntosNum" id="puntosj1">0</p>
                </div>
    
            </aside>
        </section>