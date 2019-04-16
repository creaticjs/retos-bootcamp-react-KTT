function calcularHora() {

    var hora1=document.getElementById("hora1").value;
    var  arr =hora1.split(",");
   	
    var dia= arr[0];

    if(arr.length <2 || arr[1]==undefined || arr[0]==undefined){
    $('.toast').toast('show');
    }
    

   	var mes_anio= arr[1].trim();
    console.log(mes_anio);
    mes_anio=mes_anio.split(" ");

    mes=mes_anio[0].toLowerCase();
    console.log(mes);
    anio=mes_anio[1];
    console.log(anio);

    switch(mes){
      case 'enero': mes=1;
        break;
      case 'febrero': mes=2;
        break;
      case 'marzo': mes=3;
        break;
      case 'abril': mes=4;
        break;
      case 'mayo': mes=5;
        break;
      case 'junio': mes=6;
        break;
      case 'julio': mes=7;
        break;
      case 'agosto': mes=8;
        break;
      case 'septiembre': mes=9;
        break;
      case 'octubre': mes=10;
        break;
      case 'noviembre': mes=11;
        break;
      case 'diciembre': mes=12;
        break;
    }

   	console.log(dia+" "+mes+" "+anio);
    document.getElementById("result").innerHTML=`El resultado es ${dia} ${mes} ${anio}`;
    
  }