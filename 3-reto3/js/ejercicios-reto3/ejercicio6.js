function calcularHora() {

    var hora1=document.getElementById("hora1").value;
    var  arr =hora1.split(":");
   	
   	var hours= parseInt(arr[0]);
   	var hora2= ((hours + 11) % 12 + 1);
   	var jornada;

   	if (hours >= 12){

   		jornada="pm";
   	}
   	else{
   		jornada = "am";
   	}

    if(hora1.length >5){
    $('.toast').toast('show',5000);
    }
    else{
        document.getElementById("result").innerHTML=`La hora es ${hora2}:${arr[1]} ${jornada} `;
    }
   
   	console.log(hora2+":"+arr[1]+" "+jornada);
  }