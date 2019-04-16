function calcularSalario() {

	var horas=parseInt(document.getElementById("horas").value);
	var precio=parseFloat(document.getElementById("precio").value);

	var salario;
	if(horas <= 38){
		salario=horas*precio;
	}
	else if(horas >38){
		var horas_=horas-38;
		salario=(38*precio)+(horas_*1.5*precio);
		console.log(salario);

	}

	if (salario > 50000){
		salario-=salario*(0.1);
	}

	console.log(salario);

	if( horas<0 || precio <0 ){
    $('.toast').toast('show',5000);
    }

	document.getElementById("result").innerHTML=`El salario es ${salario} `;
 }