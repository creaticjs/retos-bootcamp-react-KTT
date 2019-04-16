
function calcularArea() {


    var ladoa=parseFloat(document.getElementById("ladoa").value);
    var ladob=parseFloat(document.getElementById("ladob").value);
    var ladoc=parseFloat(document.getElementById("ladoc").value);
    
    var p=(ladoa+ladob+ladoc)/2;
    var area=(Math.sqrt(p*(p-ladoa)*(p-ladob)*(p-ladoc))).toFixed(4);
    
    document.getElementById("result").innerHTML=`El area es ${area}`;
    }