let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false;

function start() {
    timer=true;
    stopWatch();
    
}
function stop() {
    timer=false;
    
}function reset() {
    timer=false;

     hr=0;
     min=0;
     sec=0;
     count=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";

}

function stopWatch(){
    if(timer== true){
        count++;

        if(count == 100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }

        if(min==60){
            hr++;
            min=0;
            sec=0;
        }
       
            
        document.getElementById('hr').innerHTML= hr;
        document.getElementById('min').innerHTML=min;
        document.getElementById('sec').innerHTML=sec;
        document.getElementById('count').innerHTML=count;
        setTimeout("stopWatch()",10)
    }
}