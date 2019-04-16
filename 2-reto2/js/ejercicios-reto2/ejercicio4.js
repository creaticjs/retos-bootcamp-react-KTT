
function calcularHipotenusa() {


    var l1=parseFloat(document.getElementById("lado1").value);
    var l2=parseFloat(document.getElementById("lado2").value);
    
    var hipo= (Math.sqrt(Math.pow(l2,2)+Math.pow(l1,2))).toFixed(4);
    
    document.getElementById("result").innerHTML=`La hipotenusa es ${hipo}`;
    }