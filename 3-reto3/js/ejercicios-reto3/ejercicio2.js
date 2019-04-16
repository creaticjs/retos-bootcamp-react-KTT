
function calculatePi() {

var n=parseInt(document.getElementById("n").value);

if(n<=0){
    $('.toast').toast('show');
}
else{
var pi=0;
var temp1=0; temp2=0;
    for(var i=1; i<=n; i+=4){
    temp1=temp1 + ((4)/(i));

    }
    for(var i=3; i<=n; i+=4){
    temp2=temp2 - ((4)/(i));
    }
	pi=temp1+temp2;

document.getElementById("result").innerHTML=`El valor de PI es: ${pi}`;
}
}

