function redondear(){
	 var a=parseInt(document.getElementById("a").value);
	 var b=parseInt(document.getElementById("b").value);
	 var c=parseInt(document.getElementById("c").value);
	 var d=parseInt(document.getElementById("d").value);

	 temp=a*b*c*d;
	 var n=(a*1000)+(b*100)+(c*10)+d;
	 console.log(n);

	 if(b>=6){
	 	a=a+1;
	 	b=0;
	 	c=0;
	 	d=0;
	 }
	else if(c>=6){
	 b=b+1;
	 c=0;
	 d=0;
	}
	else if(c<5){
	 	c=0;
	 	d=0;
	 }
	else if(b>=9 && c>=6){
	 	a=a+1;
	 	b=0;
	 	c=0;
	 	d=0;
	 }

	 var res=(a*1000)+(b*100)+(c*10)+d;
	 console.log(res);


	if(res > 10000 || (Math.sign(temp) == -1)){
    $('.toast').toast('show');
    }
    else{
        document.getElementById("result").innerHTML=`El resultado es ${res} `;  
    }


}

