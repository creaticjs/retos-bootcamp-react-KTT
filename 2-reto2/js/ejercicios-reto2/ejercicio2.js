


const G= 6.673*Math.pow(10,-11);


function calcularFuerza() {


var m1=parseFloat(document.getElementById("masa1").value);
var m2=parseFloat(document.getElementById("masa2").value);
var d=parseFloat(document.getElementById("distancia").value);

var fuerza=(G*m1*m2)/(Math.pow(d,2));
fuerza=(fuerza/(Math.pow(10,-5))).toFixed(7);
console.log(fuerza);
document.getElementById("result").innerHTML=`La fuerza de atracción es ${fuerza} Dinas`;
}

