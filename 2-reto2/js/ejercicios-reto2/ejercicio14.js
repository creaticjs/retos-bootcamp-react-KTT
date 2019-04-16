function calcularBisiesto(){
	var year=parseInt(document.getElementById("year").value);
     var res;
     if((year %4 == 0) && ((year % 100!=0) || (year % 400==0))){
          res="es bisiesto"
     }
     else{
          res="no es bisiesto"
     }

     document.getElementById("result").innerHTML=`El año ${res}`;

}