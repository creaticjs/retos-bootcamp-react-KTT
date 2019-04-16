function resolver(){
	 var a=parseInt(document.getElementById("a").value);
     var b=parseInt(document.getElementById("b").value);
     var c=parseInt(document.getElementById("c").value);
     var d=parseInt(document.getElementById("d").value);
     var e=parseInt(document.getElementById("e").value);
     var f=parseInt(document.getElementById("f").value);

     var x=((c*e)-(b*f))/((a*e)-(b*d));
     var y=((a*f)-(c*d))/((a*e)-(b*d));

     console.log(x);
     console.log(y);

     document.getElementById("result").innerHTML=`x = ${x}, y=${y} `;

}