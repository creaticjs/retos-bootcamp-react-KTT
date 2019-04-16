document.getElementById("t").style.display = "none";
var media=0;
function calcularMedia() {
   
    var nota1=parseFloat(document.getElementById("nota1").value);
    var nota2=parseFloat(document.getElementById("nota2").value);
    var nota3=parseFloat(document.getElementById("nota3").value);
    var nota4=parseFloat(document.getElementById("nota4").value);
    var td= document.querySelector('td');
    console.log(nota1);
    
    if(nota1 <0  || nota1>100 || nota2 <0  || nota2>100 || nota3 <0  || nota3>100 || nota4 <0  || nota4>100){
    $('.toast').toast('show',5000);
    }
    else{
         document.getElementById("t").style.display = "block";
    }

    function puntuacion(num){
        document.getElementById("puntuacion").innerHTML=num;
    }
   
        media=(nota1+nota2+nota3+nota4)/4;
        document.getElementById("media").innerHTML=media;
    
   
    if ( media >= 90 && media <= 100){ 
        puntuacion("A");
        td.classList.add('verde');
    }
    else if( media >= 80 && media < 89){
        puntuacion("B");
        td.classList.add('verde');
 }

    else if ( media >= 70 && media < 79){
        puntuacion("C");
        td.classList.add('azul');
     }
    else if( media >= 60 && media < 69){
        puntuacion("D");
        td.classList.add('rojo');
     }

    else if ( media >=0 && media < 59){
        puntuacion("E");
        td.classList.add('rojo');  
    }


  }    
