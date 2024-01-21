let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

    function verificarIntento() {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        
        if(numeroDeUsuario===numeroSecreto){
            asignarTextoElemento('p',`¡Lo lograste! en ${intentos} ${(intentos == 1) ? 'intento.' : 'intentos.'}`);
            
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        } else{
            if(numeroDeUsuario<numeroSecreto){
                asignarTextoElemento('p','El número es mayor.');
            }else{
                
                asignarTextoElemento('p','El número es menor.');
                
                
            }
            
            intentos ++;
            limpiarCaja();
        }
        return  
    }

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('p',`Ingresas un número del 1 a ${numeroMaximo}`);
    intentos =1;
    numeroSecreto = generarNumeroSecreto();
   
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}
    function generarNumeroSecreto() { 
        let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo +1));

        

        if(numerosSorteados.length == numeroMaximo){

            asignarTextoElemento('p','Ya jugaste todos los numeros posibles');
            
        } else {
            
            
            if (numerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                numerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
        }
    
    function limpiarCaja(){
        document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();   
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
  
