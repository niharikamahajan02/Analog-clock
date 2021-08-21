function time(){

     dt= new Date();
     console.log(dt);
     lhr= dt.getHours();
     lmin= dt.getMinutes();
     lsec=dt.getSeconds();

     hrot=30*lhr + lsec/2;
     mrot=6* lmin;
     srot=6*lsec;

   hour.style.transform =`rotate(${hrot}deg)`;
   min.style.transform =`rotate(${mrot}deg)`;

   sec.style.transform =`rotate(${srot}deg)`;


}
setInterval(function() {time();}, 1000);


