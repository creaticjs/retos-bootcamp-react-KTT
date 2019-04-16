function show(){
	var number=parseInt(document.getElementById("number").value);
    
    if(number < -0){
        $('.toast').toast('show');
        }
    else{
    var temp="";
	for(var i=1; i<=number; i++){
        temp=temp+"*";
        console.log(temp);
    }
    document.getElementById("result").innerHTML=`${temp}`;
    }
}