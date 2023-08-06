
// funcion para ejecutar al pasar 3 segundos sin que se mueva el mouse
/*
let temporizador;
document.addEventListener('mousemove', () => {
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    // Aquí va el código que quieres ejecutar después de 3 segundos de inactividad del mouse
    alert("Llevas 3 segundos de no mover el mouse");
  }, 3000);
});
*/



//#region  codigo para mostrar y ocultar parrafo


        // prodecimientos para mostrar los parrafos
        function temaUno (){
            let tema = document.getElementById("sub-contenido");

            tema.style.display = "block";
            document.getElementById("sub-contenido1").style.display = "none";
            document.getElementById("sub-contenido2").style.display = "none";
            document.getElementById("sub-contenido3").style.display = "none";
            document.getElementById("sub-contenido4").style.display = "none";
            document.getElementById("sub-contenido5").style.display = "none";
            document.getElementById("tema5").style.display = "none";
        }
        function tema2(){
            let tema = document.getElementById("sub-contenido1");

            tema.style.display = "block";
            document.getElementById("sub-contenido").style.display = "none";
            document.getElementById("sub-contenido2").style.display = "none";
            document.getElementById("sub-contenido3").style.display = "none";
            document.getElementById("sub-contenido4").style.display = "none";
            document.getElementById("sub-contenido5").style.display = "none";
            document.getElementById("tema5").style.display = "none";
        }

        function tema3(){
            let tema = document.getElementById("sub-contenido2");

            tema.style.display = "block";
            document.getElementById("sub-contenido").style.display = "none";
            document.getElementById("sub-contenido1").style.display = "none";
            document.getElementById("sub-contenido3").style.display = "none";
            document.getElementById("sub-contenido4").style.display = "none";
            document.getElementById("sub-contenido5").style.display = "none";
            document.getElementById("tema5").style.display = "none";
        }
        function tema4(){
            let tema = document.getElementById("sub-contenido3");

            tema.style.display = "block";
            document.getElementById("sub-contenido").style.display = "none";
            document.getElementById("sub-contenido1").style.display = "none";
            document.getElementById("sub-contenido2").style.display = "none";
            document.getElementById("sub-contenido4").style.display = "none";
            document.getElementById("sub-contenido5").style.display = "none";
            document.getElementById("tema5").style.display = "none";
        }
        function tema5(){
            let tema = document.getElementById("tema5");

            // Uso de Jquery para validar que el div con id tema5 es visible
            let isVisible = $("#tema5").is(":visible");

            // Uso de Jquery para validar que el div con id tema5 es visible
            if(isVisible){
                tema.style.display = "none";
            }else{
                tema.style.display = "block";
            }
        
            document.getElementById("sub-contenido").style.display = "none";
            document.getElementById("sub-contenido1").style.display = "none";
            document.getElementById("sub-contenido2").style.display = "none";
            document.getElementById("sub-contenido3").style.display = "none";
            document.getElementById("sub-contenido4").style.display = "none";
            document.getElementById("sub-contenido5").style.display = "none";
        }

        function cerrar(){
            document.getElementById("tema5").style.display = "none";
        }

        function tema5_1(){

            let contenid_4 = $("#sub-contenido4").is(":visible");
            let tema = document.getElementById("sub-contenido4");

            if(contenid_4){
                tema.style.display = "none";
            }else{
                tema.style.display = "block";
                document.getElementById("sub-contenido5").style.display = "none";
            }
            
            
        }
        function tema5_2(){

            let contenid_5 = $("#sub-contenido5").is(":visible");
            let tema = document.getElementById("sub-contenido5");

            if(contenid_5){
                tema.style.display = "none";
            }else{
                tema.style.display = "block";
                document.getElementById("sub-contenido4").style.display = "none";
            }
        }


//#endregion


//#region    funciones para controlar los cuadros de DDL

function item1(){

    let temaVisble1 = $("#item1_1_1").is(":visible");

    if(temaVisble1){
        let mas1 = document.getElementById("mas1");
        mas1.innerHTML = "+"
        document.getElementById("item1_1_1").style.display = "none";
        document.getElementById("item2").style.marginTop = "-10px";  

    }else{
        let mas1 = document.getElementById("mas1");
        mas1.innerHTML = "-";

        document.getElementById("mas5").innerHTML = "+";
        document.getElementById("mas2").innerHTML = "+";
        document.getElementById("mas3").innerHTML = "+";
        document.getElementById("mas4").innerHTML = "+";

        document.getElementById("item1_1_1").style.display = "block";
        document.getElementById("item2_1_1").style.display = "none";
        document.getElementById("item3_1_1").style.display = "none";
        document.getElementById("item4_1_1").style.display = "none";
        document.getElementById("item5_1_1").style.display = "none";

        // se declaran las varaibles para capturar si son visible
        let item2 = $("item2_1_1").is(":visible");
        let item3 = $("item3_1_1").is(":visible");
        let item4 = $("item4_1_1").is(":visible");
        let item5 = $("item5_1_1").is(":visible");

        // se valida en el if negadas para que pueda entrar al if
        
        if(!item2 && !item3 && !item4 && !item5){

            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item2").style.marginTop = "150px";  
            document.getElementById("item1").style.marginTop = "0px";
            document.getElementById("item5").style.marginTop = "0px";
            document.getElementById("item3").style.marginTop = "0px";
            document.getElementById("item4").style.marginTop = "0px";   
        }
    }

}

function item2(){

    let temaVisble2 = $("#item2_1_1").is(":visible");

    if (temaVisble2){

        let mas2 = document.getElementById("mas2");
        mas2.innerHTML = "+"

        document.getElementById("item2_1_1").style.display = "none";
        document.getElementById("item3").style.marginTop = "-10px";

    }else{
        let mas2 = document.getElementById("mas2");
        mas2.innerHTML = "-";

        document.getElementById("mas1").innerHTML = "+";
        document.getElementById("mas5").innerHTML = "+";
        document.getElementById("mas3").innerHTML = "+";
        document.getElementById("mas4").innerHTML = "+";

        document.getElementById("item2_1_1").style.display = "block";
        document.getElementById("item1_1_1").style.display = "none";
        document.getElementById("item3_1_1").style.display = "none";
        document.getElementById("item4_1_1").style.display = "none";
        document.getElementById("item5_1_1").style.display = "none";

            // se declaran las varaibles para capturar si son visible
            let item2 = $("item1_1_1").is(":visible");
            let item3 = $("item3_1_1").is(":visible");
            let item4 = $("item4_1_1").is(":visible");
            let item5 = $("item5_1_1").is(":visible");
            
            console.log(item2, item3, item4, item5);

            if(!item2 && !item3 && !item4 && !item5){

                // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
                // quede espacio para mostrar el contenido del item 1
                document.getElementById("item3").style.marginTop = "220px";    
                document.getElementById("item1").style.margin = "0px";
                document.getElementById("item2").style.margin = "0px";
                document.getElementById("item5").style.margin = "0px";
                document.getElementById("item4").style.margin = "0px"; 
            }

    }
}

function item3(){

    let temaVisble3 = $("#item3_1_1").is(":visible");

    if(temaVisble3){
        let mas3 = document.getElementById("mas3");
        mas3.innerHTML = "+";

        document.getElementById("item3_1_1").style.display = "none";
        document.getElementById("item4").style.marginTop = "-10px";

    }else{

        let mas3 = document.getElementById("mas3");
        mas3.innerHTML = "-";

        document.getElementById("mas1").innerHTML = "+";
        document.getElementById("mas2").innerHTML = "+";
        document.getElementById("mas5").innerHTML = "+";
        document.getElementById("mas4").innerHTML = "+";

            document.getElementById("item3_1_1").style.display = "block";
            document.getElementById("item2_1_1").style.display = "none";
            document.getElementById("item1_1_1").style.display = "none";
            document.getElementById("item4_1_1").style.display = "none";
            document.getElementById("item5_1_1").style.display = "none";

                    // se declaran las varaibles para capturar si son visible
                    let item2 = $("item1_1_1").is(":visible");
                    let item3 = $("item2_1_1").is(":visible");
                    let item4 = $("item4_1_1").is(":visible");
                    let item5 = $("item5_1_1").is(":visible");
                    
                    console.log(item2, item3, item4, item5);
            
                    if(!item2 && !item3 && !item4 && !item5){
            
                        // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
                        // quede espacio para mostrar el contenido del item 1
                        document.getElementById("item4").style.marginTop = "190px";     
                        document.getElementById("item1").style.margin = "0px";
                        document.getElementById("item2").style.margin = "0px";
                        document.getElementById("item3").style.margin = "0px";
                        document.getElementById("item5").style.margin = "0px";
                    }
                    
        }

}

function item4(){

    let temaVisible4 = $("#item4_1_1").is(":visible");

    if(temaVisible4){

        let mas4 = document.getElementById("mas4");
        mas4.innerHTML = "+";
        document.getElementById("item4_1_1").style.display = "none";
        document.getElementById("item5").style.marginTop = "-10px";

    }else{
        let mas4 = document.getElementById("mas4");
        mas4.innerHTML = "-";

        document.getElementById("mas1").innerHTML = "+";
        document.getElementById("mas2").innerHTML = "+";
        document.getElementById("mas3").innerHTML = "+";
        document.getElementById("mas5").innerHTML = "+";

        document.getElementById("item4_1_1").style.display = "block";   
        document.getElementById("item2_1_1").style.display = "none";
        document.getElementById("item3_1_1").style.display = "none";
        document.getElementById("item1_1_1").style.display = "none";
        document.getElementById("item5_1_1").style.display = "none";

        // se declaran las varaibles para capturar si son visible
        let item2 = $("item1_1_1").is(":visible");
        let item3 = $("item2_1_1").is(":visible");
        let item4 = $("item3_1_1").is(":visible");
        let item5 = $("item5_1_1").is(":visible");
        

        if(!item2 && !item3 && !item4 && !item5){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item5").style.marginTop = "170px";  
            document.getElementById("item1").style.marginTop = "0px";
            document.getElementById("item2").style.marginTop = "0px";
            document.getElementById("item3").style.marginTop = "0px";
            document.getElementById("item4").style.marginTop = "0px";
        } 
    }
}

function item5(){

    let temaVisible5 = $("#item5_1_1").is(":visible");

    if(temaVisible5){
        let mas5 = document.getElementById("mas5");
        mas5.innerHTML = "+";
        document.getElementById("item5_1_1").style.display = "none";

    }else{
        let mas5 = document.getElementById("mas5");
        mas5.innerHTML = "-";

        document.getElementById("mas1").innerHTML = "+";
        document.getElementById("mas2").innerHTML = "+";
        document.getElementById("mas3").innerHTML = "+";
        document.getElementById("mas4").innerHTML = "+";

        document.getElementById("item5_1_1").style.display = "block";
        document.getElementById("item2_1_1").style.display = "none";
        document.getElementById("item3_1_1").style.display = "none";
        document.getElementById("item4_1_1").style.display = "none";
        document.getElementById("item1_1_1").style.display = "none";
        // se declaran las varaibles para capturar si son visible
        let item2 = $("item1_1_1").is(":visible");
        let item3 = $("item2_1_1").is(":visible");
        let item4 = $("item3_1_1").is(":visible");
        let item5 = $("item4_1_1").is(":visible");
        
    
        if(!item2 && !item3 && !item4 && !item5){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item5").style.marginTop = "0px";  
            document.getElementById("item1").style.marginTop = "0px";
            document.getElementById("item2").style.marginTop = "0px";
            document.getElementById("item3").style.marginTop = "0px";
            document.getElementById("item4").style.marginTop = "0px";
        } 
    }
}

function item6(){

    let temaVisible6 = $("#item6_1_1").is(":visible");
    if(temaVisible6){
        let mas6 = document.getElementById("mas6");
        mas6.innerHTML = "+";
        document.getElementById("item6_1_1").style.display = "none";
        document.getElementById("item7").style.marginTop = "-10px";

    }else{
        let mas6 = document.getElementById("mas6");
        mas6.innerHTML = "-";


        document.getElementById("mas7").innerHTML = "+";
        document.getElementById("mas8").innerHTML = "+";
        document.getElementById("mas9").innerHTML = "+";

        document.getElementById("item6_1_1").style.display = "block";
        document.getElementById("item7_1_1").style.display = "none";
        document.getElementById("item8_1_1").style.display = "none";
        document.getElementById("item9_1_1").style.display = "none";
    
        // se declaran las varaibles para capturar si son visible
        let item2 = $("item7_1_1").is(":visible");
        let item3 = $("item8_1_1").is(":visible");
        let item4 = $("item9_1_1").is(":visible");
        
        
    
        if(!item2 && !item3 && !item4  ){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item6").style.marginTop = "0px";  
            document.getElementById("item7").style.marginTop = "190px";
            document.getElementById("item8").style.marginTop = "0px";
            document.getElementById("item9").style.marginTop = "0px";          
        } 
    }
}
function item7(){

    let temavisible7 = $("#item7_1_1").is(":visible");

    if(temavisible7){

        let mas7 = document.getElementById("mas7");
        mas7.innerHTML = "+";

        document.getElementById("item7_1_1").style.display = "none";
        document.getElementById("item8").style.marginTop = "-10px";


    }else{
        let mas7 = document.getElementById("mas7");
        mas7.innerHTML ="-";

        document.getElementById("mas8").innerHTML = "+";
        document.getElementById("mas6").innerHTML = "+";
        document.getElementById("mas9").innerHTML = "+";

        document.getElementById("item7_1_1").style.display = "block";
        document.getElementById("item6_1_1").style.display = "none";
        document.getElementById("item8_1_1").style.display = "none";
        document.getElementById("item9_1_1").style.display = "none";
    
        // se declaran las varaibles para capturar si son visible
        let item2 = $("item6_1_1").is(":visible");
        let item3 = $("item8_1_1").is(":visible");
        let item4 = $("item9_1_1").is(":visible");
        
        
    
        if(!item2 && !item3 && !item4){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item6").style.marginTop = "0px";  
            document.getElementById("item7").style.marginTop = "0px";
            document.getElementById("item8").style.marginTop = "220px";
            document.getElementById("item9").style.marginTop = "0px"; 
        } 
    }
    
}
function item8(){

    let temaVisible8 = $("#item8_1_1").is(":visible");

    if(temaVisible8){

        let mas8 = document.getElementById("mas8");
        mas8.innerHTML = "+";
        document.getElementById("item8_1_1").style.display = "none";
        document.getElementById("item9").style.marginTop = "-10px";

    }else{

        let mas8 = document.getElementById("mas8");
        mas8.innerHTML = "-";

        document.getElementById("mas7").innerHTML = "+";
        document.getElementById("mas6").innerHTML = "+";
        document.getElementById("mas9").innerHTML = "+";

        document.getElementById("item8_1_1").style.display = "block";
        document.getElementById("item6_1_1").style.display = "none";
        document.getElementById("item7_1_1").style.display = "none";
        document.getElementById("item9_1_1").style.display = "none";
    
        // se declaran las varaibles para capturar si son visible
        let item2 = $("item6_1_1").is(":visible");
        let item3 = $("item7_1_1").is(":visible");
        let item4 = $("item9_1_1").is(":visible");
        
        
    
        if(!item2 && !item3 && !item4){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item6").style.marginTop = "0px";  
            document.getElementById("item7").style.marginTop = "0px";
            document.getElementById("item8").style.marginTop = "0px";
            document.getElementById("item9").style.marginTop = "270px"; 
        } 
    }
    
}

function item9(){


    // obtiene si true o false si el div es visible
    let temaVisible9 = $("#item9_1_1").is(":visible");

    // valida si esta visible, si esta visible lo oculta si esta oculto lo muestra
    if(temaVisible9){

        let mas9 = document.getElementById("mas9");
        mas9.innerHTML = "+"
        document.getElementById("item9_1_1").style.display = "none";

    }else{ 

        let mas9 = document.getElementById("mas9");
        mas9.innerHTML = "-";

        document.getElementById("mas7").innerHTML = "+";
        document.getElementById("mas6").innerHTML = "+";
        document.getElementById("mas8").innerHTML = "+";

        document.getElementById("item9_1_1").style.display = "block";
        document.getElementById("item6_1_1").style.display = "none";
        document.getElementById("item7_1_1").style.display = "none";
        document.getElementById("item8_1_1").style.display = "none";
    
        // se declaran las varaibles para capturar si son visible
        let item2 = $("item6_1_1").is(":visible");
        let item3 = $("item7_1_1").is(":visible");
        let item4 = $("item8_1_1").is(":visible");
        
        
    
        if(!item2 && !item3 && !item4){
            // cuando el item uno se muestra el dos se desplaza 140 px hacia abajo para que 
            // quede espacio para mostrar el contenido del item 1
            document.getElementById("item6").style.marginTop = "0px";  
            document.getElementById("item7").style.marginTop = "0px";
            document.getElementById("item8").style.marginTop = "0px";
            document.getElementById("item9").style.marginTop = "0px"; 
        } 
    }
    
}

// Al pasar segundos sin mover el mouse se cierran los cuadros
/*
let temporizador2;
document.addEventListener('mousemove', () => {
  clearTimeout(temporizador2);
  temporizador2 = setTimeout(() => {
    // Aquí va el código que quieres ejecutar después de 3 segundos de inactividad del mouse
    document.getElementById("item1_1_1").style.display = "none";  
    document.getElementById("item2_1_1").style.display = "none";
    document.getElementById("item3_1_1").style.display = "none";
    document.getElementById("item4_1_1").style.display = "none";
    document.getElementById("item5_1_1").style.display = "none";

    document.getElementById("item5").style.marginTop = "0px";  
    document.getElementById("item1").style.marginTop = "0px";
    document.getElementById("item2").style.marginTop = "0px";
    document.getElementById("item3").style.marginTop = "0px";
    document.getElementById("item4").style.marginTop = "0px";



  }, 10000);
});

*/


//#region Codigo para que lee el texto





        // Funcionamineto de lectura de parrafos
        //---------------------------------------------------------------

        //             Primer parrafo

        document.getElementById("decir").addEventListener("click",() =>{
            hablar(document.getElementById("parrafo").innerText);
        })

        function hablar(parrafo){
            speechSynthesis.speak(new SpeechSynthesisUtterance(parrafo));
        }
        //-------------------------------------------------------------------

        //              Segundo parrafo

        document.getElementById("decir1").addEventListener("click",() =>{
            hablar(document.getElementById("parrafo1").innerText);
        })

        function hablar(parrafo){
            speechSynthesis.speak(new SpeechSynthesisUtterance(parrafo));
        }
        //--------------------------------------------------------------------

        //                   Tercer parrafo

        document.getElementById("decir2").addEventListener("click",() =>{
            hablar(document.getElementById("parrafo2").innerText);
        })

        function hablar(parrafo){
            speechSynthesis.speak(new SpeechSynthesisUtterance(parrafo));
        }

        // ---------------------------------------------------------------------
        //              4to parrafo

        document.getElementById("decir3").addEventListener("click",() =>{
            hablar(document.getElementById("parrafo3").innerText);
        });

        function hablar(parrafo){
            speechSynthesis.speak(new SpeechSynthesisUtterance(parrafo));
        }



        //-------------------------------------------------------------------------


//#endregion