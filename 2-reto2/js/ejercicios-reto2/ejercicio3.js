const c= 2.997925*Math.pow(10,10);


function calcularEnergia() {


var masa=parseFloat(document.getElementById("masa").value);


var energia=(c*Math.pow(masa,2)).toExponential(2);

document.getElementById("result").innerHTML=`La energia es ${energia} Ergios`;
}