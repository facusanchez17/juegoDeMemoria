let vectorNumeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
vectorNumeros=vectorNumeros.sort(()=>{return Math.random()-0.5});

let boton1=null;
let resultado1=0;
let boton2=null;
let resultado2=0;
let botonDestapado=0;
let movimientos=0;
let masMovimiento=document.getElementById(`movimientos`);
let acertados=0;
let masAcierto=document.getElementById('aciertos');
let tiempoRestante=30;
let tiempo=document.getElementById(`trestante`)
let regulador=true;

function destapar(id){
    if (boton1==null) {
        let cuentaRegresiva = setInterval(()=>{
            tiempoRestante--;
            tiempo.innerHTML=`TIEMPO RESTANTE: <br>${tiempoRestante} seg`;
            if (tiempoRestante == 0){
                clearInterval(cuentaRegresiva);
                regulador=false;
                tiempo.innerHTML=`TE QUEDASTE SIN TIEMPO 😕❌`;
                masAcierto.innerHTML=`PUDISTE ACERTAR: ${acertados}`;
                masMovimiento.innerHTML=`MOVIMIENTOS REALIZADOS: ${movimientos}`
            }
            if (acertados==8){
                regulador==false;
                clearInterval(cuentaRegresiva);
                masAcierto.innerHTML=`ACERTASTE TODAS 🥳🎉`;
                masMovimiento.innerHTML=`REALIZASTE ${movimientos} MOVIMIENTOS ♟️`;
                let tiempoTardo=30-tiempoRestante;
                tiempo.innerHTML=`TARDASTE ${tiempoTardo} SEG ⌛`;
            }
          }, 1000)
    }
    if (regulador==true){
        botonDestapado++;
        if (botonDestapado==1){
            boton1=document.getElementById(id);
            resultado1=vectorNumeros[id-1];
            boton1.innerHTML=resultado1;
            boton1.disabled=true;
        }
        if (botonDestapado==2){
            boton2=document.getElementById(id);
            resultado2=vectorNumeros[id-1];
            boton2.innerHTML=resultado2;
            boton2.disabled=true;
            movimientos++;
                masMovimiento.innerHTML=`MOVIMIENTOS: `+movimientos;
            if (resultado1==resultado2){
                botonDestapado=0;
                acertados++;
                masAcierto.innerHTML=`ACERTADOS: ${acertados}`;
                boton1.style.backgroundColor = 'rgb(90, 218, 107)';
                boton2.style.backgroundColor = 'rgb(90, 218, 107)';
            }else{
                boton1.style.backgroundColor = 'rgb(255, 121, 121)';
                boton2.style.backgroundColor = 'rgb(255, 121, 121)';
                setTimeout(()=>{
                    botonDestapado=0;
                    boton1.style.backgroundColor = 'rgb(161, 161, 161,.5)';
                    boton2.style.backgroundColor = 'rgb(161, 161, 161,.5)';
                    boton1.disabled=false;
                    boton2.disabled=false;
                    boton1.innerHTML=``;
                    boton2.innerHTML=``;
                },700)
            } 
        }
    }
    
}