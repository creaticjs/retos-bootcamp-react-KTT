const PI=3.1416;
function calcularCirculo() {

    var radio=parseFloat(document.getElementById("radio").value);
    
    var circunferencia=2*PI*radio;
    var area=PI*Math.pow(radio,2);
    var diametro=(circunferencia)/PI;

    console.log(circunferencia);
    console.log(area);
    console.log(diametro);

    document.getElementById("result").innerHTML=`La circunferencia es ${circunferencia}`;
    document.getElementById("result2").innerHTML= `El área es ${area}`;
   	document.getElementById("result3").innerHTML= `El diametro es ${diametro}`;
}