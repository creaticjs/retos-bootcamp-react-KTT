function calculate() {

  var x=parseFloat(document.getElementById("x").value);

  if(x < 0){
    $('.toast').toast('show');
  }
  else{
	var sum=0;
	var factorial=1;
	for(var i=1; i<=x; i++){
		factorial=1;
		for(var j=1; j<=i; j++){
			factorial=factorial*j;
		}
		sum=sum+(Math.pow(x,i))/factorial;
	}
	sum=sum+1;

  document.getElementById("result").innerHTML=`El resultado es ${sum} `;
  }
  }