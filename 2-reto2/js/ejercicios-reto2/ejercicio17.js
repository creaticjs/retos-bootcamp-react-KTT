
function calcularBilletes() {

	
    var cantidad=parseInt(document.getElementById("cantidad").value);
    
    if( Math.sign(cantidad) == -1 ){
    $('.toast').toast('show');
    }

    var cincuenta=0, veinte=0, diez=0, cinco=0, dos=0, mil=0;

    cincuenta=Math.trunc(cantidad/50000);
    cantidad=cantidad-(cincuenta*50000);

    veinte=Math.trunc(cantidad/20000);
    cantidad=cantidad-(veinte*20000);

    diez=Math.trunc(cantidad/10000);
    cantidad=cantidad-(diez*10000);

    cinco=Math.trunc(cantidad/5000);
    cantidad=cantidad-(cinco*5000);
    
    dss=Math.trunc(cantidad/2000);
    cantidad=cantidad-(dos*2000);

    uno=Math.trunc(cantidad/1000);
    cantidad=cantidad-(uno*1000);
   
    
    console.log("cincuenta:"+cincuenta);
    console.log("veinte:"+veinte);
    console.log("diez:"+diez);
    console.log("cinco:"+cinco);
    console.log("dos:"+dos);
    console.log("mil:"+uno);

    
  
    document.getElementById("result7").innerHTML=`Billetes de ciencuenta mil: ${cincuenta} `;
    document.getElementById("result8").innerHTML=`Billetes de veinte mil: ${veinte} `;
    document.getElementById("result9").innerHTML=`Billetes de diez mil: ${diez} `;
    document.getElementById("result4").innerHTML=`Billetes de cinco mil: ${cinco} `;
    document.getElementById("result5").innerHTML=`Billetes de dos mil: ${dos} `;
    document.getElementById("result6").innerHTML=`Billetes de mil: ${uno} `;


}