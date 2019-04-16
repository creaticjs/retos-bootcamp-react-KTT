function calculate() {

var nNumeros=document.getElementById("nNumeros").value;
var numbers =nNumeros.split(",");
console.log(numbers);
if(numbers.length <2){
    $('.toast').toast('show');
}
else{
	var sum=0, media=0;
	var largest=0, smallest=999999;
	for(var i=0; i<=(numbers.length)-1; i++){
		sum=sum+parseInt(numbers[i]);
		if(numbers[i]>=largest){
			largest=numbers[i];
		}
		if(numbers[i]<=smallest){
			smallest=numbers[i];
		}
	}
	console.log(sum);
	console.log(numbers.length);
	media=((sum)/(numbers.length)).toFixed(3);

document.getElementById("result").innerHTML=`El número mas grande es: ${largest}`;
document.getElementById("result2").innerHTML=`El número mas pequeño es: ${smallest}`;
document.getElementById("result3").innerHTML=`La media es es: ${media}`;
}
}