function calculePerfect() {
  
  var perfectNumbers=[];
	var temp=0;
	var i=2;
		while(perfectNumbers.length<3){
			temp=0;
			for(var j=1; j<i; j++){
			if((i%j)==0){
				temp=temp+j;
			}
			}
			if(i==temp){
				perfectNumbers.push(i);
			}
		i++;	
		}
    document.getElementById("result").innerHTML=`Los 3 primeros números perfectos son ${perfectNumbers} `;
    
  }