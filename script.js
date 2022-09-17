const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="AM";
    console.log(h,m,s);

    if(h>12){
        h=h-12
        ampm="PM"
        console.log(h,m,s);
    }
        h= h<10 ? "0" + h : h;
        m= m<10 ? "0" + m : m;
        s= s<10 ? "0" + s : s;
        console.log(h,m,s,ampm);

    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    ampmE1.innerHTML=ampm;
    
    }
    const intr = 

    setInterval(()=>{

        updateClock()
    },1000);
    // setTimeout(()=>{
    //     clearInterval(intr);
    // },10000)

updateClock();