
function calcularPositivo() {

    
    var numero=parseInt(document.getElementById("numero").value);
    var res;

    var sign=Math.sign(numero);

    if (sign==1){
        res="positivo";
    }
    else if(sign == -1){
       res="negativo";
    }
       else if(sign == 0){
        res="cero";
    }
    else{
        res="NaN";
    }
    
    document.getElementById("result").innerHTML=`El numero es ${res}`;
}