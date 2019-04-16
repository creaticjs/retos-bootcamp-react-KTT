function calculatePerfect() {
    var n=parseInt(document.getElementById("n").value);
    if(n <=0){
        $('.toast').toast('show');
        }
    else{
    
    var perfectNumbers=[];
	var temp=0;
		for(var i=2; i<=n; i++){
			temp=0;
			for(var j=1; j<i; j++){
			if((i%j)==0){
				temp=temp+j;
			}
			}
			if(i==temp){
				perfectNumbers.push(i);
			}	
		}
    document.getElementById("result").innerHTML=`Los 3 primeros números perfectos son ${perfectNumbers} `;
    }
  }