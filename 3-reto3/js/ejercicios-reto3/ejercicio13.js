function calculate(){
	 var number=parseInt(document.getElementById("number").value);
    
     if(number < -0){
        $('.toast').toast('show');
        }
    else{
    var sum=0;
    for(var i=1; i<=number; i++){
        sum=sum+(i/Math.pow(2,i));
    }
    console.log(sum);
     document.getElementById("result").innerHTML=`El resultado es ${sum}`;
    }
}