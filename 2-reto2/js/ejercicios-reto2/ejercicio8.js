function calcularNumero() {

    var numero_escrito=document.getElementById("numero").value;
    var  arr =numero_escrito.split(" ");
    
    var centenas= arr[0];
    var decenas= arr[1];
    var y= arr[2];
    var unidades= arr[3];

    if(centenas ==undefined) {
      centenas="no-def";
    }
    else{
      centenas=centenas.toLowerCase();
    }

    if(decenas ==undefined) {
      decenas="no-def";
    }
    else{
      decenas=decenas.toLowerCase();
    }
    if(unidades ==undefined) {
      unidades="no-def";
    }
    else{
      unidades=unidades.toLowerCase();
    }

    decenas_= decenas=='once' || decenas=='doce' || decenas=='trece' || decenas=='catorce' || decenas =='quince';

    if(decenas.startsWith('veinti') || ( decenas.startsWith('die')) || decenas_==true ){
      unidades="otro";
    }

    var res="";

  function resultado(romano){
    res=res+romano;
  }
  
  switch(centenas){
    case 'no-def': resultado("0"); break;
    case 'cien': resultado("1");break;
    case 'ciento': resultado("1");break;
    case 'doscientos': resultado("2");break;
    case 'trecientos': resultado("3");break;
    case 'cuatrocientos': resultado("4");break;
    case 'quinientos': resultado("5");break;
    case 'seisientos': resultado("6");break;
    case 'setecientos': resultado("7");break;
    case 'ochocientos': resultado("8");break;
    case 'novecientos': resultado("9");break;
  }
  
  switch(decenas){
    case 'no-def': resultado("0"); break;
    case 'diez': resultado("10");break;
    case 'once': resultado("11");break;
    case 'doce': resultado("12");break;
    case 'trece': resultado("13");break;
    case 'catorce': resultado("14");break;
    case 'quince': resultado("15");break;
    case 'dieciseis': resultado("16");break;
    case 'diecisiete': resultado("17");break;
    case 'dieciocho': resultado("18");break;
    case 'diecinueve': resultado("19");break;
    case 'veinte': resultado("2");break;
    case 'veintiuno': resultado("21");break;
    case 'veintidos': resultado("22");break;
    case 'veintitres': resultado("23");break;
    case 'veinticuatro': resultado("24");break;
    case 'veinticinco': resultado("25");break;
    case 'veintiseis': resultado("26");break;
    case 'veintisiete': resultado("27");break;
    case 'veintiocho': resultado("28");break;
    case 'veintinueve': resultado("29");break;
    case 'treinta': resultado("3");break;
    case 'cuarenta': resultado("4");break;
    case 'cincuenta': resultado("5");break;
    case 'sesenta': resultado("6");break;
    case 'setenta': resultado("7");break;
    case 'ochenta': resultado("8");break;
    case 'noveinta': resultado("9");break;
  }
  
  switch(unidades){
    case 'otro': resultado(""); break;
    case 'no-def': resultado("0"); break;
    case 'uno': resultado("1");break;
    case 'dos': resultado("2");break;
    case 'tres': resultado("3");break;
    case 'cuatro': resultado("4");break;
    case 'cinco': resultado("5");break;
    case 'seis': resultado("6");break;
    case 'siete': resultado("7");break;
    case 'ocho': resultado("8");break;
    case 'nueve': resultado("9");break;
  }
  
  console.log(res); 
  document.getElementById("result").innerHTML=`El resultado es ${res} `;
  }