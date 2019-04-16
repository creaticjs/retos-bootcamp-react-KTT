	const mcd={
		title: "maximo comun divisor",
		calculateMCD: function(){
			var m=parseInt(document.getElementById("m").value);
			var n=parseInt(document.getElementById("n").value);

			if(m<0 || n <0){
				$('.toast').toast('show',5000);
			}
			else{
			var aux, res;
			var temp =true;

			while(temp){
				if(m<n){
				aux=m;
				m=n;
				n=aux;
				}
				else if(m==n){
						res=n;
				temp=false;
				}
				else{
					var remainder=m%n;

				if(remainder==0){
					res=n;
					temp=false;
				}
				else{
					m=n;
					n=remainder;
				}
				}
			}
			document.getElementById("result").innerHTML=`El mcd ${res} `;
			}
		}
	};

	var calculate=document.getElementById("calculate");
	calculate.addEventListener("click",mcd.calculateMCD);
