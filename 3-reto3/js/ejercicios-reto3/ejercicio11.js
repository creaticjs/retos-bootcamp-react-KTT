function calculatePrime(){
	 var number=parseInt(document.getElementById("number").value);

	if(number < -0){
    $('.toast').toast('show');
    }
    else{
	var prime=0, res;
	for(var i=1; i<=number; i++){
		if(number%i==0) prime+=1;
	}
	if(prime==2){
		res="es primo";
	}
	else{
		res="no es primo";
		}
        document.getElementById("result").innerHTML=`El número ${res}`;  
    }
}

