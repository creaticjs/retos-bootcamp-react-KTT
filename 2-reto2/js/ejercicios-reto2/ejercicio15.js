function diasEnUnMes(mes, año) {
	return new Date(año, mes, 0).getDate();
}

function calcularDias() {


    var mes=parseFloat(document.getElementById("mes").value);
    var anio=parseFloat(document.getElementById("anio").value);
    
    console.log(diasEnUnMes(mes,anio));

    document.getElementById("result").innerHTML=`Los dias son ${diasEnUnMes(mes,anio)} `;
 }