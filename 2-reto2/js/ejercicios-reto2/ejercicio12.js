function calcularEdad(){
	 var fecha_naciento=document.getElementById("fecha_nacimiento").value;

    
    
   

	 var birthday_arr = fecha_naciento.split("/");

    if( birthday_arr.length !=3 ){
    $('.toast').toast('show',5000);
    }

	 var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
	 var ageDif = Date.now() - birthday_date.getTime();
	 var ageDate = new Date(ageDif);
    var anios=Math.abs(ageDate.getFullYear() - 1970);
    var meses=Math.abs(ageDate.getMonth());
    
    if (anios==0){
    	console.log(meses+" meses");
        document.getElementById("result").innerHTML=`La edad es ${meses} meses`;
    }
    else{
    document.getElementById("result").innerHTML=`La edad es ${anios} años`;
	}


}