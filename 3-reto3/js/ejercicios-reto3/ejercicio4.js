const sunday={
    title: "easter sunday",
    easterSunday: function(){
        
        var a,b,c,d,e,day, temp;

        var days=[];
	    for(var i=1990; i<=2000; i++){
            year=i;
        
            a=year%19;
            b=year%4;
            c=year%7;
            d=(19*a*24)%30;
            e=(2*b*4*c*6*d+5)%7;
            day=22+d+e;
            
            if(day<=31){
                days.push(day);
            }
            else{
                temp=day-31;
                days.push(temp);
            }
        }
        document.getElementById("result").innerHTML=`Los dias son: ${days}`;
    }
};

    var calculate=document.getElementById("calculate");
    calculate.addEventListener("click", sunday.easterSunday);

    
    