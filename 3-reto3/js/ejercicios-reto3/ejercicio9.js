
function calculateMonths() {

    var amount=parseInt(document.getElementById("n").value);
    if(amount<0){
        $('.toast').toast('show');
    }

    else{
	var fibo=[1,1];
	var week=2;
	var amount=54;
	var i=1;
	while(fibo[fibo.length-1]<=amount){
		fibo[i+1]=fibo[i]+fibo[i-1];
		week++;
		i++;
	}
    console.log(week);
    document.getElementById("result").innerHTML= `El número de semanas es ${week}`;
    }
   	
}