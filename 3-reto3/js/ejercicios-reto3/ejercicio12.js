function calculate(){
	var number=parseInt(document.getElementById("n").value);

	if(number < -0){
        $('.toast').toast('show');
        }
    else{
    var sum=0;
    for(var i=1; i<=number; i++){
        sum=sum+(1/i);
    }
    document.getElementById("result").innerHTML=`El resultado es ${sum}`;
	}
}