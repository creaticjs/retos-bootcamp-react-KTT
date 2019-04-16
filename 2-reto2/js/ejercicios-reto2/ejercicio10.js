function calcularRomano() {

	
	
	var numero=parseInt(document.getElementById("numero").value);
	var unidades = Math.trunc(numero%10); 
	numero = numero / 10; 
	var decenas = Math.trunc(numero % 10); 
	numero =numero /10; 
	var centenas = Math.trunc(numero % 10);
	numero= numero /10; 
	var millar = Math.trunc(numero % 10); 
	numero = numero / 10;
	
	var res="";

	function resultado(romano){
		res=res+romano;
	}
	
	switch(millar){
		case 1: resultado("M");break;
		case 2: resultado("MM"); break;
		case 3: resultado("MMM");break;
	}
	
	switch(centenas){
		case 1: resultado("C");break;
		case 2: resultado("CC");break;
		case 3: resultado("CCC");break;
		case 4: resultado("CD");break;
		case 5: resultado("D");break;
		case 6: resultado("DC");break;
		case 7: resultado("DCC");break;
		case 8: resultado("DCCC");break;
		case 9: resultado("CM");break;
	}
	
	switch(decenas){
		case 1: resultado("X");break;
		case 2: resultado("XX");break;
		case 3: resultado("XXX");break;
		case 4: resultado("XL");break;
		case 5: resultado("L");break;
		case 6: resultado("LX");break;
		case 7: resultado("LXX");break;
		case 8: resultado("LXXX");break;
		case 9: resultado("XC");break;
	}
	
	switch(unidades){
		case 1: resultado("I");break;
		case 2: resultado("II");break;
		case 3: resultado("III");break;
		case 4: resultado("IV");break;
		case 5: resultado("V");break;
		case 6: resultado("VI");break;
		case 7: resultado("VII");break;
		case 8: resultado("VIII");break;
		case 9: resultado("IX");break;
	}
	
	console.log(res);

	if(Math.sign(numero) ==-1){
    $('.toast').toast('show',5000);
    }
    else{
        document.getElementById("result").innerHTML=`El resultado es ${res} `;
    }

	
	

}