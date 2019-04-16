
function calculateSalary() {
   
    var currentSalary=parseFloat(document.getElementById("currentSalary").value);

    var newSalary=0;

	if(currentSalary<0){
        $('.toast').toast('show');
	}
	else if(currentSalary>=0 && currentSalary<=9000){
		newSalary=currentSalary+currentSalary*0.2;
	}
	else if(currentSalary>=9001 && currentSalary<=15000){
		newSalary=currentSalary+currentSalary*0.1;
	}
	else if(currentSalary>=15000 && currentSalary<=20000){
		newSalary=currentSalary+currentSalary*0.05;
	}
	else if(currentSalary>=20000){
		newSalary=currentSalary;
	}
    
    document.getElementById("result").innerHTML=`El nuevo salario es: ${newSalary}`;

  }    
